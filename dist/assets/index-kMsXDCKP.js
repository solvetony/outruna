import { I as InvalidHexValueError, h as hexToBytes, c as createCursor, R as RlpTrailingBytesError, a as RlpDepthLimitExceededError, b as bytesToHex, B as BaseError, d as RlpListBoundaryExceededError, i as isHex, s as size, f as sliceHex, g as hexToNumber, j as InvalidSerializedTransactionTypeError, k as InvalidSerializedTransactionError, l as hexToBigInt, m as assertTransactionEIP1559, n as assertTransactionEIP2930, t as toBlobSidecars, o as assertTransactionEIP4844, p as assertTransactionEIP7702, q as assertTransactionLegacy, r as InvalidLegacyVError, u as isAddress, v as InvalidAddressError, w as trim, x as InvalidYParityError, y as padHex, z as keccak256, A as defineChain, C as createPublicClient, D as http } from './index-3FkWxgIP.js';
export { E as AbiConstructorNotFoundError, F as AbiConstructorParamsNotFoundError, G as AbiDecodingDataSizeTooSmallError, H as AbiDecodingZeroDataError, J as AbiEncodingArrayLengthMismatchError, K as AbiEncodingBytesSizeMismatchError, L as AbiEncodingLengthMismatchError, M as AbiErrorInputsNotFoundError, N as AbiErrorNotFoundError, O as AbiErrorSignatureNotFoundError, P as AbiEventNotFoundError, Q as AbiEventSignatureEmptyTopicsError, S as AbiEventSignatureNotFoundError, T as AbiFunctionNotFoundError, U as AbiFunctionOutputsNotFoundError, V as AbiFunctionSignatureNotFoundError, W as AccountStateConflictError, X as AtomicReadyWalletRejectedUpgradeError, Y as AtomicityNotSupportedError, Z as BaseFeeScalarError, $ as BlockNotFoundError, a0 as BundleFailedError, a1 as BundleTooLargeError, a2 as BytesSizeMismatchError, a3 as CallExecutionError, a4 as ChainDisconnectedError, a5 as ChainDoesNotSupportContract, a6 as ChainMismatchError, a7 as ChainNotFoundError, a8 as CircularReferenceError, a9 as ClientChainNotConfiguredError, aa as ContractFunctionExecutionError, ab as ContractFunctionRevertedError, ac as ContractFunctionZeroDataError, ad as CounterfactualDeploymentFailedError, ae as DecodeLogDataMismatch, af as DecodeLogTopicsMismatch, ag as DuplicateIdError, ah as Eip1559FeesNotSupportedError, ai as EnsAvatarInvalidNftUriError, aj as EnsAvatarUnsupportedNamespaceError, ak as EnsAvatarUriResolutionError, al as EstimateGasExecutionError, am as ExecutionRevertedError, an as FeeCapTooHighError, ao as FeeCapTooLowError, ap as FeePayerNonceMismatchError, aq as FilterTypeNotSupportedError, ar as HttpRequestError, as as InsufficientFundsError, at as IntegerOutOfRangeError, au as InternalRpcError, av as IntrinsicGasTooHighError, aw as IntrinsicGasTooLowError, ax as InvalidAbiDecodingTypeError, ay as InvalidAbiEncodingTypeError, az as InvalidAbiItemError, aA as InvalidAbiParametersError, aB as InvalidAbiTypeParameterError, aC as InvalidArrayError, aD as InvalidBytesBooleanError, aE as InvalidChainIdError, aF as InvalidDefinitionTypeError, aG as InvalidDomainError, aH as InvalidFunctionModifierError, aI as InvalidHexBooleanError, aJ as InvalidInputRpcError, aK as InvalidModifierError, aL as InvalidParameterError, aM as InvalidParamsRpcError, aN as InvalidParenthesisError, aO as InvalidPrimaryTypeError, aP as InvalidRequestRpcError, aQ as InvalidSerializableTransactionError, aR as InvalidSignatureError, aS as InvalidStorageKeySizeError, aT as InvalidStructSignatureError, aU as InvalidStructTypeError, aV as InvalidTypedDataTypeError, aW as JsonRpcVersionUnsupportedError, aX as LimitExceededRpcError, aY as MaxFeePerGasTooLowError, aZ as MethodNotFoundRpcError, a_ as MethodNotSupportedRpcError, a$ as NonceMaxValueError, b0 as NonceTooHighError, b1 as NonceTooLowError, b2 as ParseRpcError, b3 as ProviderDisconnectedError, b4 as ProviderRpcError, b5 as RawContractError, b6 as ResourceNotFoundRpcError, b7 as ResourceUnavailableRpcError, b8 as ResponseBodyTooLargeError, b9 as RpcError, ba as RpcRequestError, bb as SizeExceedsPaddingSizeError, bc as SizeOverflowError, bd as SliceOffsetOutOfBoundsError, be as SolidityProtectedKeywordError, bf as StateAssignmentConflictError, bg as SwitchChainError, bh as TimeoutError, bi as TipAboveFeeCapError, bj as TransactionExecutionError, bk as TransactionNotFoundError, bl as TransactionReceiptNotFoundError, bm as TransactionRejectedRpcError, bn as TransactionTypeNotSupportedError, bo as UnauthorizedProviderError, bp as UnknownBundleIdError, bq as UnknownNodeError, br as UnknownRpcError, bs as UnknownSignatureError, bt as UnknownTypeError, bu as UnsupportedChainIdError, bv as UnsupportedNonOptionalCapabilityError, bw as UnsupportedPackedAbiType, bx as UnsupportedProviderMethodError, by as UrlRequiredError, bz as UserRejectedRequestError, bA as WaitForCallsStatusTimeoutError, bB as WaitForTransactionReceiptTimeoutError, bC as assertCurrentChain, bD as assertRequest, bE as blobsToCommitments, bF as blobsToProofs, bG as boolToBytes, bH as boolToHex, bI as bytesToBigInt, bJ as bytesToBool, bK as bytesToNumber, bL as bytesToString, bM as checksumAddress, bN as commitmentToVersionedHash, bO as commitmentsToVersionedHashes, bP as concat, bQ as concatBytes, bR as concatHex, bS as createClient, bT as createTransport, bU as createWalletClient, bV as decodeAbiParameters, bW as decodeErrorResult, bX as decodeEventLog, bY as decodeFunctionData, bZ as decodeFunctionResult, b_ as defineBlock, b$ as defineTransaction, c0 as defineTransactionReceipt, c1 as defineTransactionRequest, c2 as deploylessCallViaBytecodeBytecode, c3 as deploylessCallViaFactoryBytecode, c4 as encodeAbiParameters, c5 as encodeDeployData, c6 as encodeErrorResult, c7 as encodeEventTopics, c8 as encodeFunctionData, c9 as encodeFunctionResult, ca as erc20Abi, cb as erc6492SignatureValidatorAbi, cc as erc6492SignatureValidatorByteCode, cd as ethAddress, ce as extendSchema, cf as formatBlock, cg as formatEther, ch as formatGwei, ci as formatLog, cj as formatTransaction, ck as formatTransactionReceipt, cl as formatTransactionRequest, cm as formatUnits, cn as getAbiItem, co as getAddress, cp as getChainContractAddress, cq as getContractError, cr as getEventSelector, cs as getEventSignature, ct as getFunctionSelector, cs as getFunctionSignature, cu as getTransactionType, cv as getTypesForEIP712Domain, cw as hashDomain, cx as hashMessage, cy as hashStruct, cz as hashTypedData, cA as hexToBool, cB as hexToString, cC as isAddressEqual, cD as labelhash, cE as maxUint16, cF as maxUint256, cG as multicall3Abi, cH as namehash, cI as numberToBytes, cJ as numberToHex, cK as pad, cL as padBytes, cM as parseAbi, cN as parseAbiItem, cO as parseAbiParameters, cP as parseEventLogs, cQ as parseUnits, cR as prepareEncodeFunctionData, cS as presignMessagePrefix, cT as publicActions, cU as recoverAddress, cV as recoverPublicKey, cW as rpcTransactionType, cX as serializeAccessList, cY as serializeSignature, cZ as serializeTransaction, c_ as serializeTypedData, c$ as sha256, cY as signatureToHex, d0 as slice, d1 as sliceBytes, d2 as stringToBytes, d3 as stringToHex, d4 as stringify, d5 as toBlobs, d6 as toBytes, d7 as toEventHash, cr as toEventSelector, cs as toEventSignature, d7 as toFunctionHash, ct as toFunctionSelector, cs as toFunctionSignature, d8 as toHex, d9 as toPrefixedMessage, da as toRlp, db as transactionType, cb as universalSignatureValidatorAbi, cc as universalSignatureValidatorByteCode, dc as validateTypedData, dd as walletActions, de as withCache, df as withRetry, dg as withTimeout, dh as zeroAddress, di as zeroHash } from './index-3FkWxgIP.js';
export { c as custom } from './custom-CYkmktjZ.js';
export { f as fallback, s as shouldThrow } from './fallback-C6P_3iaZ.js';
export { c as createNonceManager, e as encodePacked, p as hexToSignature, p as parseSignature, s as serializeErc6492Signature } from './parseSignature-8OHCVFw-.js';
export { ccipRequest as ccipFetch, ccipRequest, offchainLookup, offchainLookupAbiItem, offchainLookupSignature } from './ccip-NfyeGukw.js';
export { p as parseEther } from './parseEther-CXVO2eL_.js';

