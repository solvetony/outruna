# Reconstruction map

This is a clean-room reconstruction from the public generated `@chironbuilder/tari-l1-wasm` package plus Tari v5.6.0 source APIs. It is **not** claimed to be byte-for-byte original source.

## Baseline

- Published package observed: `@chironbuilder/tari-l1-wasm` `5.6.0-pre.7`
- Package metadata points at `tari-project/tari/base_layer/tari_l1_wasm`
- Upstream baseline selected: Tari `v5.6.0`, commit `b006631196ca1b32caffd3e9adebc6ddc31cb37e`
- The upstream tag does not itself contain `base_layer/tari_l1_wasm`.

## High-confidence mappings

| Published WASM API | Tari v5.6.0 source primitive | Status |
| --- | --- | --- |
| `WasmTariAddress` | `tari_common_types::tari_address::TariAddress` | reconstructed |
| `WasmWallet` seed creation | `CipherSeed` + `SeedWordsWallet` + `KeyManager` | reconstructed |
| `getBackupHex` / `fromBackupHex` | `CipherSeed::encipher(None)` / `from_enciphered_bytes(..., None)` | reconstructed |
| dual wallet address | `TariAddress::new_dual_address` | reconstructed |
| `isOutputMine` | `KeyManager::try_output_key_recovery` | reconstructed |
| one-sided output decryption | view-key DH + `public_key_to_output_encryption_key` + `EncryptedData::decrypt_data` | delegated to upstream KeyManager |
| amount/memo recovery | `try_output_key_recovery` -> `(MicroMinotari, MemoField)` | reconstructed |
| view-only wallet | `WalletType::ViewWallet(ViewWallet::new(public_spend, private_view, ...))` | **new extension, reconstructed from upstream first-class type** |
| view-key export | `KeyManager::get_private_view_key` | **new extension** |

## New view-key API

```ts
WasmWallet.fromViewKeyHex(privateViewKeyHex, publicSpendKeyHex, network)
WasmWallet.fromViewKeyAndAddress(privateViewKeyHex, tariAddress)
wallet.exportPrivateViewKeyHex()
wallet.publicViewKeyHex
wallet.publicSpendKeyHex
wallet.isViewOnly
wallet.canSpend
wallet.viewOutput(commitmentHex, encryptedDataHex, senderOffsetPublicKeyHex)
```

`viewOutput` returns `WasmViewedOutput`:

```ts
{
  commitmentHex: string
  valueMicro: bigint
  paymentId: Uint8Array
  paymentIdText?: string
  senderFeeMicro?: bigint
  txType: string
  memoBytes: Uint8Array
}
```

## Security boundary

A Tari private view key is not a spend key, but it is sensitive: it allows recovery of wallet output amounts and memo/payment metadata. Treat it as watch-wallet authority, not public metadata.

`ViewWallet` carries only:

- private view key
- public spend key
- optional birthday

It does not carry the private spend key. This is why this reconstruction keeps `viewOutput` separate from the existing `importScannedOutput`/spending flow.

## Published surface still to reconstruct

The generated package proves these existed, but this phase does not pretend to recover their original implementation:

- `WasmTxBuilder`
- `WasmSignedTransaction`
- `WasmBurnBuilder`
- `WasmSignedBurn`
- `WasmWalletOutput` / full spendable `importScannedOutput`
- `WasmKeyPair`
- `WasmSchnorrSignature`
- fee/commitment/hash helper exports
- protobuf `SubmitTransactionRequest` serialization

### Recommended transaction reconstruction path

Use Tari v5.6.0's existing split-signing design instead of making a watch wallet sign:

1. Online/watch side: `KeyManager(WalletType::ViewWallet(...))`
2. Build/inspect transaction inputs and recipients.
3. `prepare_one_sided_transaction_for_signing(...)`
4. Move the prepared payload to a spend-capable signer.
5. `sign_locked_transaction(...)` with the full wallet/spend key.

That architecture is already tested upstream and preserves the view-only security boundary.
