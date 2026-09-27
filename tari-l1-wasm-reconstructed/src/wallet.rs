use tari_common_types::{
    seeds::cipher_seed::CipherSeed,
    tari_address::{TariAddress, TariAddressFeatures},
    types::{CompressedCommitment, CompressedPublicKey, PrivateKey},
};
use tari_transaction_components::{
    key_manager::{
        KeyManager,
        TransactionKeyManagerInterface,
        wallet_types::{SeedWordsWallet, ViewWallet, WalletType},
    },
    transaction_components::EncryptedData,
};
use tari_utilities::hex::{Hex, from_hex, to_hex};
use wasm_bindgen::prelude::*;

use crate::{
    WasmTariAddress,
    WasmViewedOutput,
    error::{js_err, js_message},
    network::parse_network,
};

#[wasm_bindgen]
pub struct WasmWallet {
    network: tari_common::configuration::Network,
    key_manager: KeyManager,
    seed: Option<CipherSeed>,
    view_only: bool,
}

impl WasmWallet {
    fn from_seed(seed: CipherSeed, network: tari_common::configuration::Network) -> Result<Self, JsValue> {
        let seed_wallet = SeedWordsWallet::construct_new(seed.clone()).map_err(js_err)?;
        let key_manager = KeyManager::new(WalletType::SeedWords(seed_wallet)).map_err(js_err)?;
        Ok(Self {
            network,
            key_manager,
            seed: Some(seed),
            view_only: false,
        })
    }

    fn from_view_parts(
        private_view_key: PrivateKey,
        public_spend_key: CompressedPublicKey,
        network: tari_common::configuration::Network,
    ) -> Result<Self, JsValue> {
        let wallet = ViewWallet::new(public_spend_key, private_view_key, None);
        let key_manager = KeyManager::new(WalletType::ViewWallet(wallet)).map_err(js_err)?;
        Ok(Self {
            network,
            key_manager,
            seed: None,
            view_only: true,
        })
    }

    fn recover_viewed_output_inner(
        &self,
        commitment_hex: &str,
        encrypted_data_hex: &str,
        sender_offset_pub_hex: &str,
    ) -> Result<Option<WasmViewedOutput>, JsValue> {
        let commitment = CompressedCommitment::from_hex(commitment_hex).map_err(js_err)?;
        let encrypted_data = EncryptedData::from_hex(encrypted_data_hex).map_err(js_err)?;
        let sender_offset_public_key = CompressedPublicKey::from_hex(sender_offset_pub_hex).map_err(js_err)?;

        let recovered = self
            .key_manager
            .try_output_key_recovery(&commitment, &encrypted_data, &sender_offset_public_key)
            .map_err(js_err)?;

        let Some((key_id, value, memo)) = recovered else {
            return Ok(None);
        };
        // v5.6.0 recovery discards verify_mask's boolean result.
        if !self.key_manager.verify_mask(&commitment, &key_id, value.as_u64()).map_err(js_err)? {
            return Ok(None);
        }
        Ok(Some(WasmViewedOutput::new(commitment.to_hex(), value, memo)))
    }
}

#[wasm_bindgen]
impl WasmWallet {
    #[wasm_bindgen(constructor)]
    pub fn new(network: &str) -> Result<WasmWallet, JsValue> {
        let network = parse_network(network)?;
        Self::from_seed(CipherSeed::random(), network)
    }

    #[wasm_bindgen(js_name = fromBackupHex)]
    pub fn from_backup_hex(backup_hex: &str, network: &str) -> Result<WasmWallet, JsValue> {
        let network = parse_network(network)?;
        let backup = from_hex(backup_hex).map_err(js_err)?;
        let seed = CipherSeed::from_enciphered_bytes(&backup, None).map_err(js_err)?;
        Self::from_seed(seed, network)
    }

    /// Construct a true watch-only Tari wallet.
    ///
    /// `private_view_key_hex` is the 32-byte *private* view key. A public view
    /// key cannot decrypt output data. `public_spend_key_hex` is only the
    /// compressed public spend key, so this wallet cannot spend.
    #[wasm_bindgen(js_name = fromViewKeyHex)]
    pub fn from_view_key_hex(
        private_view_key_hex: &str,
        public_spend_key_hex: &str,
        network: &str,
    ) -> Result<WasmWallet, JsValue> {
        let network = parse_network(network)?;
        let private_view_key = PrivateKey::from_hex(private_view_key_hex).map_err(js_err)?;
        let public_spend_key = CompressedPublicKey::from_hex(public_spend_key_hex).map_err(js_err)?;
        Self::from_view_parts(private_view_key, public_spend_key, network)
    }

