use tari_common::configuration::Network;
use tari_common_types::{
    tari_address::{TariAddress, TariAddressFeatures},
    types::{CompressedPublicKey, PrivateKey},
};
use tari_transaction_components::key_manager::{
    KeyManager,
    TransactionKeyManagerInterface,
    wallet_types::{ViewWallet, WalletType},
};

#[test]
fn view_wallet_reconstructs_the_same_dual_address() {
    let full = KeyManager::new_random().unwrap();
    let view_private = full.get_private_view_key();
    let view_public = full.get_view_key().pub_key;
    let spend_public = full.get_spend_key().pub_key;

    let watch = KeyManager::new(WalletType::ViewWallet(ViewWallet::new(
        spend_public.clone(),
        view_private,
        None,
    )))
    .unwrap();

    assert_eq!(watch.get_view_key().pub_key, view_public);
    assert_eq!(watch.get_spend_key().pub_key, spend_public);

    let full_address = TariAddress::new_dual_address(
        full.get_view_key().pub_key,
        full.get_spend_key().pub_key,
        Network::Esmeralda,
        TariAddressFeatures::create_one_sided_only(),
        None,
    )
    .unwrap();

    let watch_address = TariAddress::new_dual_address(
        watch.get_view_key().pub_key,
        watch.get_spend_key().pub_key,
        Network::Esmeralda,
        TariAddressFeatures::create_one_sided_only(),
        None,
    )
    .unwrap();

    assert_eq!(full_address, watch_address);

    // The public spend key is present, but the private spend key is deliberately absent.
    let wallet_type = watch.get_wallet_type();
    assert!(matches!(wallet_type, WalletType::ViewWallet(_)));
    assert!(wallet_type.get_private_spend_key().is_none());
    assert_eq!(CompressedPublicKey::from_secret_key(wallet_type.get_view_key()), view_public);
}

#[test]
fn view_recovery_checks_values_masks_and_unrelated_wallets() {
    use tari_l1_wasm::WasmWallet;
    use tari_transaction_components::{
        key_manager::TariKeyId,
        transaction_components::{EncryptedData, MemoField, memo_field::TxType, one_sided::public_key_to_output_encryption_key},
    };
    use tari_utilities::hex::Hex;

    let full = KeyManager::new_random().unwrap();
    let private_view = full.get_private_view_key();
    let watch = WasmWallet::from_view_key_hex(
        &private_view.to_hex(), &full.get_spend_key().pub_key.to_hex(), "mainnet",
    ).unwrap();
    let unrelated = WasmWallet::new("mainnet").unwrap();
    let sender = full.get_view_key().pub_key;
    let shared = full.get_diffie_hellman_shared_secret(&TariKeyId::ViewKey, &sender).unwrap();
    let one_sided_key = public_key_to_output_encryption_key(&shared).unwrap();
    let mask = PrivateKey::from(42u64);
    let mask_id = full.create_encrypted_key(mask.clone(), None).unwrap();
    let commitment = full.get_commitment(&mask_id, &PrivateKey::from(123u64)).unwrap();

    for encryption_key in [private_view, one_sided_key] {
        for (value, output_mask, expected) in [
            (123u64, mask.clone(), true),
            (124u64, mask.clone(), false),
            (123u64, PrivateKey::from(43u64), false),
        ] {
            let data = EncryptedData::encrypt_data(
                &encryption_key, &commitment, value.into(), &output_mask,
                MemoField::new_open(b"view-only fixture".to_vec(), TxType::PaymentToOther).unwrap(),
            ).unwrap();
            let args = (commitment.to_hex(), data.to_hex(), sender.to_hex());
            assert_eq!(watch.is_output_mine(&args.0, &args.1, &args.2).unwrap(), expected);
            assert!(!unrelated.is_output_mine(&args.0, &args.1, &args.2).unwrap());
            if expected {
                let output = watch.view_output(&args.0, &args.1, &args.2).unwrap();
                assert_eq!(output.value_micro(), 123);
                assert_eq!(output.payment_id_text().as_deref(), Some("view-only fixture"));
            }
        }
    }
    assert!(watch.is_view_only());
    assert!(!watch.can_spend());
}
