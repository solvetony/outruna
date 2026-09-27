use std::str::FromStr;

use tari_common::configuration::Network;
use wasm_bindgen::JsValue;

use crate::error::js_err;

pub(crate) fn parse_network(network: &str) -> Result<Network, JsValue> {
    Network::from_str(network).map_err(js_err)
}
