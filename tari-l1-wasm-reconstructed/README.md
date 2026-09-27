# tari-l1-wasm reconstructed — view-key milestone

This directory reconstructs the missing Rust source layer behind the publicly generated `@chironbuilder/tari-l1-wasm` package, with the first concrete extension being **Tari private-view-key / watch-only wallet support**.

It targets the Tari `v5.6.0` source tree at commit:

```text
b006631196ca1b32caffd3e9adebc6ddc31cb37e
```

The reconstruction is based on public generated JS/TypeScript exports and the exact corresponding Tari v5.6.0 primitives. It is not presented as the unpublished author's byte-for-byte source.

## Why view-key support fits cleanly

Tari v5.6.0 already defines a first-class watch-wallet type:

```rust
ViewWallet::new(public_spend_key, private_view_key, birthday)
```

That wallet has a private view key and a public spend key, but no private spend key. The normal Tari `KeyManager` therefore remains usable for address generation and output recovery while refusing operations that need spend authority.

The same `KeyManager::try_output_key_recovery` used by the wallet does both recovery paths:

1. direct recovery using the private view key (e.g. change/recovery data), then
2. one-sided recovery using Diffie-Hellman between the private view key and the output's `sender_offset_public_key`.

It also verifies the recovered value/mask against the output commitment.

## New browser API

```js
import { WasmWallet } from '@chironbuilder/tari-l1-wasm'

const watch = WasmWallet.fromViewKeyAndAddress(
  privateViewKeyHex,
  tariDualAddress
)

console.log(watch.isViewOnly) // true
console.log(watch.canSpend)   // false
console.log(watch.getAddress().toBase58())

if (watch.isOutputMine(commitmentHex, encryptedDataHex, senderOffsetPublicKeyHex)) {
  const output = watch.viewOutput(commitmentHex, encryptedDataHex, senderOffsetPublicKeyHex)
  console.log(output.valueMicro)
  console.log(output.paymentIdText)
}
```

Or construct directly from key material:

```js
const watch = WasmWallet.fromViewKeyHex(
  privateViewKeyHex,
  publicSpendKeyHex,
  'esmeralda'
)
```

A **private** view key is required for scanning. A public view key can identify an address but cannot decrypt the encrypted output data.

## Exporting a view key from a full wallet

```js
const full = new WasmWallet('esmeralda')
const privateViewKeyHex = full.exportPrivateViewKeyHex()
```

The private view key cannot spend, but it exposes transaction/output visibility. Store and transmit it accordingly.

## Integration

Copy this directory into a Tari v5.6.0 checkout as:

```text
base_layer/tari_l1_wasm/
```

Then follow `ROOT_WORKSPACE_PATCH.md`.

## What is reconstructed in this milestone

- seed wallet creation and backup import/export
- Tari dual/single addresses and encodings
- view-only wallet construction
- safe constructor that verifies a private view key matches a dual address
- public key getters and explicit private-view-key export
- one-sided output ownership filtering
- amount + payment/memo recovery for view-only wallets

See `RECONSTRUCTION_MAP.md` for the exact mapping and the remaining transaction/burn work.
