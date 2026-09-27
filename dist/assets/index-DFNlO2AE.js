import { I as InvalidHexValueError, h as hexToBytes, c as createCursor, b as bytesToHex, B as BaseError, i as isHex, s as size, a as sliceHex, d as hexToNumber, f as InvalidSerializedTransactionTypeError, g as InvalidSerializedTransactionError, j as hexToBigInt, k as assertTransactionEIP1559, l as assertTransactionEIP2930, t as toBlobSidecars, m as assertTransactionEIP4844, n as assertTransactionEIP7702, o as assertTransactionLegacy, p as InvalidLegacyVError, q as isAddress, r as InvalidAddressError, u as trim, v as padHex, w as keccak256, x as defineChain, y as createPublicClient, z as http } from './index-BLGlf-uE.js';
export { A as AbiConstructorNotFoundError, C as AbiConstructorParamsNotFoundError, D as AbiDecodingDataSizeTooSmallError, E as AbiDecodingZeroDataError, F as AbiEncodingArrayLengthMismatchError, G as AbiEncodingBytesSizeMismatchError, H as AbiEncodingLengthMismatchError, J as AbiErrorInputsNotFoundError, K as AbiErrorNotFoundError, L as AbiErrorSignatureNotFoundError, M as AbiEventNotFoundError, N as AbiEventSignatureEmptyTopicsError, O as AbiEventSignatureNotFoundError, P as AbiFunctionNotFoundError, Q as AbiFunctionOutputsNotFoundError, R as AbiFunctionSignatureNotFoundError, S as AccountStateConflictError, T as AtomicReadyWalletRejectedUpgradeError, U as AtomicityNotSupportedError, V as BaseFeeScalarError, W as BlockNotFoundError, X as BundleFailedError, Y as BundleTooLargeError, Z as BytesSizeMismatchError, $ as CallExecutionError, a0 as ChainDisconnectedError, a1 as ChainDoesNotSupportContract, a2 as ChainMismatchError, a3 as ChainNotFoundError, a4 as CircularReferenceError, a5 as ClientChainNotConfiguredError, a6 as ContractFunctionExecutionError, a7 as ContractFunctionRevertedError, a8 as ContractFunctionZeroDataError, a9 as CounterfactualDeploymentFailedError, aa as DecodeLogDataMismatch, ab as DecodeLogTopicsMismatch, ac as DuplicateIdError, ad as Eip1559FeesNotSupportedError, ae as EnsAvatarInvalidNftUriError, af as EnsAvatarUnsupportedNamespaceError, ag as EnsAvatarUriResolutionError, ah as EstimateGasExecutionError, ai as ExecutionRevertedError, aj as FeeCapTooHighError, ak as FeeCapTooLowError, al as FilterTypeNotSupportedError, am as HttpRequestError, an as InsufficientFundsError, ao as IntegerOutOfRangeError, ap as InternalRpcError, aq as IntrinsicGasTooHighError, ar as IntrinsicGasTooLowError, as as InvalidAbiDecodingTypeError, at as InvalidAbiEncodingTypeError, au as InvalidAbiItemError, av as InvalidAbiParametersError, aw as InvalidAbiTypeParameterError, ax as InvalidArrayError, ay as InvalidBytesBooleanError, az as InvalidChainIdError, aA as InvalidDefinitionTypeError, aB as InvalidDomainError, aC as InvalidFunctionModifierError, aD as InvalidHexBooleanError, aE as InvalidInputRpcError, aF as InvalidModifierError, aG as InvalidParameterError, aH as InvalidParamsRpcError, aI as InvalidParenthesisError, aJ as InvalidPrimaryTypeError, aK as InvalidRequestRpcError, aL as InvalidSerializableTransactionError, aM as InvalidSignatureError, aN as InvalidStorageKeySizeError, aO as InvalidStructSignatureError, aP as InvalidStructTypeError, aQ as JsonRpcVersionUnsupportedError, aR as LimitExceededRpcError, aS as MaxFeePerGasTooLowError, aT as MethodNotFoundRpcError, aU as MethodNotSupportedRpcError, aV as NonceMaxValueError, aW as NonceTooHighError, aX as NonceTooLowError, aY as ParseRpcError, aZ as ProviderDisconnectedError, a_ as ProviderRpcError, a$ as RawContractError, b0 as ResourceNotFoundRpcError, b1 as ResourceUnavailableRpcError, b2 as RpcError, b3 as RpcRequestError, b4 as SizeExceedsPaddingSizeError, b5 as SizeOverflowError, b6 as SliceOffsetOutOfBoundsError, b7 as SolidityProtectedKeywordError, b8 as StateAssignmentConflictError, b9 as SwitchChainError, ba as TimeoutError, bb as TipAboveFeeCapError, bc as TransactionExecutionError, bd as TransactionNotFoundError, be as TransactionReceiptNotFoundError, bf as TransactionRejectedRpcError, bg as TransactionTypeNotSupportedError, bh as UnauthorizedProviderError, bi as UnknownBundleIdError, bj as UnknownNodeError, bk as UnknownRpcError, bl as UnknownSignatureError, bm as UnknownTypeError, bn as UnsupportedChainIdError, bo as UnsupportedNonOptionalCapabilityError, bp as UnsupportedPackedAbiType, bq as UnsupportedProviderMethodError, br as UrlRequiredError, bs as UserRejectedRequestError, bt as WaitForCallsStatusTimeoutError, bu as WaitForTransactionReceiptTimeoutError, bv as assertCurrentChain, bw as assertRequest, bx as blobsToCommitments, by as blobsToProofs, bz as boolToBytes, bA as boolToHex, bB as bytesToBigInt, bC as bytesToBool, bD as bytesToNumber, bE as bytesToString, bF as checksumAddress, bG as commitmentToVersionedHash, bH as commitmentsToVersionedHashes, bI as concat, bJ as concatBytes, bK as concatHex, bL as createClient, bM as createTransport, bN as createWalletClient, bO as decodeAbiParameters, bP as decodeErrorResult, bQ as decodeEventLog, bR as decodeFunctionData, bS as decodeFunctionResult, bT as defineBlock, bU as defineTransaction, bV as defineTransactionReceipt, bW as defineTransactionRequest, bX as deploylessCallViaBytecodeBytecode, bY as deploylessCallViaFactoryBytecode, bZ as encodeAbiParameters, b_ as encodeDeployData, b$ as encodeErrorResult, c0 as encodeEventTopics, c1 as encodeFunctionData, c2 as encodeFunctionResult, c3 as erc20Abi, c4 as erc6492SignatureValidatorAbi, c5 as erc6492SignatureValidatorByteCode, c6 as ethAddress, c7 as etherUnits, c8 as extendSchema, c9 as formatBlock, ca as formatEther, cb as formatGwei, cc as formatLog, cd as formatTransaction, ce as formatTransactionReceipt, cf as formatTransactionRequest, cg as formatUnits, ch as getAbiItem, ci as getAddress, cj as getChainContractAddress, ck as getContractError, cl as getEventSelector, cm as getEventSignature, cn as getFunctionSelector, cm as getFunctionSignature, co as getTransactionType, cp as getTypesForEIP712Domain, cq as gweiUnits, cr as hashDomain, cs as hashMessage, ct as hashStruct, cu as hashTypedData, cv as hexToBool, cw as hexToString, cx as isAddressEqual, cy as labelhash, cz as maxUint16, cA as maxUint256, cB as multicall3Abi, cC as namehash, cD as numberToBytes, cE as numberToHex, cF as pad, cG as padBytes, cH as parseAbi, cI as parseAbiItem, cJ as parseAbiParameters, cK as parseEventLogs, cL as prepareEncodeFunctionData, cM as presignMessagePrefix, cN as publicActions, cO as recoverAddress, cP as recoverPublicKey, cQ as rpcTransactionType, cR as serializeAccessList, cS as serializeSignature, cT as serializeTransaction, cU as serializeTypedData, cV as sha256, cS as signatureToHex, cW as slice, cX as sliceBytes, cY as stringToBytes, cZ as stringToHex, c_ as stringify, c$ as toBlobs, d0 as toBytes, d1 as toEventHash, cl as toEventSelector, cm as toEventSignature, d1 as toFunctionHash, cn as toFunctionSelector, cm as toFunctionSignature, d2 as toHex, d3 as toPrefixedMessage, d4 as toRlp, d5 as transactionType, c4 as universalSignatureValidatorAbi, c5 as universalSignatureValidatorByteCode, d6 as validateTypedData, d7 as walletActions, d8 as withCache, d9 as withRetry, da as withTimeout, db as zeroAddress, dc as zeroHash } from './index-BLGlf-uE.js';
export { c as custom } from './custom-0SlpF-qz.js';
export { f as fallback, s as shouldThrow } from './fallback-DcBYSTiP.js';
export { I as InvalidDecimalNumberError, p as parseUnits } from './parseUnits-CoQdfwWE.js';
export { c as createNonceManager, e as encodePacked, p as hexToSignature, p as parseSignature, s as serializeErc6492Signature } from './parseSignature-X9TuIA2X.js';
export { ccipRequest as ccipFetch, ccipRequest, offchainLookup, offchainLookupAbiItem, offchainLookupSignature } from './ccip-D5QRow0p.js';
export { p as parseEther } from './parseEther-BUJCBxQy.js';

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
    return result;
}
function fromRlpCursor(cursor, to = 'hex') {
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
    return readList(cursor, length, to);
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
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while (cursor.position - position < length)
        value.push(fromRlpCursor(cursor, to));
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
    const v = signature[0] === '0x' || hexToBigInt(signature[0]) === 0n ? 27n : 28n;
    return {
        r: padHex(signature[1], { size: 32 }),
        s: padHex(signature[2], { size: 32 }),
        v,
        yParity: v === 27n ? 0 : 1,
    };
}

export { BaseError, InvalidAddressError, InvalidHexValueError, InvalidLegacyVError, InvalidSerializedTransactionError, InvalidSerializedTransactionTypeError, assertTransactionEIP1559, assertTransactionEIP2930, assertTransactionLegacy, bytesToHex, createPublicClient, defineChain, fromRlp, getSerializedTransactionType, hexToBigInt, hexToBytes, hexToNumber, http, isAddress, isHash, isHex, keccak256, padHex, parseTransaction, size, sliceHex, toBlobSidecars, trim };
