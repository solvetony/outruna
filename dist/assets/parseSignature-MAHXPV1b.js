import { L as AbiEncodingLengthMismatchError, bR as concatHex, u as isAddress, v as InvalidAddressError, cK as pad, d3 as stringToHex, bH as boolToHex, fK as integerRegex, cJ as numberToHex, fL as bytesRegex, a2 as BytesSizeMismatchError, fM as arrayRegex, bw as UnsupportedPackedAbiType, fN as LruMap, fO as erc6492MagicBytes, c4 as encodeAbiParameters, h as hexToBytes, fP as secp256k1 } from './index-DDjfO02D.js';

function encodePacked(types, values) {
    if (types.length !== values.length)
        throw new AbiEncodingLengthMismatchError({
            expectedLength: types.length,
            givenLength: values.length,
        });
    const data = [];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return concatHex(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!isAddress(address))
            throw new InvalidAddressError({ address });
        return pad(address.toLowerCase(), {
            size: isArray ? 32 : null,
        });
    }
    if (type === 'string')
        return stringToHex(value);
    if (type === 'bytes')
        return value;
    if (type === 'bool')
        return pad(boolToHex(value), { size: isArray ? 32 : 1 });
    const intMatch = type.match(integerRegex);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits, 10) / 8;
        return numberToHex(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int',
        });
    }
    const bytesMatch = type.match(bytesRegex);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size, 10) !== (value.length - 2) / 2)
            throw new BytesSizeMismatchError({
                expectedSize: Number.parseInt(size, 10),
                givenSize: (value.length - 2) / 2,
            });
        return pad(value, { dir: 'right', size: isArray ? 32 : null });
    }
    const arrayMatch = type.match(arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for (let i = 0; i < value.length; i++) {
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0)
            return '0x';
        return concatHex(data);
    }
    throw new UnsupportedPackedAbiType(type);
}

/**
 * Creates a nonce manager for auto-incrementing transaction nonces.
 *
 * - Docs: https://viem.sh/docs/accounts/createNonceManager
 *
 * @example
 * ```ts
 * const nonceManager = createNonceManager({
 *   source: jsonRpc(),
 * })
 * ```
 */
function createNonceManager(parameters) {
    const { source } = parameters;
    const deltaMap = new Map();
    const nonceMap = new LruMap(8192);
    const promiseMap = new Map();
    const getKey = ({ address, chainId }) => `${address}.${chainId}`;
    const resetCache = (key) => {
        deltaMap.delete(key);
        promiseMap.delete(key);
    };
    return {
        async consume({ address, chainId, client }) {
            const key = getKey({ address, chainId });
            const promise = this.get({ address, chainId, client });
            this.increment({ address, chainId });
            const nonce = await promise;
            await source.set({ address, chainId }, nonce);
            nonceMap.set(key, nonce);
            return nonce;
        },
        async increment({ address, chainId }) {
            const key = getKey({ address, chainId });
            const delta = deltaMap.get(key) ?? 0;
            deltaMap.set(key, delta + 1);
        },
        async get({ address, chainId, client }) {
            const key = getKey({ address, chainId });
            let promise = promiseMap.get(key);
            if (!promise) {
                promise = (async () => {
                    try {
                        const nonce = await source.get({ address, chainId, client });
                        const previousNonce = nonceMap.get(key) ?? 0;
                        if (previousNonce > 0 && nonce <= previousNonce)
                            return previousNonce + 1;
                        nonceMap.delete(key);
                        return nonce;
                    }
                    finally {
                        resetCache(key);
                    }
                })();
                promiseMap.set(key, promise);
            }
            const delta = deltaMap.get(key) ?? 0;
            return delta + (await promise);
        },
        reset({ address, chainId }) {
            const key = getKey({ address, chainId });
            nonceMap.delete(key);
            resetCache(key);
        },
    };
}

/**
 * @description Serializes a ERC-6492 flavoured signature into hex format.
 *
 * @param signature ERC-6492 signature in object format.
 * @returns ERC-6492 signature in hex format.
 *
 * @example
 * serializeSignature({ address: '0x...', data: '0x...', signature: '0x...' })
 * // '0x000000000000000000000000cafebabecafebabecafebabecafebabecafebabe000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000004deadbeef000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a461f509887bd19e312c0c58467ce8ff8e300d3c1a90b608a760c5b80318eaf15fe57c96f9175d6cd4daad4663763baa7e78836e067d0163e9a2ccf2ff753f5b1b000000000000000000000000000000000000000000000000000000000000006492649264926492649264926492649264926492649264926492649264926492'
 */
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = concatHex([
        encodeAbiParameters([{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }], [address, data, signature]),
        erc6492MagicBytes,
    ]);
    if (to === 'hex')
        return signature_;
    return hexToBytes(signature_);
}

/**
 * @description Parses a hex formatted signature into a structured signature.
 *
 * @param signatureHex Signature in hex format.
 * @returns The structured signature.
 *
 * @example
 * parseSignature('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c')
 * // { r: '0x...', s: '0x...', v: 28n }
 */
function parseSignature(signatureHex) {
    const { r, s } = secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
    const [v, yParity] = (() => {
        if (yParityOrV === 0 || yParityOrV === 1)
            return [undefined, yParityOrV];
        if (yParityOrV === 27)
            return [BigInt(yParityOrV), 0];
        if (yParityOrV === 28)
            return [BigInt(yParityOrV), 1];
        throw new Error('Invalid yParityOrV value');
    })();
    if (typeof v !== 'undefined')
        return {
            r: numberToHex(r, { size: 32 }),
            s: numberToHex(s, { size: 32 }),
            v,
            yParity,
        };
    return {
        r: numberToHex(r, { size: 32 }),
        s: numberToHex(s, { size: 32 }),
        yParity,
    };
}

export { createNonceManager as c, encodePacked as e, parseSignature as p, serializeErc6492Signature as s };
