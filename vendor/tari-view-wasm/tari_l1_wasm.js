/* @ts-self-types="./tari_l1_wasm.d.ts" */
import * as wasm from "./tari_l1_wasm_bg.wasm";
import { __wbg_set_wasm } from "./tari_l1_wasm_bg.js";

__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    WasmTariAddress, WasmViewedOutput, WasmWallet, wasmBuildMarker
} from "./tari_l1_wasm_bg.js";
