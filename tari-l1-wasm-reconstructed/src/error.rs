use wasm_bindgen::JsValue;

pub(crate) fn js_err<E: std::fmt::Display>(err: E) -> JsValue {
    JsValue::from_str(&err.to_string())
}

pub(crate) fn js_message(message: impl AsRef<str>) -> JsValue {
    JsValue::from_str(message.as_ref())
}
