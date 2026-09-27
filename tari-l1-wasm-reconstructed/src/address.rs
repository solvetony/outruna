use tari_common_types::{
    tari_address::{TariAddress, TariAddressFeatures},
    types::CompressedPublicKey,
};
use tari_utilities::hex::Hex;
use wasm_bindgen::prelude::*;

use crate::{error::js_err, network::parse_network};

#[wasm_bindgen]
#[derive(Clone)]
pub struct WasmTariAddress {
    pub(crate) inner: TariAddress,
}

impl From<TariAddress> for WasmTariAddress {
    fn from(inner: TariAddress) -> Self {
        Self { inner }
    }
}

#[wasm_bindgen]
impl WasmTariAddress {
    #[wasm_bindgen(js_name = newDual)]
    pub fn new_dual(
        view_key_hex: &str,
        spend_key_hex: &str,
        network: &str,
        features: u8,
    ) -> Result<WasmTariAddress, JsValue> {
        let view_key = CompressedPublicKey::from_hex(view_key_hex).map_err(js_err)?;
        let spend_key = CompressedPublicKey::from_hex(spend_key_hex).map_err(js_err)?;
        let network = parse_network(network)?;
        let features = TariAddressFeatures::from_bits(features)
            .ok_or_else(|| JsValue::from_str("invalid Tari address feature bits"))?;
        let inner = TariAddress::new_dual_address(view_key, spend_key, network, features, None).map_err(js_err)?;
        Ok(Self { inner })
    }

    #[wasm_bindgen(js_name = newSingle)]
    pub fn new_single(spend_key_hex: &str, network: &str, features: u8) -> Result<WasmTariAddress, JsValue> {
        let spend_key = CompressedPublicKey::from_hex(spend_key_hex).map_err(js_err)?;
        let network = parse_network(network)?;
        let features = TariAddressFeatures::from_bits(features)
            .ok_or_else(|| JsValue::from_str("invalid Tari address feature bits"))?;
        let inner = TariAddress::new_single_address(spend_key, network, features).map_err(js_err)?;
        Ok(Self { inner })
    }

    #[wasm_bindgen(js_name = fromBase58)]
    pub fn from_base58(value: &str) -> Result<WasmTariAddress, JsValue> {
        TariAddress::from_base58(value)
            .map(Self::from)
            .map_err(js_err)
    }

    #[wasm_bindgen(js_name = fromEmoji)]
    pub fn from_emoji(value: &str) -> Result<WasmTariAddress, JsValue> {
        TariAddress::from_emoji_string(value)
            .map(Self::from)
            .map_err(js_err)
    }

    #[wasm_bindgen(js_name = fromHex)]
    pub fn from_hex(value: &str) -> Result<WasmTariAddress, JsValue> {
        TariAddress::from_hex(value)
            .map(Self::from)
            .map_err(js_err)
    }

    #[wasm_bindgen(js_name = fromBytes)]
    pub fn from_bytes(value: &[u8]) -> Result<WasmTariAddress, JsValue> {
        TariAddress::from_bytes(value)
            .map(Self::from)
            .map_err(js_err)
    }

    #[wasm_bindgen(js_name = withPaymentId)]
    pub fn with_payment_id(&self, payment_id: &[u8]) -> Result<WasmTariAddress, JsValue> {
        self.inner
            .with_memo_field_payment_id(payment_id.to_vec())
            .map(Self::from)
            .map_err(js_err)
    }

    #[wasm_bindgen(js_name = toBase58)]
    pub fn to_base58(&self) -> String {
        self.inner.to_base58()
    }

    #[wasm_bindgen(js_name = toEmoji)]
    pub fn to_emoji(&self) -> String {
        self.inner.to_emoji_string()
    }

    #[wasm_bindgen(js_name = toHex)]
    pub fn to_hex(&self) -> String {
        self.inner.to_hex()
    }

    #[wasm_bindgen(js_name = toBytes)]
    pub fn to_bytes(&self) -> Vec<u8> {
        self.inner.to_vec()
    }

    #[wasm_bindgen(js_name = toString)]
    pub fn to_string_js(&self) -> String {
        self.inner.to_base58()
    }

    #[wasm_bindgen(getter, js_name = network)]
    pub fn network(&self) -> String {
        self.inner.network().to_string()
    }

    #[wasm_bindgen(getter, js_name = featureBits)]
    pub fn feature_bits(&self) -> u8 {
        self.inner.features().as_u8()
    }

    #[wasm_bindgen(getter, js_name = isSingle)]
    pub fn is_single(&self) -> bool {
        matches!(self.inner, TariAddress::Single(_))
    }

    #[wasm_bindgen(getter, js_name = paymentId)]
    pub fn payment_id(&self) -> Vec<u8> {
        self.inner.get_memo_field_payment_id_bytes()
    }

    /// Public view key encoded in compressed Tari/Ristretto form.
    #[wasm_bindgen(getter, js_name = viewKeyHex)]
    pub fn view_key_hex(&self) -> Option<String> {
        self.inner.public_view_key().map(Hex::to_hex)
    }

    /// Public spend key encoded in compressed Tari/Ristretto form.
    #[wasm_bindgen(getter, js_name = spendKeyHex)]
    pub fn spend_key_hex(&self) -> String {
        self.inner.public_spend_key().to_hex()
    }
}