    /// Safer watch-only constructor: take the private view key plus an existing
    /// dual Tari address, verify the view-key pair matches, and get the public
    /// spend key/network from that address.
    #[wasm_bindgen(js_name = fromViewKeyAndAddress)]
    pub fn from_view_key_and_address(private_view_key_hex: &str, address: &str) -> Result<WasmWallet, JsValue> {
        let private_view_key = PrivateKey::from_hex(private_view_key_hex).map_err(js_err)?;
        let address = TariAddress::from_base58(address)
            .or_else(|_| TariAddress::from_emoji_string(address))
            .or_else(|_| TariAddress::from_hex(address))
            .map_err(js_err)?;

        let expected_public_view_key = address
            .public_view_key()
            .ok_or_else(|| js_message("view-key wallets require a dual Tari address"))?;
        let actual_public_view_key = CompressedPublicKey::from_secret_key(&private_view_key);
        if &actual_public_view_key != expected_public_view_key {
            return Err(js_message("private view key does not match the Tari address public view key"));
        }

        Self::from_view_parts(private_view_key, address.public_spend_key().clone(), address.network())
    }

    #[wasm_bindgen(js_name = getAddress)]
    pub fn get_address(&self) -> Result<WasmTariAddress, JsValue> {
        let view_key = self.key_manager.get_view_key().pub_key;
        let spend_key = self.key_manager.get_spend_key().pub_key;
        TariAddress::new_dual_address(
            view_key,
            spend_key,
            self.network,
            TariAddressFeatures::create_one_sided_only(),
            None,
        )
        .map(WasmTariAddress::from)
        .map_err(js_err)
    }

    #[wasm_bindgen(js_name = getBackupHex)]
    pub fn get_backup_hex(&self) -> Result<String, JsValue> {
        let seed = self
            .seed
            .as_ref()
            .ok_or_else(|| js_message("view-only wallet has no CipherSeed backup"))?;
        seed.encipher(None).map(|bytes| to_hex(&bytes)).map_err(js_err)
    }

    /// Export the private view key. This does not grant spending authority, but
    /// it reveals the wallet's receivable output history and amounts, so callers
    /// should treat it as sensitive wallet metadata.
    #[wasm_bindgen(js_name = exportPrivateViewKeyHex)]
    pub fn export_private_view_key_hex(&self) -> String {
        self.key_manager.get_private_view_key().to_hex()
    }

    #[wasm_bindgen(getter, js_name = publicViewKeyHex)]
    pub fn public_view_key_hex(&self) -> String {
        self.key_manager.get_view_key().pub_key.to_hex()
    }

    #[wasm_bindgen(getter, js_name = publicSpendKeyHex)]
    pub fn public_spend_key_hex(&self) -> String {
        self.key_manager.get_spend_key().pub_key.to_hex()
    }

    #[wasm_bindgen(getter, js_name = isViewOnly)]
    pub fn is_view_only(&self) -> bool {
        self.view_only
    }

    #[wasm_bindgen(getter, js_name = canSpend)]
    pub fn can_spend(&self) -> bool {
        !self.view_only
    }

    /// Fast ownership filter for chain scans. This uses Tari's exact
    /// `try_output_key_recovery`, which first tries direct view-key recovery and
    /// then the one-sided DH path using `sender_offset_public_key`.
    #[wasm_bindgen(js_name = isOutputMine)]
    pub fn is_output_mine(
        &self,
        commitment_hex: &str,
        encrypted_data_hex: &str,
        sender_offset_pub_hex: &str,
    ) -> Result<bool, JsValue> {
        Ok(self
            .recover_viewed_output_inner(commitment_hex, encrypted_data_hex, sender_offset_pub_hex)?
            .is_some())
    }

    /// Recover amount + memo from an output without creating a spendable input.
    /// This is the main watch-only/view-key API.
    #[wasm_bindgen(js_name = viewOutput)]
    pub fn view_output(
        &self,
        commitment_hex: &str,
        encrypted_data_hex: &str,
        sender_offset_pub_hex: &str,
    ) -> Result<WasmViewedOutput, JsValue> {
        self.recover_viewed_output_inner(commitment_hex, encrypted_data_hex, sender_offset_pub_hex)?
            .ok_or_else(|| js_message("output is not recoverable with this wallet view key"))
    }

    /// Debug helper retained from the published package API.
    #[wasm_bindgen(js_name = wasmBuildMarker)]
    pub fn wasm_build_marker() -> String {
        format!("tari-l1-wasm-reconstructed/{}", env!("CARGO_PKG_VERSION"))
    }
}