const rlpDepthLimit = 1_024;
function fromRlp(value, to = 'hex') {
    const bytes = (() => {
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0)
                throw new InvalidHexValueError(value);
            return hexToBytes(value);
        }
        return value;
    })();
    const cursor = createCursor(bytes, {
        recursiveReadLimit: Number.POSITIVE_INFINITY,
    });
    const result = fromRlpCursor(cursor, to);
    // RLP payloads encode exactly one item (Yellow Paper, Appendix B).
    if (cursor.position < cursor.bytes.length)
        throw new RlpTrailingBytesError({
            count: cursor.bytes.length - cursor.position,
        });
    return result;
}
function fromRlpCursor(cursor, to = 'hex', recursiveDepth = 0) {
    if (recursiveDepth >= rlpDepthLimit)
        throw new RlpDepthLimitExceededError({ limit: rlpDepthLimit });
    if (cursor.bytes.length === 0)
        return (to === 'hex' ? bytesToHex(cursor.bytes) : cursor.bytes);
    const prefix = cursor.readByte();
    if (prefix < 0x80)
        cursor.decrementPosition(1);
    // bytes
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return (to === 'hex' ? bytesToHex(bytes) : bytes);
    }
    // list
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to, recursiveDepth + 1);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80)
        return 1;
    if (prefix <= offset + 55)
        return prefix - offset;
    if (prefix === offset + 55 + 1)
        return cursor.readUint8();
    if (prefix === offset + 55 + 2)
        return cursor.readUint16();
    if (prefix === offset + 55 + 3)
        return cursor.readUint24();
    if (prefix === offset + 55 + 4)
        return cursor.readUint32();
    throw new BaseError('Invalid RLP prefix');
}
function readList(cursor, length, to, recursiveDepth) {
    const position = cursor.position;
    const value = [];
    while (cursor.position - position < length)
        value.push(fromRlpCursor(cursor, to, recursiveDepth));
    // Items must consume exactly the declared list length.
    if (cursor.position - position !== length)
        throw new RlpListBoundaryExceededError({
            consumed: cursor.position - position,
            declared: length,
        });
    return value;
}

