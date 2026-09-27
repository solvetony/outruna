//! Reconstruction of the unpublished `base_layer/tari_l1_wasm` crate used to
//! build `@chironbuilder/tari-l1-wasm`.
//!
//! The first reconstruction milestone deliberately concentrates on the parts
//! needed for view-key/watch-only support: Tari addresses, seed wallets,
//! `WalletType::ViewWallet`, and output recovery.
//!
//! The transaction/burn surface from the published WASM package is documented
//! in RECONSTRUCTION_MAP.md and should be restored on top of this core.

mod address;
mod error;
mod network;
mod viewed_output;
mod wallet;

pub use address::WasmTariAddress;
pub use viewed_output::WasmViewedOutput;
pub use wallet::WasmWallet;

/// Marker used by the browser application to confirm which reconstructed WASM
/// build it has loaded.
#[wasm_bindgen::prelude::wasm_bindgen(js_name = wasmBuildMarker)]
pub fn wasm_build_marker() -> String {
    format!("tari-l1-wasm-reconstructed/{}", env!("CARGO_PKG_VERSION"))
}
