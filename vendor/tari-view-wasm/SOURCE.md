# Tari view WASM provenance

Built from the separate sibling source directory `../tari-l1-wasm-reconstructed/`
against Tari `v5.6.0`, commit
`b006631196ca1b32caffd3e9adebc6ddc31cb37e`. The reconstructed crate is
an independently supplied wrapper around Tari's BSD-3-Clause library. It is
not the source for the existing signing package.

Package: `@outruna/tari-view-wasm` `5.6.0-pre.8-recon.1`. Imported 2026-09-27.
The Tari upstream path used for the reconstruction is
`base_layer/transaction_components/src/key_manager/`.

Build command (after placing the crate in the Tari v5.6.0 workspace):

```sh
cargo build -p tari_l1_wasm --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/tari_l1_wasm.wasm --target bundler --out-dir pkg
```

The companion is used only for private-view-key output detection and amount
recovery. The original `@chironbuilder/tari-l1-wasm` remains the signer.

SHA-256 of `tari_l1_wasm_bg.wasm`:

```text
9a199884bb0aea4085fc7a57905709cca521465eb09d03b616dc1f3b9d4f2489
```
