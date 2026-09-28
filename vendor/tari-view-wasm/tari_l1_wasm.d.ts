/* tslint:disable */
/* eslint-disable */

export class WasmTariAddress {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static fromBase58(value: string): WasmTariAddress;
    static fromBytes(value: Uint8Array): WasmTariAddress;
    static fromEmoji(value: string): WasmTariAddress;
    static fromHex(value: string): WasmTariAddress;
    static newDual(view_key_hex: string, spend_key_hex: string, network: string, features: number): WasmTariAddress;
    static newSingle(spend_key_hex: string, network: string, features: number): WasmTariAddress;
    toBase58(): string;
    toBytes(): Uint8Array;
    toEmoji(): string;
    toHex(): string;
    toString(): string;
    withPaymentId(payment_id: Uint8Array): WasmTariAddress;
    readonly featureBits: number;
    readonly isSingle: boolean;
    readonly network: string;
    readonly paymentId: Uint8Array;
    /**
     * Public spend key encoded in compressed Tari/Ristretto form.
     */
    readonly spendKeyHex: string;
    /**
     * Public view key encoded in compressed Tari/Ristretto form.
     */
    readonly viewKeyHex: string | undefined;
}

export class WasmViewedOutput {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly commitmentHex: string;
    /**
     * Exact decrypted memo bytes. This intentionally exposes the raw memo so
     * browser code can evolve without requiring another WASM rebuild for each
     * future MemoField variant.
     */
    readonly memoBytes: Uint8Array;
    readonly paymentId: Uint8Array;
    readonly paymentIdText: string | undefined;
    readonly senderFeeMicro: bigint | undefined;
    /**
     * Tari memo transaction type, e.g. "PaymentToOther".
     */
    readonly txType: string;
    readonly valueMicro: bigint;
}

export class WasmWallet {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Export the private view key. This does not grant spending authority, but
     * it reveals the wallet's receivable output history and amounts, so callers
     * should treat it as sensitive wallet metadata.
     */
    exportPrivateViewKeyHex(): string;
    static fromBackupHex(backup_hex: string, network: string): WasmWallet;
    /**
     * Safer watch-only constructor: take the private view key plus an existing
     * dual Tari address, verify the view-key pair matches, and get the public
     * spend key/network from that address.
     */
    static fromViewKeyAndAddress(private_view_key_hex: string, address: string): WasmWallet;
    /**
     * Construct a true watch-only Tari wallet.
     *
     * `private_view_key_hex` is the 32-byte *private* view key. A public view
     * key cannot decrypt output data. `public_spend_key_hex` is only the
     * compressed public spend key, so this wallet cannot spend.
     */
    static fromViewKeyHex(private_view_key_hex: string, public_spend_key_hex: string, network: string): WasmWallet;
    getAddress(): WasmTariAddress;
    getBackupHex(): string;
    /**
     * Fast ownership filter for chain scans. This uses Tari's exact
     * `try_output_key_recovery`, which first tries direct view-key recovery and
     * then the one-sided DH path using `sender_offset_public_key`.
     */
    isOutputMine(commitment_hex: string, encrypted_data_hex: string, sender_offset_pub_hex: string): boolean;
    constructor(network: string);
    /**
     * Recover amount + memo from an output without creating a spendable input.
     * This is the main watch-only/view-key API.
     */
    viewOutput(commitment_hex: string, encrypted_data_hex: string, sender_offset_pub_hex: string): WasmViewedOutput;
    /**
     * Debug helper retained from the published package API.
     */
    static wasmBuildMarker(): string;
    readonly canSpend: boolean;
    readonly isViewOnly: boolean;
    readonly publicSpendKeyHex: string;
    readonly publicViewKeyHex: string;
}

/**
 * Marker used by the browser application to confirm which reconstructed WASM
 * build it has loaded.
 */
export function wasmBuildMarker(): string;
