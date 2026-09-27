export class WasmTariAddress {
    static __wrap(ptr) {
        const obj = Object.create(WasmTariAddress.prototype);
        obj.__wbg_ptr = ptr;
        WasmTariAddressFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmTariAddressFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmtariaddress_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get featureBits() {
        const ret = wasm.wasmtariaddress_featureBits(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {string} value
     * @returns {WasmTariAddress}
     */
    static fromBase58(value) {
        const ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_fromBase58(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} value
     * @returns {WasmTariAddress}
     */
    static fromBytes(value) {
        const ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_fromBytes(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @param {string} value
     * @returns {WasmTariAddress}
     */
    static fromEmoji(value) {
        const ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_fromEmoji(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @param {string} value
     * @returns {WasmTariAddress}
     */
    static fromHex(value) {
        const ptr0 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_fromHex(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @returns {boolean}
     */
    get isSingle() {
        const ret = wasm.wasmtariaddress_isSingle(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {string}
     */
    get network() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_network(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string} view_key_hex
     * @param {string} spend_key_hex
     * @param {string} network
     * @param {number} features
     * @returns {WasmTariAddress}
     */
    static newDual(view_key_hex, spend_key_hex, network, features) {
        const ptr0 = passStringToWasm0(view_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(spend_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(network, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_newDual(ptr0, len0, ptr1, len1, ptr2, len2, features);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @param {string} spend_key_hex
     * @param {string} network
     * @param {number} features
     * @returns {WasmTariAddress}
     */
    static newSingle(spend_key_hex, network, features) {
        const ptr0 = passStringToWasm0(spend_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(network, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_newSingle(ptr0, len0, ptr1, len1, features);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    get paymentId() {
        const ret = wasm.wasmtariaddress_paymentId(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Public spend key encoded in compressed Tari/Ristretto form.
     * @returns {string}
     */
    get spendKeyHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_spendKeyHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    toBase58() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_toBase58(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Uint8Array}
     */
    toBytes() {
        const ret = wasm.wasmtariaddress_toBytes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {string}
     */
    toEmoji() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_toEmoji(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    toHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_toHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmtariaddress_toString(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Public view key encoded in compressed Tari/Ristretto form.
     * @returns {string | undefined}
     */
    get viewKeyHex() {
        const ret = wasm.wasmtariaddress_viewKeyHex(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @param {Uint8Array} payment_id
     * @returns {WasmTariAddress}
     */
    withPaymentId(payment_id) {
        const ptr0 = passArray8ToWasm0(payment_id, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmtariaddress_withPaymentId(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
}
if (Symbol.dispose) WasmTariAddress.prototype[Symbol.dispose] = WasmTariAddress.prototype.free;

export class WasmViewedOutput {
    static __wrap(ptr) {
        const obj = Object.create(WasmViewedOutput.prototype);
        obj.__wbg_ptr = ptr;
        WasmViewedOutputFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmViewedOutputFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmviewedoutput_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get commitmentHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmviewedoutput_commitmentHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Exact decrypted memo bytes. This intentionally exposes the raw memo so
     * browser code can evolve without requiring another WASM rebuild for each
     * future MemoField variant.
     * @returns {Uint8Array}
     */
    get memoBytes() {
        const ret = wasm.wasmviewedoutput_memoBytes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    get paymentId() {
        const ret = wasm.wasmviewedoutput_paymentId(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {string | undefined}
     */
    get paymentIdText() {
        const ret = wasm.wasmviewedoutput_paymentIdText(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {bigint | undefined}
     */
    get senderFeeMicro() {
        const ret = wasm.wasmviewedoutput_senderFeeMicro(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Tari memo transaction type, e.g. "PaymentToOther".
     * @returns {string}
     */
    get txType() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmviewedoutput_txType(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {bigint}
     */
    get valueMicro() {
        const ret = wasm.wasmviewedoutput_valueMicro(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
}
if (Symbol.dispose) WasmViewedOutput.prototype[Symbol.dispose] = WasmViewedOutput.prototype.free;

export class WasmWallet {
    static __wrap(ptr) {
        const obj = Object.create(WasmWallet.prototype);
        obj.__wbg_ptr = ptr;
        WasmWalletFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmWalletFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmwallet_free(ptr, 0);
    }
    /**
     * @returns {boolean}
     */
    get canSpend() {
        const ret = wasm.wasmwallet_canSpend(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Export the private view key. This does not grant spending authority, but
     * it reveals the wallet's receivable output history and amounts, so callers
     * should treat it as sensitive wallet metadata.
     * @returns {string}
     */
    exportPrivateViewKeyHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmwallet_exportPrivateViewKeyHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string} backup_hex
     * @param {string} network
     * @returns {WasmWallet}
     */
    static fromBackupHex(backup_hex, network) {
        const ptr0 = passStringToWasm0(backup_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(network, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_fromBackupHex(ptr0, len0, ptr1, len1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmWallet.__wrap(ret[0]);
    }
    /**
     * Safer watch-only constructor: take the private view key plus an existing
     * dual Tari address, verify the view-key pair matches, and get the public
     * spend key/network from that address.
     * @param {string} private_view_key_hex
     * @param {string} address
     * @returns {WasmWallet}
     */
    static fromViewKeyAndAddress(private_view_key_hex, address) {
        const ptr0 = passStringToWasm0(private_view_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(address, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_fromViewKeyAndAddress(ptr0, len0, ptr1, len1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmWallet.__wrap(ret[0]);
    }
    /**
     * Construct a true watch-only Tari wallet.
     *
     * `private_view_key_hex` is the 32-byte *private* view key. A public view
     * key cannot decrypt output data. `public_spend_key_hex` is only the
     * compressed public spend key, so this wallet cannot spend.
     * @param {string} private_view_key_hex
     * @param {string} public_spend_key_hex
     * @param {string} network
     * @returns {WasmWallet}
     */
    static fromViewKeyHex(private_view_key_hex, public_spend_key_hex, network) {
        const ptr0 = passStringToWasm0(private_view_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(public_spend_key_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(network, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_fromViewKeyHex(ptr0, len0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmWallet.__wrap(ret[0]);
    }
    /**
     * @returns {WasmTariAddress}
     */
    getAddress() {
        const ret = wasm.wasmwallet_getAddress(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmTariAddress.__wrap(ret[0]);
    }
    /**
     * @returns {string}
     */
    getBackupHex() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.wasmwallet_getBackupHex(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Fast ownership filter for chain scans. This uses Tari's exact
     * `try_output_key_recovery`, which first tries direct view-key recovery and
     * then the one-sided DH path using `sender_offset_public_key`.
     * @param {string} commitment_hex
     * @param {string} encrypted_data_hex
     * @param {string} sender_offset_pub_hex
     * @returns {boolean}
     */
    isOutputMine(commitment_hex, encrypted_data_hex, sender_offset_pub_hex) {
        const ptr0 = passStringToWasm0(commitment_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(encrypted_data_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(sender_offset_pub_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_isOutputMine(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] !== 0;
    }
    /**
     * @returns {boolean}
     */
    get isViewOnly() {
        const ret = wasm.wasmwallet_isViewOnly(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {string} network
     */
    constructor(network) {
        const ptr0 = passStringToWasm0(network, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        WasmWalletFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {string}
     */
    get publicSpendKeyHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmwallet_publicSpendKeyHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get publicViewKeyHex() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmwallet_publicViewKeyHex(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Recover amount + memo from an output without creating a spendable input.
     * This is the main watch-only/view-key API.
     * @param {string} commitment_hex
     * @param {string} encrypted_data_hex
     * @param {string} sender_offset_pub_hex
     * @returns {WasmViewedOutput}
     */
    viewOutput(commitment_hex, encrypted_data_hex, sender_offset_pub_hex) {
        const ptr0 = passStringToWasm0(commitment_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(encrypted_data_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(sender_offset_pub_hex, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmwallet_viewOutput(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return WasmViewedOutput.__wrap(ret[0]);
    }
    /**
     * Debug helper retained from the published package API.
     * @returns {string}
     */
    static wasmBuildMarker() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmwallet_wasmBuildMarker();
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) WasmWallet.prototype[Symbol.dispose] = WasmWallet.prototype.free;

/**
 * Marker used by the browser application to confirm which reconstructed WASM
 * build it has loaded.
 * @returns {string}
 */
export function wasmBuildMarker() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.wasmBuildMarker();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}
export function __wbg___wbindgen_throw_344f42d3211c4765(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg_getRandomValues_cc7f052a444bb2ce() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_now_86c0d4ba3fa605b8() {
    const ret = Date.now();
    return ret;
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
const WasmTariAddressFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmtariaddress_free(ptr, 1));
const WasmViewedOutputFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmviewedoutput_free(ptr, 1));
const WasmWalletFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmwallet_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