function isHash(hash) {
    return isHex(hash) && size(hash) === 32;
}

function getSerializedTransactionType(serializedTransaction) {
    const serializedType = sliceHex(serializedTransaction, 0, 1);
    if (serializedType === '0x04')
        return 'eip7702';
    if (serializedType === '0x03')
        return 'eip4844';
    if (serializedType === '0x02')
        return 'eip1559';
    if (serializedType === '0x01')
        return 'eip2930';
    if (serializedType !== '0x' && hexToNumber(serializedType) >= 0xc0)
        return 'legacy';
    throw new InvalidSerializedTransactionTypeError({ serializedType });
}

function parseTransaction(serializedTransaction) {
    const type = getSerializedTransactionType(serializedTransaction);
    if (type === 'eip1559')
        return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930')
        return parseTransactionEIP2930(serializedTransaction);
    if (type === 'eip4844')
        return parseTransactionEIP4844(serializedTransaction);
    if (type === 'eip7702')
        return parseTransactionEIP7702(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
function parseTransactionEIP7702(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, authorizationList, v, r, s,] = transactionArray;
    if (transactionArray.length !== 10 && transactionArray.length !== 13)
        throw new InvalidSerializedTransactionError({
            attributes: {
                chainId,
                nonce,
                maxPriorityFeePerGas,
                maxFeePerGas,
                gas,
                to,
                value,
                data,
                accessList,
                authorizationList,
                ...(transactionArray.length > 9
                    ? {
                        v,
                        r,
                        s,
                    }
                    : {}),
            },
            serializedTransaction,
            type: 'eip7702',
        });
    const transaction = {
        chainId: hexToNumber(chainId),
        type: 'eip7702',
    };
    if (isHex(to) && to !== '0x')
        transaction.to = to;
    if (isHex(gas) && gas !== '0x')
        transaction.gas = hexToBigInt(gas);
    if (isHex(data) && data !== '0x')
        transaction.data = data;
    if (isHex(nonce))
        transaction.nonce = nonce === '0x' ? 0 : hexToNumber(nonce);
    if (isHex(value) && value !== '0x')
        transaction.value = hexToBigInt(value);
    if (isHex(maxFeePerGas) && maxFeePerGas !== '0x')
        transaction.maxFeePerGas = hexToBigInt(maxFeePerGas);
    if (isHex(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x')
        transaction.maxPriorityFeePerGas = hexToBigInt(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x')
        transaction.accessList = parseAccessList(accessList);
    if (authorizationList.length !== 0 && authorizationList !== '0x')
        transaction.authorizationList = parseAuthorizationList(authorizationList);
    assertTransactionEIP7702(transaction);
    const signature = transactionArray.length === 13
        ? parseEIP155Signature(transactionArray)
        : undefined;
    return { ...signature, ...transaction };
}
function parseTransactionEIP4844(serializedTransaction) {
    const transactionOrWrapperArray = toTransactionArray(serializedTransaction);
    const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
    const transactionArray = hasNetworkWrapper
        ? transactionOrWrapperArray[0]
        : transactionOrWrapperArray;
    const wrapperArray = hasNetworkWrapper
        ? transactionOrWrapperArray.slice(1)
        : [];
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, v, r, s,] = transactionArray;
    const [blobs, commitments, proofs] = wrapperArray;
    if (!(transactionArray.length === 11 || transactionArray.length === 14))
        throw new InvalidSerializedTransactionError({
            attributes: {
                chainId,
                nonce,
                maxPriorityFeePerGas,
                maxFeePerGas,
                gas,
                to,
                value,
                data,
                accessList,
                ...(transactionArray.length > 9
                    ? {
                        v,
                        r,
                        s,
                    }
                    : {}),
            },
            serializedTransaction,
            type: 'eip4844',
        });
    const transaction = {
        blobVersionedHashes: blobVersionedHashes,
        chainId: hexToNumber(chainId),
        to,
        type: 'eip4844',
    };
    if (isHex(gas) && gas !== '0x')
        transaction.gas = hexToBigInt(gas);
    if (isHex(data) && data !== '0x')
        transaction.data = data;
    if (isHex(nonce))
        transaction.nonce = nonce === '0x' ? 0 : hexToNumber(nonce);
    if (isHex(value) && value !== '0x')
        transaction.value = hexToBigInt(value);
    if (isHex(maxFeePerBlobGas) && maxFeePerBlobGas !== '0x')
        transaction.maxFeePerBlobGas = hexToBigInt(maxFeePerBlobGas);
    if (isHex(maxFeePerGas) && maxFeePerGas !== '0x')
        transaction.maxFeePerGas = hexToBigInt(maxFeePerGas);
    if (isHex(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x')
        transaction.maxPriorityFeePerGas = hexToBigInt(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x')
        transaction.accessList = parseAccessList(accessList);
    if (blobs && commitments && proofs)
        transaction.sidecars = toBlobSidecars({
            blobs: blobs,
            commitments: commitments,
            proofs: proofs,
        });
    assertTransactionEIP4844(transaction);
    const signature = transactionArray.length === 14
        ? parseEIP155Signature(transactionArray)
        : undefined;
    return { ...signature, ...transaction };
}
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s,] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12))
        throw new InvalidSerializedTransactionError({
            attributes: {
                chainId,
                nonce,
                maxPriorityFeePerGas,
                maxFeePerGas,
                gas,
                to,
                value,
                data,
                accessList,
                ...(transactionArray.length > 9
                    ? {
                        v,
                        r,
                        s,
                    }
                    : {}),
            },
            serializedTransaction,
            type: 'eip1559',
        });
    const transaction = {
        chainId: hexToNumber(chainId),
        type: 'eip1559',
    };
    if (isHex(to) && to !== '0x')
        transaction.to = to;
    if (isHex(gas) && gas !== '0x')
        transaction.gas = hexToBigInt(gas);
    if (isHex(data) && data !== '0x')
        transaction.data = data;
    if (isHex(nonce))
        transaction.nonce = nonce === '0x' ? 0 : hexToNumber(nonce);
    if (isHex(value) && value !== '0x')
        transaction.value = hexToBigInt(value);
    if (isHex(maxFeePerGas) && maxFeePerGas !== '0x')
        transaction.maxFeePerGas = hexToBigInt(maxFeePerGas);
    if (isHex(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x')
        transaction.maxPriorityFeePerGas = hexToBigInt(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x')
        transaction.accessList = parseAccessList(accessList);
    assertTransactionEIP1559(transaction);
    const signature = transactionArray.length === 12
        ? parseEIP155Signature(transactionArray)
        : undefined;
    return { ...signature, ...transaction };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11))
        throw new InvalidSerializedTransactionError({
            attributes: {
                chainId,
                nonce,
                gasPrice,
                gas,
                to,
                value,
                data,
                accessList,
                ...(transactionArray.length > 8
                    ? {
                        v,
                        r,
                        s,
                    }
                    : {}),
            },
            serializedTransaction,
            type: 'eip2930',
        });
    const transaction = {
        chainId: hexToNumber(chainId),
        type: 'eip2930',
    };
    if (isHex(to) && to !== '0x')
        transaction.to = to;
    if (isHex(gas) && gas !== '0x')
        transaction.gas = hexToBigInt(gas);
    if (isHex(data) && data !== '0x')
        transaction.data = data;
    if (isHex(nonce))
        transaction.nonce = nonce === '0x' ? 0 : hexToNumber(nonce);
    if (isHex(value) && value !== '0x')
        transaction.value = hexToBigInt(value);
    if (isHex(gasPrice) && gasPrice !== '0x')
        transaction.gasPrice = hexToBigInt(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x')
        transaction.accessList = parseAccessList(accessList);
    assertTransactionEIP2930(transaction);
    const signature = transactionArray.length === 11
        ? parseEIP155Signature(transactionArray)
        : undefined;
    return { ...signature, ...transaction };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = fromRlp(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9))
        throw new InvalidSerializedTransactionError({
            attributes: {
                nonce,
                gasPrice,
                gas,
                to,
                value,
                data,
                ...(transactionArray.length > 6
                    ? {
                        v: chainIdOrV_,
                        r,
                        s,
                    }
                    : {}),
            },
            serializedTransaction,
            type: 'legacy',
        });
    const transaction = {
        type: 'legacy',
    };
    if (isHex(to) && to !== '0x')
        transaction.to = to;
    if (isHex(gas) && gas !== '0x')
        transaction.gas = hexToBigInt(gas);
    if (isHex(data) && data !== '0x')
        transaction.data = data;
    if (isHex(nonce))
        transaction.nonce = nonce === '0x' ? 0 : hexToNumber(nonce);
    if (isHex(value) && value !== '0x')
        transaction.value = hexToBigInt(value);
    if (isHex(gasPrice) && gasPrice !== '0x')
        transaction.gasPrice = hexToBigInt(gasPrice);
    assertTransactionLegacy(transaction);
    if (transactionArray.length === 6)
        return transaction;
    const chainIdOrV = isHex(chainIdOrV_) && chainIdOrV_ !== '0x'
        ? hexToBigInt(chainIdOrV_)
        : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0)
            transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0)
        transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n)
        throw new InvalidLegacyVError({ v });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    transaction.yParity = v % 2n === 0n ? 1 : 0;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return fromRlp(`0x${serializedTransaction.slice(4)}`, 'hex');
}
function parseAccessList(accessList_) {
    const accessList = [];
    for (let i = 0; i < accessList_.length; i++) {
        const [address, storageKeys] = accessList_[i];
        if (!isAddress(address, { strict: false }))
            throw new InvalidAddressError({ address });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key) => (isHash(key) ? key : trim(key))),
        });
    }
    return accessList;
}
function parseAuthorizationList(serializedAuthorizationList) {
    const authorizationList = [];
    for (let i = 0; i < serializedAuthorizationList.length; i++) {
        const [chainId, address, nonce, yParity, r, s] = serializedAuthorizationList[i];
        authorizationList.push({
            address,
            chainId: chainId === '0x' ? 0 : hexToNumber(chainId),
            nonce: nonce === '0x' ? 0 : hexToNumber(nonce),
            ...parseEIP155Signature([yParity, r, s]),
        });
    }
    return authorizationList;
}
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const yParity = signature[0] === '0x' ? 0n : hexToBigInt(signature[0]);
    if (yParity !== 0n && yParity !== 1n)
        throw new InvalidYParityError({ yParity });
    const v = yParity === 0n ? 27n : 28n;
    return {
        r: padHex(signature[1], { size: 32 }),
        s: padHex(signature[2], { size: 32 }),
        v,
        yParity: v === 27n ? 0 : 1,
    };
}

export { BaseError, InvalidAddressError, InvalidHexValueError, InvalidLegacyVError, InvalidSerializedTransactionError, InvalidSerializedTransactionTypeError, InvalidYParityError, RlpDepthLimitExceededError, RlpListBoundaryExceededError, RlpTrailingBytesError, assertTransactionEIP1559, assertTransactionEIP2930, assertTransactionLegacy, bytesToHex, createPublicClient, defineChain, fromRlp, getSerializedTransactionType, hexToBigInt, hexToBytes, hexToNumber, http, isAddress, isHash, isHex, keccak256, padHex, parseTransaction, size, sliceHex, toBlobSidecars, trim };
