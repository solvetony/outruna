use tari_transaction_components::{MicroMinotari, transaction_components::MemoField};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct WasmViewedOutput {
    commitment_hex: String,
    value: MicroMinotari,
    memo: MemoField,
}

impl WasmViewedOutput {
    pub(crate) fn new(commitment_hex: String, value: MicroMinotari, memo: MemoField) -> Self {
        Self {
            commitment_hex,
            value,
            memo,
        }
    }
}

#[wasm_bindgen]
impl WasmViewedOutput {
    #[wasm_bindgen(getter, js_name = commitmentHex)]
    pub fn commitment_hex(&self) -> String {
        self.commitment_hex.clone()
    }

    #[wasm_bindgen(getter, js_name = valueMicro)]
    pub fn value_micro(&self) -> u64 {
        self.value.as_u64()
    }

    #[wasm_bindgen(getter, js_name = paymentId)]
    pub fn payment_id(&self) -> Vec<u8> {
        self.memo.get_payment_id()
    }

    #[wasm_bindgen(getter, js_name = paymentIdText)]
    pub fn payment_id_text(&self) -> Option<String> {
        String::from_utf8(self.memo.get_payment_id()).ok()
    }

    #[wasm_bindgen(getter, js_name = senderFeeMicro)]
    pub fn sender_fee_micro(&self) -> Option<u64> {
        self.memo.get_fee().map(|fee| fee.as_u64())
    }

    /// Tari memo transaction type, e.g. "PaymentToOther".
    #[wasm_bindgen(getter, js_name = txType)]
    pub fn tx_type(&self) -> String {
        self.memo.get_type().to_string()
    }

    /// Exact decrypted memo bytes. This intentionally exposes the raw memo so
    /// browser code can evolve without requiring another WASM rebuild for each
    /// future MemoField variant.
    #[wasm_bindgen(getter, js_name = memoBytes)]
    pub fn memo_bytes(&self) -> Vec<u8> {
        self.memo.to_bytes()
    }
}
