# Required Tari v5.6.0 workspace patch

Baseline used by this reconstruction:

- Tari tag: `v5.6.0`
- Commit: `b006631196ca1b32caffd3e9adebc6ddc31cb37e`

## 1. Add the crate to the workspace

In the root `Cargo.toml`, add:

```toml
"base_layer/tari_l1_wasm",
```

to `[workspace].members`.

## 2. wasm32 randomness backend

The published Chiron README says its source workspace configured the `getrandom` wasm-js backend, but upstream Tari v5.6.0 does not contain that setting. The unpublished build therefore had an extra workspace/build setting.

When the actual dependency graph asks for getrandom's wasm-js backend, configure the root workspace for the resolved getrandom version. Do this at the **workspace root** (nested `.cargo/config.toml` files are not applied when Cargo is invoked from the workspace root).

Do not blindly copy a cfg from a different getrandom major version. First run:

```sh
cargo tree -p tari_l1_wasm -i getrandom
```

and use the backend configuration required by that resolved version.

## 3. Build

```sh
rustup target add wasm32-unknown-unknown
wasm-pack build base_layer/tari_l1_wasm --target bundler --release --out-dir pkg
node base_layer/tari_l1_wasm/scripts/prepare-package.mjs --scope @chironbuilder --pkg-dir base_layer/tari_l1_wasm/pkg
```
