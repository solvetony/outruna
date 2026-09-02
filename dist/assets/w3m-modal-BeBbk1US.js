import { N as NumberUtil, y as withErrorBoundary, R as RouterController, S as SnackController, b as ConnectionController, c as ConstantsUtil, E as EventsController, z as getPreferredAccountType, B as W3mFrameRpcConstants, n as ChainController, D as BlockchainApiController, a as CoreHelperUtil, F as SwapApiUtil, G as AlertController, I as BalanceUtil, m as ConstantsUtil$1, J as getActiveNetworkTokenAddress, C as ConnectorController, K as subscribeKey, L as subscribe, P as proxy, M as ModalController, Q as SIWXUtil, e as css, r as resetStyles, i, d as b, j as elementStyles, v as vars, h as AssetUtil, f as AssetController, U as ConstantsUtil$2, O as OptionsController, s as i$1, A as ApiController, T as ThemeController, V as initializeTheming, X as ParseUtil } from "./core-CTt3gyn9.js";
import { c as customElement, n, o, r, U as UiHelperUtil } from "./index-Kc_3Monj.js";
import "./index-lNx1hHWy.js";
import "./fallback-CoDCP1pb.js";
const SwapCalculationUtil = {
  getGasPriceInEther(gas, gasPrice) {
    const totalGasCostInWei = gasPrice * gas;
    const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
    return totalGasCostInEther;
  },
  getGasPriceInUSD(networkPrice, gas, gasPrice) {
    const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
    const networkPriceInUSD = NumberUtil.bigNumber(networkPrice);
    const gasCostInUSD = networkPriceInUSD.times(totalGasCostInEther);
    return gasCostInUSD.toNumber();
  },
  getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
    const inputValue = NumberUtil.bigNumber(sourceTokenAmount).times(sourceTokenPriceInUSD);
    const outputValue = NumberUtil.bigNumber(toTokenAmount).times(toTokenPriceInUSD);
    const priceImpact = inputValue.minus(outputValue).div(inputValue).times(100);
    return priceImpact.toNumber();
  },
  getMaxSlippage(slippage, toTokenAmount) {
    const slippageToleranceDecimal = NumberUtil.bigNumber(slippage).div(100);
    const maxSlippageAmount = NumberUtil.multiply(toTokenAmount, slippageToleranceDecimal);
    return maxSlippageAmount.toNumber();
  },
  getProviderFee(sourceTokenAmount, feePercentage = 85e-4) {
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).times(feePercentage);
    return providerFee.toString();
  },
  isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
    const gasPrice = gasPriceInUSD || "0";
    if (NumberUtil.bigNumber(networkBalanceInUSD).eq(0)) {
      return true;
    }
    return NumberUtil.bigNumber(NumberUtil.bigNumber(gasPrice)).gt(networkBalanceInUSD);
  },
  isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
    var _a, _b;
    const sourceTokenBalance = (_b = (_a = balance == null ? void 0 : balance.find((token) => token.address === sourceTokenAddress)) == null ? void 0 : _a.quantity) == null ? void 0 : _b.numeric;
    const isInSufficientBalance = NumberUtil.bigNumber(sourceTokenBalance || "0").lt(sourceTokenAmount);
    return isInSufficientBalance;
  }
};
const INITIAL_GAS_LIMIT = 15e4;
const TO_AMOUNT_DECIMALS = 6;
const initialState = {
  // Loading states
  initializing: false,
  initialized: false,
  loadingPrices: false,
  loadingQuote: false,
  loadingApprovalTransaction: false,
  loadingBuildTransaction: false,
  loadingTransaction: false,
  // Control states
  switchingTokens: false,
  // Error states
  fetchError: false,
  // Approval & Swap transaction states
  approvalTransaction: void 0,
  swapTransaction: void 0,
  transactionError: void 0,
  // Input values
  sourceToken: void 0,
  sourceTokenAmount: "",
  sourceTokenPriceInUSD: 0,
  toToken: void 0,
  toTokenAmount: "",
  toTokenPriceInUSD: 0,
  networkPrice: "0",
  networkBalanceInUSD: "0",
  networkTokenSymbol: "",
  inputError: void 0,
  // Request values
  slippage: ConstantsUtil$1.CONVERT_SLIPPAGE_TOLERANCE,
  // Tokens
  tokens: void 0,
  popularTokens: void 0,
  suggestedTokens: void 0,
  foundTokens: void 0,
  myTokensWithBalance: void 0,
  tokensPriceMap: {},
  // Calculations
  gasFee: "0",
  gasPriceInUSD: 0,
  priceImpact: void 0,
  maxSlippage: void 0,
  providerFee: void 0
};
const state$1 = proxy({ ...initialState });
const controller$1 = {
  state: state$1,
  subscribe(callback) {
    return subscribe(state$1, () => callback(state$1));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state$1, key, callback);
  },
  getParams() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const namespace = ChainController.state.activeChain;
    const caipAddress = ((_a = ChainController.getAccountData(namespace)) == null ? void 0 : _a.caipAddress) ?? ChainController.state.activeCaipAddress;
    const address = CoreHelperUtil.getPlainAddress(caipAddress);
    const networkAddress = getActiveNetworkTokenAddress();
    const connectorId = ConnectorController.getConnectorId(ChainController.state.activeChain);
    if (!address) {
      throw new Error("No address found to swap the tokens from.");
    }
    const invalidToToken = !((_b = state$1.toToken) == null ? void 0 : _b.address) || !((_c = state$1.toToken) == null ? void 0 : _c.decimals);
    const invalidSourceToken = !((_d = state$1.sourceToken) == null ? void 0 : _d.address) || !((_e = state$1.sourceToken) == null ? void 0 : _e.decimals) || !NumberUtil.bigNumber(state$1.sourceTokenAmount).gt(0);
    const invalidSourceTokenAmount = !state$1.sourceTokenAmount;
    return {
      networkAddress,
      fromAddress: address,
      fromCaipAddress: caipAddress,
      sourceTokenAddress: (_f = state$1.sourceToken) == null ? void 0 : _f.address,
      toTokenAddress: (_g = state$1.toToken) == null ? void 0 : _g.address,
      toTokenAmount: state$1.toTokenAmount,
      toTokenDecimals: (_h = state$1.toToken) == null ? void 0 : _h.decimals,
      sourceTokenAmount: state$1.sourceTokenAmount,
      sourceTokenDecimals: (_i = state$1.sourceToken) == null ? void 0 : _i.decimals,
      invalidToToken,
      invalidSourceToken,
      invalidSourceTokenAmount,
      availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount,
      isAuthConnector: connectorId === ConstantsUtil.CONNECTOR_ID.AUTH
    };
  },
  async setSourceToken(sourceToken) {
    if (!sourceToken) {
      state$1.sourceToken = sourceToken;
      state$1.sourceTokenAmount = "";
      state$1.sourceTokenPriceInUSD = 0;
      return;
    }
    state$1.sourceToken = sourceToken;
    await SwapController.setTokenPrice(sourceToken.address, "sourceToken");
  },
  setSourceTokenAmount(amount) {
    state$1.sourceTokenAmount = amount;
  },
  async setToToken(toToken) {
    if (!toToken) {
      state$1.toToken = toToken;
      state$1.toTokenAmount = "";
      state$1.toTokenPriceInUSD = 0;
      return;
    }
    state$1.toToken = toToken;
    await SwapController.setTokenPrice(toToken.address, "toToken");
  },
  setToTokenAmount(amount) {
    state$1.toTokenAmount = amount ? NumberUtil.toFixed(amount, TO_AMOUNT_DECIMALS) : "";
  },
  async setTokenPrice(address, target) {
    let price = state$1.tokensPriceMap[address] || 0;
    if (!price) {
      state$1.loadingPrices = true;
      price = await SwapController.getAddressPrice(address);
    }
    if (target === "sourceToken") {
      state$1.sourceTokenPriceInUSD = price;
    } else if (target === "toToken") {
      state$1.toTokenPriceInUSD = price;
    }
    if (state$1.loadingPrices) {
      state$1.loadingPrices = false;
    }
    if (SwapController.getParams().availableToSwap && !state$1.switchingTokens) {
      SwapController.swapTokens();
    }
  },
  async switchTokens() {
    if (state$1.initializing || !state$1.initialized || state$1.switchingTokens) {
      return;
    }
    state$1.switchingTokens = true;
    try {
      const newSourceToken = state$1.toToken ? { ...state$1.toToken } : void 0;
      const newToToken = state$1.sourceToken ? { ...state$1.sourceToken } : void 0;
      const newSourceTokenAmount = newSourceToken && state$1.toTokenAmount === "" ? "1" : state$1.toTokenAmount;
      SwapController.setSourceTokenAmount(newSourceTokenAmount);
      SwapController.setToTokenAmount("");
      await SwapController.setSourceToken(newSourceToken);
      await SwapController.setToToken(newToToken);
      state$1.switchingTokens = false;
      SwapController.swapTokens();
    } catch (error) {
      state$1.switchingTokens = false;
      throw error;
    }
  },
  resetState() {
    state$1.myTokensWithBalance = initialState.myTokensWithBalance;
    state$1.tokensPriceMap = initialState.tokensPriceMap;
    state$1.initialized = initialState.initialized;
    state$1.initializing = initialState.initializing;
    state$1.switchingTokens = initialState.switchingTokens;
    state$1.sourceToken = initialState.sourceToken;
    state$1.sourceTokenAmount = initialState.sourceTokenAmount;
    state$1.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
    state$1.toToken = initialState.toToken;
    state$1.toTokenAmount = initialState.toTokenAmount;
    state$1.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
    state$1.networkPrice = initialState.networkPrice;
    state$1.networkTokenSymbol = initialState.networkTokenSymbol;
    state$1.networkBalanceInUSD = initialState.networkBalanceInUSD;
    state$1.inputError = initialState.inputError;
  },
  resetValues() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    const networkToken = (_a = state$1.tokens) == null ? void 0 : _a.find((token) => token.address === networkAddress);
    SwapController.setSourceToken(networkToken);
    SwapController.setToToken(void 0);
  },
  getApprovalLoadingState() {
    return state$1.loadingApprovalTransaction;
  },
  clearError() {
    state$1.transactionError = void 0;
  },
  async initializeState() {
    if (state$1.initializing) {
      return;
    }
    state$1.initializing = true;
    if (!state$1.initialized) {
      try {
        await SwapController.fetchTokens();
        state$1.initialized = true;
      } catch (error) {
        state$1.initialized = false;
        SnackController.showError("Failed to initialize swap");
        RouterController.goBack();
      }
    }
    state$1.initializing = false;
  },
  async fetchTokens() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    await SwapController.getNetworkTokenPrice();
    await SwapController.getMyTokensWithBalance();
    const networkToken = (_a = state$1.myTokensWithBalance) == null ? void 0 : _a.find((token) => token.address === networkAddress);
    if (networkToken) {
      state$1.networkTokenSymbol = networkToken.symbol;
      SwapController.setSourceToken(networkToken);
      SwapController.setSourceTokenAmount("0");
    }
  },
  async getTokenList() {
    var _a;
    const activeCaipNetworkId = (_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId;
    if (state$1.caipNetworkId === activeCaipNetworkId && state$1.tokens) {
      return;
    }
    try {
      state$1.tokensLoading = true;
      const tokens = await SwapApiUtil.getTokenList(activeCaipNetworkId);
      state$1.tokens = tokens;
      state$1.caipNetworkId = activeCaipNetworkId;
      state$1.popularTokens = tokens.sort((aTokenInfo, bTokenInfo) => {
        if (aTokenInfo.symbol < bTokenInfo.symbol) {
          return -1;
        }
        if (aTokenInfo.symbol > bTokenInfo.symbol) {
          return 1;
        }
        return 0;
      });
      state$1.suggestedTokens = tokens.filter((token) => {
        if (ConstantsUtil$1.SWAP_SUGGESTED_TOKENS.includes(token.symbol)) {
          return true;
        }
        return false;
      });
    } catch (error) {
      state$1.tokens = [];
      state$1.popularTokens = [];
      state$1.suggestedTokens = [];
    } finally {
      state$1.tokensLoading = false;
    }
  },
  async getAddressPrice(address) {
    var _a, _b;
    const existPrice = state$1.tokensPriceMap[address];
    if (existPrice) {
      return existPrice;
    }
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [address]
    });
    const fungibles = (response == null ? void 0 : response.fungibles) || [];
    const allTokens = [...state$1.tokens || [], ...state$1.myTokensWithBalance || []];
    const symbol = (_a = allTokens == null ? void 0 : allTokens.find((token) => token.address === address)) == null ? void 0 : _a.symbol;
    const price = ((_b = fungibles.find((p) => p.symbol.toLowerCase() === (symbol == null ? void 0 : symbol.toLowerCase()))) == null ? void 0 : _b.price) || 0;
    const priceAsFloat = parseFloat(price.toString());
    state$1.tokensPriceMap[address] = priceAsFloat;
    return priceAsFloat;
  },
  async getNetworkTokenPrice() {
    var _a;
    const { networkAddress } = SwapController.getParams();
    const response = await BlockchainApiController.fetchTokenPrice({
      addresses: [networkAddress]
    }).catch(() => {
      SnackController.showError("Failed to fetch network token price");
      return { fungibles: [] };
    });
    const token = (_a = response.fungibles) == null ? void 0 : _a[0];
    const price = (token == null ? void 0 : token.price.toString()) || "0";
    state$1.tokensPriceMap[networkAddress] = parseFloat(price);
    state$1.networkTokenSymbol = (token == null ? void 0 : token.symbol) || "";
    state$1.networkPrice = price;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const balances = await BalanceUtil.getMyTokensWithBalance(forceUpdate);
    const swapBalances = SwapApiUtil.mapBalancesToSwapTokens(balances);
    if (!swapBalances) {
      return;
    }
    await SwapController.getInitialGasPrice();
    SwapController.setBalances(swapBalances);
  },
  setBalances(balances) {
    const { networkAddress } = SwapController.getParams();
    const caipNetwork = ChainController.state.activeCaipNetwork;
    if (!caipNetwork) {
      return;
    }
    const networkToken = balances.find((token) => token.address === networkAddress);
    balances.forEach((token) => {
      state$1.tokensPriceMap[token.address] = token.price || 0;
    });
    state$1.myTokensWithBalance = balances.filter((token) => token.address.startsWith(caipNetwork.caipNetworkId));
    state$1.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async getInitialGasPrice() {
    var _a, _b;
    const res = await SwapApiUtil.fetchGasPrice();
    if (!res) {
      return { gasPrice: null, gasPriceInUSD: null };
    }
    switch ((_b = (_a = ChainController.state) == null ? void 0 : _a.activeCaipNetwork) == null ? void 0 : _b.chainNamespace) {
      case ConstantsUtil.CHAIN.SOLANA:
        state$1.gasFee = res.standard ?? "0";
        state$1.gasPriceInUSD = NumberUtil.multiply(res.standard, state$1.networkPrice).div(1e9).toNumber();
        return {
          gasPrice: BigInt(state$1.gasFee),
          gasPriceInUSD: Number(state$1.gasPriceInUSD)
        };
      case ConstantsUtil.CHAIN.EVM:
      default:
        const value = res.standard ?? "0";
        const gasFee = BigInt(value);
        const gasLimit = BigInt(INITIAL_GAS_LIMIT);
        const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state$1.networkPrice, gasLimit, gasFee);
        state$1.gasFee = value;
        state$1.gasPriceInUSD = gasPrice;
        return { gasPrice: gasFee, gasPriceInUSD: gasPrice };
    }
  },
  // -- Swap -------------------------------------- //
  async swapTokens() {
    var _a, _b, _c;
    const address = (_a = ChainController.getAccountData()) == null ? void 0 : _a.address;
    const sourceToken = state$1.sourceToken;
    const toToken = state$1.toToken;
    const haveSourceTokenAmount = NumberUtil.bigNumber(state$1.sourceTokenAmount).gt(0);
    if (!haveSourceTokenAmount) {
      SwapController.setToTokenAmount("");
    }
    if (!toToken || !sourceToken || state$1.loadingPrices || !haveSourceTokenAmount || !address) {
      return;
    }
    state$1.loadingQuote = true;
    const amountDecimal = NumberUtil.bigNumber(state$1.sourceTokenAmount).times(10 ** sourceToken.decimals).round(0);
    try {
      const quoteResponse = await BlockchainApiController.fetchSwapQuote({
        userAddress: address,
        from: sourceToken.address,
        to: toToken.address,
        gasPrice: state$1.gasFee,
        amount: amountDecimal.toString()
      });
      state$1.loadingQuote = false;
      const quoteToAmount = (_c = (_b = quoteResponse == null ? void 0 : quoteResponse.quotes) == null ? void 0 : _b[0]) == null ? void 0 : _c.toAmount;
      if (!quoteToAmount) {
        AlertController.open({
          displayMessage: "Incorrect amount",
          debugMessage: "Please enter a valid amount"
        }, "error");
        return;
      }
      const toTokenAmount = NumberUtil.bigNumber(quoteToAmount).div(10 ** toToken.decimals).toString();
      SwapController.setToTokenAmount(toTokenAmount);
      const isInsufficientToken = SwapController.hasInsufficientToken(state$1.sourceTokenAmount, sourceToken.address);
      if (isInsufficientToken) {
        state$1.inputError = "Insufficient balance";
      } else {
        state$1.inputError = void 0;
        SwapController.setTransactionDetails();
      }
    } catch (error) {
      const response = await SwapApiUtil.handleSwapError(error);
      state$1.loadingQuote = false;
      state$1.inputError = response || "Insufficient balance";
    }
  },
  // -- Create Transactions -------------------------------------- //
  async getTransaction() {
    const { fromCaipAddress, availableToSwap } = SwapController.getParams();
    const sourceToken = state$1.sourceToken;
    const toToken = state$1.toToken;
    if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state$1.loadingQuote) {
      return void 0;
    }
    try {
      state$1.loadingBuildTransaction = true;
      const hasAllowance = await SwapApiUtil.fetchSwapAllowance({
        userAddress: fromCaipAddress,
        tokenAddress: sourceToken.address,
        sourceTokenAmount: state$1.sourceTokenAmount,
        sourceTokenDecimals: sourceToken.decimals
      });
      let transaction = void 0;
      if (hasAllowance) {
        transaction = await SwapController.createSwapTransaction();
      } else {
        transaction = await SwapController.createAllowanceTransaction();
      }
      state$1.loadingBuildTransaction = false;
      state$1.fetchError = false;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to check allowance");
      state$1.loadingBuildTransaction = false;
      state$1.approvalTransaction = void 0;
      state$1.swapTransaction = void 0;
      state$1.fetchError = true;
      return void 0;
    }
  },
  async createAllowanceTransaction() {
    const { fromCaipAddress, sourceTokenAddress, toTokenAddress } = SwapController.getParams();
    if (!fromCaipAddress || !toTokenAddress) {
      return void 0;
    }
    if (!sourceTokenAddress) {
      throw new Error("createAllowanceTransaction - No source token address found.");
    }
    try {
      const response = await BlockchainApiController.generateApproveCalldata({
        from: sourceTokenAddress,
        to: toTokenAddress,
        userAddress: fromCaipAddress
      });
      const address = CoreHelperUtil.getPlainAddress(response.tx.from);
      if (!address) {
        throw new Error("SwapController:createAllowanceTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gasPrice: BigInt(response.tx.eip155.gasPrice),
        value: BigInt(response.tx.value),
        toAmount: state$1.toTokenAmount
      };
      state$1.swapTransaction = void 0;
      state$1.approvalTransaction = {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
      return {
        data: transaction.data,
        to: transaction.to,
        gasPrice: transaction.gasPrice,
        value: transaction.value,
        toAmount: transaction.toAmount
      };
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create approval transaction");
      state$1.approvalTransaction = void 0;
      state$1.swapTransaction = void 0;
      state$1.fetchError = true;
      return void 0;
    }
  },
  async createSwapTransaction() {
    var _a;
    const { networkAddress, fromCaipAddress, sourceTokenAmount } = SwapController.getParams();
    const sourceToken = state$1.sourceToken;
    const toToken = state$1.toToken;
    if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
      return void 0;
    }
    const amount = (_a = ConnectionController.parseUnits(sourceTokenAmount, sourceToken.decimals)) == null ? void 0 : _a.toString();
    try {
      const response = await BlockchainApiController.generateSwapCalldata({
        userAddress: fromCaipAddress,
        from: sourceToken.address,
        to: toToken.address,
        amount,
        disableEstimate: true
      });
      const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
      const gas = BigInt(response.tx.eip155.gas);
      const gasPrice = BigInt(response.tx.eip155.gasPrice);
      const address = CoreHelperUtil.getPlainAddress(response.tx.to);
      if (!address) {
        throw new Error("SwapController:createSwapTransaction - address is required");
      }
      const transaction = {
        data: response.tx.data,
        to: address,
        gas,
        gasPrice,
        value: isSourceTokenIsNetworkToken ? BigInt(amount ?? "0") : BigInt("0"),
        toAmount: state$1.toTokenAmount
      };
      state$1.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state$1.networkPrice, gas, gasPrice);
      state$1.approvalTransaction = void 0;
      state$1.swapTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create transaction");
      state$1.approvalTransaction = void 0;
      state$1.swapTransaction = void 0;
      state$1.fetchError = true;
      return void 0;
    }
  },
  onEmbeddedWalletApprovalSuccess() {
    SnackController.showLoading("Approve limit increase in your wallet");
    RouterController.replace("SwapPreview");
  },
  // -- Send Transactions --------------------------------- //
  async sendTransactionForApproval(data) {
    var _a, _b, _c;
    const { fromAddress, isAuthConnector } = SwapController.getParams();
    state$1.loadingApprovalTransaction = true;
    const approveLimitMessage = `Approve limit increase in your wallet`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess: SwapController.onEmbeddedWalletApprovalSuccess
      });
    } else {
      SnackController.showLoading(approveLimitMessage);
    }
    try {
      await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil.CHAIN.EVM
      });
      await SwapController.swapTokens();
      await SwapController.getTransaction();
      state$1.approvalTransaction = void 0;
      state$1.loadingApprovalTransaction = false;
    } catch (err) {
      const error = err;
      state$1.transactionError = error == null ? void 0 : error.displayMessage;
      state$1.loadingApprovalTransaction = false;
      SnackController.showError((error == null ? void 0 : error.displayMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_APPROVAL_ERROR",
        properties: {
          message: (error == null ? void 0 : error.displayMessage) || (error == null ? void 0 : error.message) || "Unknown",
          network: ((_a = ChainController.state.activeCaipNetwork) == null ? void 0 : _a.caipNetworkId) || "",
          swapFromToken: ((_b = SwapController.state.sourceToken) == null ? void 0 : _b.symbol) || "",
          swapToToken: ((_c = SwapController.state.toToken) == null ? void 0 : _c.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
    }
  },
  async sendTransactionForSwap(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!data) {
      return void 0;
    }
    const { fromAddress, toTokenAmount, isAuthConnector } = SwapController.getParams();
    state$1.loadingTransaction = true;
    const snackbarPendingMessage = `Swapping ${(_a = state$1.sourceToken) == null ? void 0 : _a.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_b = state$1.toToken) == null ? void 0 : _b.symbol}`;
    const snackbarSuccessMessage = `Swapped ${(_c = state$1.sourceToken) == null ? void 0 : _c.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_d = state$1.toToken) == null ? void 0 : _d.symbol}`;
    if (isAuthConnector) {
      RouterController.pushTransactionStack({
        onSuccess() {
          RouterController.replace("Account");
          SnackController.showLoading(snackbarPendingMessage);
          controller$1.resetState();
        }
      });
    } else {
      SnackController.showLoading("Confirm transaction in your wallet");
    }
    try {
      const forceUpdateAddresses = [(_e = state$1.sourceToken) == null ? void 0 : _e.address, (_f = state$1.toToken) == null ? void 0 : _f.address].join(",");
      const transactionHash = await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: data.value,
        chainNamespace: ConstantsUtil.CHAIN.EVM
      });
      state$1.loadingTransaction = false;
      SnackController.showSuccess(snackbarSuccessMessage);
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_SUCCESS",
        properties: {
          network: ((_g = ChainController.state.activeCaipNetwork) == null ? void 0 : _g.caipNetworkId) || "",
          swapFromToken: ((_h = SwapController.state.sourceToken) == null ? void 0 : _h.symbol) || "",
          swapToToken: ((_i = SwapController.state.toToken) == null ? void 0 : _i.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      controller$1.resetState();
      if (!isAuthConnector) {
        RouterController.replace("Account");
      }
      controller$1.getMyTokensWithBalance(forceUpdateAddresses);
      return transactionHash;
    } catch (err) {
      const error = err;
      state$1.transactionError = error == null ? void 0 : error.displayMessage;
      state$1.loadingTransaction = false;
      SnackController.showError((error == null ? void 0 : error.displayMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_ERROR",
        properties: {
          message: (error == null ? void 0 : error.displayMessage) || (error == null ? void 0 : error.message) || "Unknown",
          network: ((_j = ChainController.state.activeCaipNetwork) == null ? void 0 : _j.caipNetworkId) || "",
          swapFromToken: ((_k = SwapController.state.sourceToken) == null ? void 0 : _k.symbol) || "",
          swapToToken: ((_l = SwapController.state.toToken) == null ? void 0 : _l.symbol) || "",
          swapFromAmount: SwapController.state.sourceTokenAmount || "",
          swapToAmount: SwapController.state.toTokenAmount || "",
          isSmartAccount: getPreferredAccountType(ConstantsUtil.CHAIN.EVM) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return void 0;
    }
  },
  // -- Checks -------------------------------------------- //
  hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
    const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state$1.myTokensWithBalance);
    return isInsufficientSourceTokenForSwap;
  },
  // -- Calculations -------------------------------------- //
  setTransactionDetails() {
    const { toTokenAddress, toTokenDecimals } = SwapController.getParams();
    if (!toTokenAddress || !toTokenDecimals) {
      return;
    }
    state$1.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state$1.networkPrice, BigInt(state$1.gasFee), BigInt(INITIAL_GAS_LIMIT));
    state$1.priceImpact = SwapCalculationUtil.getPriceImpact({
      sourceTokenAmount: state$1.sourceTokenAmount,
      sourceTokenPriceInUSD: state$1.sourceTokenPriceInUSD,
      toTokenPriceInUSD: state$1.toTokenPriceInUSD,
      toTokenAmount: state$1.toTokenAmount
    });
    state$1.maxSlippage = SwapCalculationUtil.getMaxSlippage(state$1.slippage, state$1.toTokenAmount);
    state$1.providerFee = SwapCalculationUtil.getProviderFee(state$1.sourceTokenAmount);
  }
};
const SwapController = withErrorBoundary(controller$1);
const state = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
const controller = {
  state,
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state.open = true;
    state.message = message;
    state.triggerRect = triggerRect;
    state.variant = variant;
  },
  hide() {
    state.open = false;
    state.message = "";
    state.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};
const TooltipController = withErrorBoundary(controller);
const ModalUtil = {
  isUnsupportedChainView() {
    return RouterController.state.view === "UnsupportedChain" || RouterController.state.view === "SwitchNetwork" && RouterController.state.history.includes("UnsupportedChain");
  },
  async safeClose() {
    if (this.isUnsupportedChainView()) {
      ModalController.shake();
      return;
    }
    const isSIWXCloseDisabled = await SIWXUtil.isSIWXCloseDisabled();
    if (isSIWXCloseDisabled) {
      ModalController.shake();
      return;
    }
    if (RouterController.state.view === "DataCapture" || RouterController.state.view === "DataCaptureOtpConfirm") {
      ConnectionController.disconnect();
    }
    ModalController.close();
  }
};
const styles$f = css`
  :host {
    display: block;
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    overflow: hidden;
  }
`;
var __decorate$f = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiCard = class WuiCard2 extends i {
  render() {
    return b`<slot></slot>`;
  }
};
WuiCard.styles = [resetStyles, styles$f];
WuiCard = __decorate$f([
  customElement("wui-card")
], WuiCard);
const styles$e = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ spacing }) => spacing[2]};
    padding: ${({ spacing }) => spacing[3]};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};

      wui-icon {
        color: ${({ tokens }) => tokens.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundWarning};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({ tokens }) => tokens.core.backgroundError};

      wui-icon {
        color: ${({ tokens }) => tokens.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({ borderRadius }) => borderRadius["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;
var __decorate$e = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const TYPE_ICON_NAME = {
  info: "info",
  success: "checkmark",
  warning: "warningCircle",
  error: "warning"
};
let WuiAlertBar = class WuiAlertBar2 extends i {
  constructor() {
    super(...arguments);
    this.message = "";
    this.type = "info";
  }
  render() {
    return b`
      <wui-flex
        data-type=${o(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${TYPE_ICON_NAME[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
  }
  onClose() {
    AlertController.close();
  }
};
WuiAlertBar.styles = [resetStyles, styles$e];
__decorate$e([
  n()
], WuiAlertBar.prototype, "message", void 0);
__decorate$e([
  n()
], WuiAlertBar.prototype, "type", void 0);
WuiAlertBar = __decorate$e([
  customElement("wui-alertbar")
], WuiAlertBar);
const styles$d = css`
  :host {
    display: block;
    position: absolute;
    top: ${({ spacing }) => spacing["3"]};
    left: ${({ spacing }) => spacing["4"]};
    right: ${({ spacing }) => spacing["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;
var __decorate$d = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const presets = {
  info: {
    backgroundColor: "fg-350",
    iconColor: "fg-325",
    icon: "info"
  },
  success: {
    backgroundColor: "success-glass-reown-020",
    iconColor: "success-125",
    icon: "checkmark"
  },
  warning: {
    backgroundColor: "warning-glass-reown-020",
    iconColor: "warning-100",
    icon: "warningCircle"
  },
  error: {
    backgroundColor: "error-glass-reown-020",
    iconColor: "error-125",
    icon: "warning"
  }
};
let W3mAlertBar = class W3mAlertBar2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = AlertController.state.open;
    this.onOpen(true);
    this.unsubscribe.push(AlertController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen(false);
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = AlertController.state;
    const preset = presets[variant];
    return b`
      <wui-alertbar
        message=${message}
        backgroundColor=${preset == null ? void 0 : preset.backgroundColor}
        iconColor=${preset == null ? void 0 : preset.iconColor}
        icon=${preset == null ? void 0 : preset.icon}
        type=${variant}
      ></wui-alertbar>
    `;
  }
  onOpen(isMounted) {
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "scale(0.85)" },
        { opacity: 1, transform: "scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: auto`;
    } else if (!isMounted) {
      this.animate([
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.style.cssText = `pointer-events: none`;
    }
  }
};
W3mAlertBar.styles = styles$d;
__decorate$d([
  r()
], W3mAlertBar.prototype, "open", void 0);
W3mAlertBar = __decorate$d([
  customElement("w3m-alertbar")
], W3mAlertBar);
const styles$c = css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({ spacing }) => spacing[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({ tokens }) => tokens.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({ borderRadius }) => borderRadius[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({ tokens }) => tokens.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
var __decorate$c = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiIconButton = class WuiIconButton2 extends i {
  constructor() {
    super(...arguments);
    this.icon = "card";
    this.variant = "primary";
    this.type = "accent";
    this.size = "md";
    this.iconSize = void 0;
    this.fullWidth = false;
    this.disabled = false;
  }
  render() {
    return b`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${o(this.iconSize)}></wui-icon>
    </button>`;
  }
};
WuiIconButton.styles = [resetStyles, elementStyles, styles$c];
__decorate$c([
  n()
], WuiIconButton.prototype, "icon", void 0);
__decorate$c([
  n()
], WuiIconButton.prototype, "variant", void 0);
__decorate$c([
  n()
], WuiIconButton.prototype, "type", void 0);
__decorate$c([
  n()
], WuiIconButton.prototype, "size", void 0);
__decorate$c([
  n()
], WuiIconButton.prototype, "iconSize", void 0);
__decorate$c([
  n({ type: Boolean })
], WuiIconButton.prototype, "fullWidth", void 0);
__decorate$c([
  n({ type: Boolean })
], WuiIconButton.prototype, "disabled", void 0);
WuiIconButton = __decorate$c([
  customElement("wui-icon-button")
], WuiIconButton);
const styles$b = css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]};
    transition: background-color ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({ borderRadius }) => borderRadius[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({ spacing }) => spacing[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;
var __decorate$b = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const TEXT_VARIANT_BY_SIZE = {
  lg: "lg-regular",
  md: "md-regular",
  sm: "sm-regular"
};
const ICON_SIZE_BY_SIZE = {
  lg: "lg",
  md: "md",
  sm: "sm"
};
let WuiSelect = class WuiSelect2 extends i {
  constructor() {
    super(...arguments);
    this.imageSrc = "";
    this.text = "";
    this.size = "lg";
    this.type = "text-dropdown";
    this.disabled = false;
  }
  render() {
    return b`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`;
  }
  textTemplate() {
    const textSize = TEXT_VARIANT_BY_SIZE[this.size];
    if (this.text) {
      return b`<wui-text color="primary" variant=${textSize}>${this.text}</wui-text>`;
    }
    return null;
  }
  imageTemplate() {
    if (this.imageSrc) {
      return b`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
    }
    const iconSize = ICON_SIZE_BY_SIZE[this.size];
    return b` <wui-flex class="left-icon-container">
      <wui-icon size=${iconSize} name="networkPlaceholder"></wui-icon>
    </wui-flex>`;
  }
};
WuiSelect.styles = [resetStyles, elementStyles, styles$b];
__decorate$b([
  n()
], WuiSelect.prototype, "imageSrc", void 0);
__decorate$b([
  n()
], WuiSelect.prototype, "text", void 0);
__decorate$b([
  n()
], WuiSelect.prototype, "size", void 0);
__decorate$b([
  n()
], WuiSelect.prototype, "type", void 0);
__decorate$b([
  n({ type: Boolean })
], WuiSelect.prototype, "disabled", void 0);
WuiSelect = __decorate$b([
  customElement("wui-select")
], WuiSelect);
const styles$a = css`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({ easings }) => easings["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({ easings }) => easings["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({ easings }) => easings["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({ easings }) => easings["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
var __decorate$a = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const BETA_SCREENS = ["SmartSessionList"];
const BACKGROUND_OVERRIDES = {
  PayWithExchange: vars.tokens.theme.foregroundPrimary
};
function headings() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const connectorName = (_b = (_a = RouterController.state.data) == null ? void 0 : _a.connector) == null ? void 0 : _b.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  const socialProvider = (_h = ChainController.getAccountData()) == null ? void 0 : _h.socialProvider;
  const socialTitle = socialProvider ? socialProvider.charAt(0).toUpperCase() + socialProvider.slice(1) : "Connect Social";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    Create: "Create Wallet",
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingWalletConnectBasic: "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview Convert",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailLogin: "Email Login",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a Wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Pay: "How you pay",
    ProfileWallets: "Wallets",
    SwitchNetwork: networkName ?? "Switch Network",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade Your Wallet",
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose Name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select Token",
    SwapPreview: "Preview Swap",
    WalletSend: "Send",
    WalletSendPreview: "Review Send",
    WalletSendSelectToken: "Select Token",
    WalletSendConfirmed: "Confirmed",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a Wallet?",
    ConnectWallets: "Connect Wallet",
    ConnectSocials: "All Socials",
    ConnectingSocial: socialTitle,
    ConnectingMultiChain: "Select Chain",
    ConnectingFarcaster: "Farcaster",
    SwitchActiveChain: "Switch Chain",
    SmartSessionCreated: void 0,
    SmartSessionList: "Smart Sessions",
    SIWXSignMessage: "Sign In",
    PayLoading: "Payment in Progress",
    DataCapture: "Profile",
    DataCaptureOtpConfirm: "Confirm Email",
    FundWallet: "Fund Wallet",
    PayWithExchange: "Deposit from Exchange",
    PayWithExchangeSelectAsset: "Select Asset"
  };
}
let W3mHeader = class W3mHeader2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.network = ChainController.state.activeCaipNetwork;
    this.networkImage = AssetUtil.getNetworkImage(this.network);
    this.showBack = false;
    this.prevHistoryLength = 1;
    this.view = RouterController.state.view;
    this.viewDirection = "";
    this.unsubscribe.push(AssetController.subscribeNetworkImages(() => {
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }), RouterController.subscribeKey("view", (val) => {
      setTimeout(() => {
        this.view = val;
        this.heading = headings()[val];
      }, ConstantsUtil$2.ANIMATION_DURATIONS.HeaderText);
      this.onViewChange();
      this.onHistoryChange();
    }), ChainController.subscribeKey("activeCaipNetwork", (val) => {
      this.network = val;
      this.networkImage = AssetUtil.getNetworkImage(this.network);
    }));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const backgroundColor = BACKGROUND_OVERRIDES[RouterController.state.view] ?? vars.tokens.theme.backgroundPrimary;
    this.style.setProperty("--local-header-background-color", backgroundColor);
    return b`
      <wui-flex
        .padding=${["0", "4", "0", "4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    await ModalUtil.safeClose();
  }
  rightHeaderTemplate() {
    var _a, _b, _c;
    const isSmartSessionsEnabled = (_c = (_b = (_a = OptionsController) == null ? void 0 : _a.state) == null ? void 0 : _b.features) == null ? void 0 : _c.smartSessions;
    if (RouterController.state.view !== "Account" || !isSmartSessionsEnabled) {
      return this.closeButtonTemplate();
    }
    return b`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${() => RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return b`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `;
  }
  titleTemplate() {
    const isBeta = BETA_SCREENS.includes(this.view);
    return b`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${isBeta ? b`<wui-tag variant="accent" size="md">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    var _a;
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isEmbeddedEnable = OptionsController.state.enableEmbedded;
    const isApproveTransaction = view === "ApproveTransaction";
    const isConnectingSIWEView = view === "ConnectingSiwe";
    const isAccountView = view === "Account";
    const enableNetworkSwitch = OptionsController.state.enableNetworkSwitch;
    const shouldHideBack = isApproveTransaction || isConnectingSIWEView || isConnectHelp && isEmbeddedEnable;
    if (isAccountView && enableNetworkSwitch) {
      return b`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${o((_a = this.network) == null ? void 0 : _a.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${o(this.networkImage)}
      ></wui-select>`;
    }
    if (this.showBack && !shouldHideBack) {
      return b`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`;
    }
    return b`<wui-icon-button
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`;
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  isAllowedNetworkSwitch() {
    const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a;
      return id === ((_a = this.network) == null ? void 0 : _a.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onViewChange() {
    const { history } = RouterController.state;
    let direction = ConstantsUtil$2.VIEW_DIRECTION.Next;
    if (history.length < this.prevHistoryLength) {
      direction = ConstantsUtil$2.VIEW_DIRECTION.Prev;
    }
    this.prevHistoryLength = history.length;
    this.viewDirection = direction;
  }
  async onHistoryChange() {
    var _a;
    const { history } = RouterController.state;
    const buttonEl = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    RouterController.goBack();
  }
};
W3mHeader.styles = styles$a;
__decorate$a([
  r()
], W3mHeader.prototype, "heading", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "network", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "networkImage", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "showBack", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "prevHistoryLength", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "view", void 0);
__decorate$a([
  r()
], W3mHeader.prototype, "viewDirection", void 0);
W3mHeader = __decorate$a([
  customElement("w3m-header")
], W3mHeader);
const styles$9 = css`
  :host {
    display: flex;
    align-items: center;
    gap: ${({ spacing }) => spacing[1]};
    padding: ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[2]} ${({ spacing }) => spacing[2]};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({ tokens }) => tokens.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({ spacing }) => spacing[1]};
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    border-radius: ${({ borderRadius }) => borderRadius.round} !important;
  }
`;
var __decorate$9 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let WuiSnackbar = class WuiSnackbar2 extends i {
  constructor() {
    super(...arguments);
    this.message = "";
    this.variant = "success";
  }
  render() {
    return b`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
  }
  templateIcon() {
    const COLOR = {
      success: "success",
      error: "error",
      warning: "warning",
      info: "default"
    };
    const ICON = {
      success: "checkmark",
      error: "warning",
      warning: "warningCircle",
      info: "info"
    };
    if (this.variant === "loading") {
      return b`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;
    }
    return b`<wui-icon-box
      size="md"
      color=${COLOR[this.variant]}
      icon=${ICON[this.variant]}
    ></wui-icon-box>`;
  }
};
WuiSnackbar.styles = [resetStyles, styles$9];
__decorate$9([
  n()
], WuiSnackbar.prototype, "message", void 0);
__decorate$9([
  n()
], WuiSnackbar.prototype, "variant", void 0);
WuiSnackbar = __decorate$9([
  customElement("wui-snackbar")
], WuiSnackbar);
const styles$8 = i$1`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
var __decorate$8 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mSnackBar = class W3mSnackBar2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    return b` <wui-snackbar message=${message} variant=${variant}></wui-snackbar> `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (SnackController.state.autoClose) {
        this.timeout = setTimeout(() => SnackController.hide(), 2500);
      }
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles$8;
__decorate$8([
  r()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate$8([
  customElement("w3m-snackbar")
], W3mSnackBar);
const styles$7 = css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({ spacing }) => spacing["3"]} 10px ${({ spacing }) => spacing["3"]};
    border-radius: ${({ borderRadius }) => borderRadius["3"]};
    color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({ spacing }) => spacing["5"]});
    transition: opacity ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({ durations }) => durations["xl"]};
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({ tokens }) => tokens.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({ tokens }) => tokens.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
var __decorate$7 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mTooltip = class W3mTooltip2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = TooltipController.state.open;
    this.message = TooltipController.state.message;
    this.triggerRect = TooltipController.state.triggerRect;
    this.variant = TooltipController.state.variant;
    this.unsubscribe.push(...[
      TooltipController.subscribe((newState) => {
        this.open = newState.open;
        this.message = newState.message;
        this.triggerRect = newState.triggerRect;
        this.variant = newState.variant;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.dataset["variant"] = this.variant;
    const topValue = this.triggerRect.top;
    const leftValue = this.triggerRect.left;
    this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
    return b`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`;
  }
};
W3mTooltip.styles = [styles$7];
__decorate$7([
  r()
], W3mTooltip.prototype, "open", void 0);
__decorate$7([
  r()
], W3mTooltip.prototype, "message", void 0);
__decorate$7([
  r()
], W3mTooltip.prototype, "triggerRect", void 0);
__decorate$7([
  r()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = __decorate$7([
  customElement("w3m-tooltip")
], W3mTooltip);
const HelpersUtil = {
  getTabsByNamespace(namespace) {
    var _a;
    const isEVM = Boolean(namespace) && namespace === ConstantsUtil.CHAIN.EVM;
    if (!isEVM) {
      return [];
    }
    if (((_a = OptionsController.state.remoteFeatures) == null ? void 0 : _a.activity) === false) {
      return ConstantsUtil$2.ACCOUNT_TABS.filter((tab) => tab.label !== "Activity");
    }
    return ConstantsUtil$2.ACCOUNT_TABS;
  },
  isValidReownName(name) {
    return /^[a-zA-Z0-9]+$/gu.test(name);
  },
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(email);
  },
  validateReownName(name) {
    const sanitizedName = name.replace(/\^/gu, "").toLowerCase();
    return sanitizedName.replace(/[^a-zA-Z0-9]/gu, "");
  },
  hasFooter() {
    var _a;
    const view = RouterController.state.view;
    if (ConstantsUtil$2.VIEWS_WITH_LEGAL_FOOTER.includes(view)) {
      const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
      const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
      const showOnlyBranding = !termsConditionsUrl && !privacyPolicyUrl || legalCheckbox;
      if (showOnlyBranding) {
        return false;
      }
      return true;
    }
    return ConstantsUtil$2.VIEWS_WITH_DEFAULT_FOOTER.includes(view);
  }
};
const styles$6 = css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({ spacing }) => spacing["3"]};
  }

  a {
    text-decoration: none;
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
    font-weight: 500;
  }
`;
var __decorate$6 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mLegalFooter = class W3mLegalFooter2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.remoteFeatures = OptionsController.state.remoteFeatures;
    this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a;
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    const legalCheckbox = (_a = OptionsController.state.features) == null ? void 0 : _a.legalCheckbox;
    const showOnlyBranding = !termsConditionsUrl && !privacyPolicyUrl || legalCheckbox;
    if (showOnlyBranding) {
      return b`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(true)} </wui-flex>
      `;
    }
    return b`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4", "3", "3", "3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return b`<a href=${termsConditionsUrl} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return b`<a href=${privacyPolicyUrl} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`;
  }
  reownBrandingTemplate(showOnlyBranding = false) {
    var _a;
    if (!((_a = this.remoteFeatures) == null ? void 0 : _a.reownBranding)) {
      return null;
    }
    if (showOnlyBranding) {
      return b`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`;
    }
    return b`<wui-ux-by-reown></wui-ux-by-reown>`;
  }
};
W3mLegalFooter.styles = [styles$6];
__decorate$6([
  r()
], W3mLegalFooter.prototype, "remoteFeatures", void 0);
W3mLegalFooter = __decorate$6([
  customElement("w3m-legal-footer")
], W3mLegalFooter);
const styles$5 = i$1``;
var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends i {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return b`
      <wui-flex
        .padding=${["4", "3", "3", "3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return b` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WHAT_IS_A_BUY",
      properties: {
        isSmartAccount: getPreferredAccountType(ChainController.state.activeChain) === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
      }
    });
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles$5];
W3mOnRampProvidersFooter = __decorate$5([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);
const styles$4 = css`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;
var __decorate$4 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mFooter = class W3mFooter2 extends i {
  constructor() {
    super(...arguments);
    this.resizeObserver = void 0;
    this.unsubscribe = [];
    this.status = "hide";
    this.view = RouterController.state.view;
  }
  firstUpdated() {
    this.status = HelpersUtil.hasFooter() ? "show" : "hide";
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.view = val;
      this.status = HelpersUtil.hasFooter() ? "show" : "hide";
      if (this.status === "hide") {
        const globalStyles = document.documentElement.style;
        globalStyles.setProperty("--apkt-footer-height", "0px");
      }
    }));
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this.getWrapper()) {
          const newHeight = `${entry.contentRect.height}px`;
          const globalStyles = document.documentElement.style;
          globalStyles.setProperty("--apkt-footer-height", newHeight);
        }
      }
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  render() {
    return b`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `;
  }
  templatePageContainer() {
    if (HelpersUtil.hasFooter()) {
      return b` ${this.templateFooter()}`;
    }
    return null;
  }
  templateFooter() {
    switch (this.view) {
      case "Networks":
        return this.templateNetworksFooter();
      case "Connect":
      case "ConnectWallets":
      case "OnRampFiatSelect":
      case "OnRampTokenSelect":
        return b`<w3m-legal-footer></w3m-legal-footer>`;
      case "OnRampProviders":
        return b`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;
      default:
        return null;
    }
  }
  templateNetworksFooter() {
    return b` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  getWrapper() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div.container");
  }
};
W3mFooter.styles = [styles$4];
__decorate$4([
  r()
], W3mFooter.prototype, "status", void 0);
__decorate$4([
  r()
], W3mFooter.prototype, "view", void 0);
W3mFooter = __decorate$4([
  customElement("w3m-footer")
], W3mFooter);
const styles$3 = css`
  :host {
    display: block;
    width: inherit;
  }
`;
var __decorate$3 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mRouter = class W3mRouter2 extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.viewState = RouterController.state.view;
    this.history = RouterController.state.history.join(",");
    this.unsubscribe.push(RouterController.subscribeKey("view", () => {
      this.history = RouterController.state.history.join(",");
      document.documentElement.style.setProperty("--apkt-duration-dynamic", "var(--apkt-durations-lg)");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    document.documentElement.style.setProperty("--apkt-duration-dynamic", "0s");
  }
  render() {
    return b`${this.templatePageContainer()}`;
  }
  templatePageContainer() {
    return b`<w3m-router-container
      history=${this.history}
      .setView=${() => {
      this.viewState = RouterController.state.view;
    }}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`;
  }
  viewTemplate(view) {
    switch (view) {
      case "AccountSettings":
        return b`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "Account":
        return b`<w3m-account-view></w3m-account-view>`;
      case "AllWallets":
        return b`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return b`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return b`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return b`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return b`<w3m-connect-view></w3m-connect-view>`;
      case "Create":
        return b`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return b`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingWalletConnectBasic":
        return b`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
      case "ConnectingExternal":
        return b`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return b`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return b`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return b`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return b`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "DataCapture":
        return b`<w3m-data-capture-view></w3m-data-capture-view>`;
      case "DataCaptureOtpConfirm":
        return b`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;
      case "Downloads":
        return b`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailLogin":
        return b`<w3m-email-login-view></w3m-email-login-view>`;
      case "EmailVerifyOtp":
        return b`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return b`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "GetWallet":
        return b`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Networks":
        return b`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return b`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "ProfileWallets":
        return b`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;
      case "Transactions":
        return b`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return b`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampTokenSelect":
        return b`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return b`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return b`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpdateEmailWallet":
        return b`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return b`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return b`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return b`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "Swap":
        return b`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return b`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return b`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return b`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return b`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return b`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WalletSendConfirmed":
        return b`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;
      case "WhatIsABuy":
        return b`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WalletReceive":
        return b`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return b`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "WhatIsAWallet":
        return b`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "ConnectingMultiChain":
        return b`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
      case "WhatIsANetwork":
        return b`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "ConnectingFarcaster":
        return b`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
      case "SwitchActiveChain":
        return b`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
      case "RegisterAccountName":
        return b`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return b`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SmartSessionCreated":
        return b`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
      case "SmartSessionList":
        return b`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
      case "SIWXSignMessage":
        return b`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
      case "Pay":
        return b`<w3m-pay-view></w3m-pay-view>`;
      case "PayLoading":
        return b`<w3m-pay-loading-view></w3m-pay-loading-view>`;
      case "FundWallet":
        return b`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;
      case "PayWithExchange":
        return b`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;
      case "PayWithExchangeSelectAsset":
        return b`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;
      default:
        return b`<w3m-connect-view></w3m-connect-view>`;
    }
  }
};
W3mRouter.styles = [styles$3];
__decorate$3([
  r()
], W3mRouter.prototype, "viewState", void 0);
__decorate$3([
  r()
], W3mRouter.prototype, "history", void 0);
W3mRouter = __decorate$3([
  customElement("w3m-router")
], W3mRouter);
const styles$2 = css`
  :host {
    z-index: ${({ tokens }) => tokens.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({ tokens }) => tokens.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      backdrop-filter ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-2"]},
      border-radius ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      background-color ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]},
      box-shadow ${({ durations }) => durations["lg"]}
        ${({ easings }) => easings["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({ durations }) => durations["lg"]}
      ${({ easings }) => easings["ease-out-power-2"]};
    transition-delay: ${({ durations }) => durations["md"]};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({ tokens }) => tokens.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({ tokens }) => tokens.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({ easings }) => easings["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({ durations }) => durations["lg"]} ${({ easings }) => easings["ease-out-power-2"]},
      w3m-shake ${({ durations }) => durations["xl"]}
        ${({ easings }) => easings["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({ easings }) => easings["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
    to {
      background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    }
  }
`;
var __decorate$2 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const SCROLL_LOCK = "scroll-lock";
const PADDING_OVERRIDES = {
  PayWithExchange: "0",
  PayWithExchangeSelectAsset: "0"
};
class W3mModalBase extends i {
  constructor() {
    super();
    this.unsubscribe = [];
    this.abortController = void 0;
    this.hasPrefetched = false;
    this.enableEmbedded = OptionsController.state.enableEmbedded;
    this.open = ModalController.state.open;
    this.caipAddress = ChainController.state.activeCaipAddress;
    this.caipNetwork = ChainController.state.activeCaipNetwork;
    this.shake = ModalController.state.shake;
    this.filterByNamespace = ConnectorController.state.filterByNamespace;
    this.padding = vars.spacing[1];
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.initializeTheming();
    ApiController.prefetchAnalyticsConfig();
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (val) => val ? this.onOpen() : this.onClose()),
      ModalController.subscribeKey("shake", (val) => this.shake = val),
      ChainController.subscribeKey("activeCaipNetwork", (val) => this.onNewNetwork(val)),
      ChainController.subscribeKey("activeCaipAddress", (val) => this.onNewAddress(val)),
      OptionsController.subscribeKey("enableEmbedded", (val) => this.enableEmbedded = val),
      ConnectorController.subscribeKey("filterByNamespace", (val) => {
        var _a;
        if (this.filterByNamespace !== val && !((_a = ChainController.getAccountData(val)) == null ? void 0 : _a.caipAddress)) {
          ApiController.fetchRecommendedWallets();
          this.filterByNamespace = val;
        }
      }),
      RouterController.subscribeKey("view", () => {
        this.dataset["border"] = HelpersUtil.hasFooter() ? "true" : "false";
        this.padding = PADDING_OVERRIDES[RouterController.state.view] ?? vars.spacing[1];
      })
    ]);
  }
  firstUpdated() {
    this.dataset["border"] = HelpersUtil.hasFooter() ? "true" : "false";
    if (this.mobileFullScreen) {
      this.setAttribute("data-mobile-fullscreen", "true");
    }
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        ModalController.close();
        this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    if (this.open) {
      this.onOpen();
    }
    if (this.enableEmbedded) {
      this.prefetch();
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    this.onRemoveKeyboardListener();
  }
  render() {
    this.style.setProperty("--local-modal-padding", this.padding);
    if (this.enableEmbedded) {
      return b`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
    }
    return this.open ? b`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
  }
  contentTemplate() {
    return b` <wui-card
      shake="${this.shake}"
      data-embedded="${o(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
  }
  async onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      if (this.mobileFullScreen) {
        return;
      }
      await this.handleClose();
    }
  }
  async handleClose() {
    await ModalUtil.safeClose();
  }
  initializeTheming() {
    const { themeVariables, themeMode } = ThemeController.state;
    const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
    initializeTheming(themeVariables, defaultThemeMode);
  }
  onClose() {
    this.open = false;
    this.classList.remove("open");
    this.onScrollUnlock();
    SnackController.hide();
    this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.open = true;
    this.classList.add("open");
    this.onScrollLock();
    this.onAddKeyboardListener();
  }
  onScrollLock() {
    const styleTag = document.createElement("style");
    styleTag.dataset["w3m"] = SCROLL_LOCK;
    styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
    document.head.appendChild(styleTag);
  }
  onScrollUnlock() {
    const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
    if (styleTag) {
      styleTag.remove();
    }
  }
  onAddKeyboardListener() {
    var _a;
    this.abortController = new AbortController();
    const card = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("wui-card");
    card == null ? void 0 : card.focus();
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.handleClose();
      } else if (event.key === "Tab") {
        const { tagName } = event.target;
        if (tagName && !tagName.includes("W3M-") && !tagName.includes("WUI-")) {
          card == null ? void 0 : card.focus();
        }
      }
    }, this.abortController);
  }
  onRemoveKeyboardListener() {
    var _a;
    (_a = this.abortController) == null ? void 0 : _a.abort();
    this.abortController = void 0;
  }
  async onNewAddress(caipAddress) {
    const isSwitchingNamespace = ChainController.state.isSwitchingNamespace;
    const isInProfileView = RouterController.state.view === "ProfileWallets";
    if (caipAddress) {
      await this.onConnected({
        caipAddress,
        isSwitchingNamespace,
        isInProfileView
      });
    } else if (!isSwitchingNamespace && !this.enableEmbedded && !isInProfileView) {
      ModalController.close();
    }
    await SIWXUtil.initializeIfEnabled(caipAddress);
    this.caipAddress = caipAddress;
    ChainController.setIsSwitchingNamespace(false);
  }
  async onConnected(args) {
    if (args.isInProfileView) {
      return;
    }
    const { chainNamespace, chainId, address: newAddress } = ParseUtil.parseCaipAddress(args.caipAddress);
    const caipNetworkId = `${chainNamespace}:${chainId}`;
    const wasPreviouslyDisconnected = !CoreHelperUtil.getPlainAddress(this.caipAddress);
    const sessions = await SIWXUtil.getSessions({ address: newAddress, caipNetworkId });
    const isAuthenticated = SIWXUtil.getSIWX() ? sessions.some((s) => s.data.accountAddress === newAddress) : true;
    const shouldGoBack = args.isSwitchingNamespace && isAuthenticated && !this.enableEmbedded;
    const shouldCloseEmbeddedModal = this.enableEmbedded && wasPreviouslyDisconnected;
    if (shouldGoBack) {
      RouterController.goBack();
    } else if (shouldCloseEmbeddedModal) {
      ModalController.close();
    }
  }
  onNewNetwork(nextCaipNetwork) {
    var _a, _b, _c;
    const prevCaipNetwork = this.caipNetwork;
    const prevCaipNetworkId = (_a = prevCaipNetwork == null ? void 0 : prevCaipNetwork.caipNetworkId) == null ? void 0 : _a.toString();
    const prevChainNamespace = prevCaipNetwork == null ? void 0 : prevCaipNetwork.chainNamespace;
    const nextNetworkId = (_b = nextCaipNetwork == null ? void 0 : nextCaipNetwork.caipNetworkId) == null ? void 0 : _b.toString();
    const nextChainNamespace = nextCaipNetwork == null ? void 0 : nextCaipNetwork.chainNamespace;
    const networkIdChanged = prevCaipNetworkId !== nextNetworkId;
    const namespaceChanged = prevChainNamespace !== nextChainNamespace;
    const isNetworkChangedInSameNamespace = networkIdChanged && !namespaceChanged;
    const wasUnsupportedNetwork = (prevCaipNetwork == null ? void 0 : prevCaipNetwork.name) === ConstantsUtil.UNSUPPORTED_NETWORK_NAME;
    const isConnectingExternal = RouterController.state.view === "ConnectingExternal";
    const isInProfileWalletsView = RouterController.state.view === "ProfileWallets";
    const isNotConnected = !((_c = ChainController.getAccountData(nextCaipNetwork == null ? void 0 : nextCaipNetwork.chainNamespace)) == null ? void 0 : _c.caipAddress);
    const isUnsupportedNetworkScreen = RouterController.state.view === "UnsupportedChain";
    const isModalOpen = ModalController.state.open;
    let shouldGoBack = false;
    if (this.enableEmbedded && RouterController.state.view === "SwitchNetwork") {
      shouldGoBack = true;
    }
    if (networkIdChanged) {
      SwapController.resetState();
    }
    if (isModalOpen && !isConnectingExternal && !isInProfileWalletsView) {
      if (isNotConnected) {
        if (networkIdChanged) {
          shouldGoBack = true;
        }
      } else if (isUnsupportedNetworkScreen) {
        shouldGoBack = true;
      } else if (isNetworkChangedInSameNamespace && !wasUnsupportedNetwork) {
        shouldGoBack = true;
      }
    }
    if (shouldGoBack && RouterController.state.view !== "SIWXSignMessage") {
      RouterController.goBack();
    }
    this.caipNetwork = nextCaipNetwork;
  }
  prefetch() {
    if (!this.hasPrefetched) {
      ApiController.prefetch();
      ApiController.fetchWalletsByPage({ page: 1 });
      this.hasPrefetched = true;
    }
  }
}
W3mModalBase.styles = styles$2;
__decorate$2([
  n({ type: Boolean })
], W3mModalBase.prototype, "enableEmbedded", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "open", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "caipAddress", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "caipNetwork", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "shake", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "filterByNamespace", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "padding", void 0);
__decorate$2([
  r()
], W3mModalBase.prototype, "mobileFullScreen", void 0);
let W3mModal = class W3mModal2 extends W3mModalBase {
};
W3mModal = __decorate$2([
  customElement("w3m-modal")
], W3mModal);
let AppKitModal = class AppKitModal2 extends W3mModalBase {
};
AppKitModal = __decorate$2([
  customElement("appkit-modal")
], AppKitModal);
const styles$1 = css`
  :host {
    width: 100%;
  }
`;
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let W3mListWallet = class W3mListWallet2 extends i {
  constructor() {
    super(...arguments);
    this.hasImpressionSent = false;
    this.walletImages = [];
    this.imageSrc = "";
    this.name = "";
    this.size = "md";
    this.tabIdx = void 0;
    this.disabled = false;
    this.showAllWallets = false;
    this.loading = false;
    this.loadingSpinnerColor = "accent-100";
    this.rdnsId = "";
    this.displayIndex = void 0;
    this.walletRank = void 0;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupIntersectionObserver();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("name") || changedProperties.has("imageSrc") || changedProperties.has("walletRank")) {
      this.hasImpressionSent = false;
    }
    const hasWalletRankChanged = changedProperties.has("walletRank") && this.walletRank;
    if (hasWalletRankChanged && !this.intersectionObserver) {
      this.setupIntersectionObserver();
    }
  }
  setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.loading && !this.hasImpressionSent) {
          this.sendImpressionEvent();
        }
      });
    }, { threshold: 0.1 });
    this.intersectionObserver.observe(this);
  }
  cleanupIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
  }
  sendImpressionEvent() {
    if (!this.name || this.hasImpressionSent || !this.walletRank) {
      return;
    }
    this.hasImpressionSent = true;
    if (this.rdnsId || this.name) {
      EventsController.sendWalletImpressionEvent({
        name: this.name,
        walletRank: this.walletRank,
        rdnsId: this.rdnsId,
        view: RouterController.state.view,
        displayIndex: this.displayIndex
      });
    }
  }
  render() {
    return b`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${o(this.imageSrc)}
        name=${this.name}
        size=${o(this.size)}
        tagLabel=${o(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `;
  }
};
W3mListWallet.styles = styles$1;
__decorate$1([
  n({ type: Array })
], W3mListWallet.prototype, "walletImages", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "imageSrc", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "name", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "size", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tagLabel", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tagVariant", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "walletIcon", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "tabIdx", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "disabled", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "showAllWallets", void 0);
__decorate$1([
  n({ type: Boolean })
], W3mListWallet.prototype, "loading", void 0);
__decorate$1([
  n({ type: String })
], W3mListWallet.prototype, "loadingSpinnerColor", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "rdnsId", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "displayIndex", void 0);
__decorate$1([
  n()
], W3mListWallet.prototype, "walletRank", void 0);
W3mListWallet = __decorate$1([
  customElement("w3m-list-wallet")
], W3mListWallet);
const styles = css`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({ durations }) => durations["lg"]};
    --local-transition: ${({ easings }) => easings["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations["lg"]});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({ durations }) => durations["lg"]});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const HEADER_HEIGHT = 60;
let W3mRouterContainer = class W3mRouterContainer2 extends i {
  constructor() {
    super(...arguments);
    this.resizeObserver = void 0;
    this.transitionDuration = "0.15s";
    this.transitionFunction = "";
    this.history = "";
    this.view = "";
    this.setView = void 0;
    this.viewDirection = "";
    this.historyState = "";
    this.previousHeight = "0px";
    this.mobileFullScreen = OptionsController.state.enableMobileFullScreen;
    this.onViewportResize = () => {
      this.updateContainerHeight();
    };
  }
  updated(changedProps) {
    if (changedProps.has("history")) {
      const newHistory = this.history;
      if (this.historyState !== "" && this.historyState !== newHistory) {
        this.onViewChange(newHistory);
      }
    }
    if (changedProps.has("transitionDuration")) {
      this.style.setProperty("--local-duration", this.transitionDuration);
    }
    if (changedProps.has("transitionFunction")) {
      this.style.setProperty("--local-transition", this.transitionFunction);
    }
  }
  firstUpdated() {
    var _a;
    if (this.transitionFunction) {
      this.style.setProperty("--local-transition", this.transitionFunction);
    }
    this.style.setProperty("--local-duration", this.transitionDuration);
    this.historyState = this.history;
    this.resizeObserver = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        if (entry.target === this.getWrapper()) {
          let newHeight = entry.contentRect.height;
          const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height") || "0");
          if (this.mobileFullScreen) {
            const viewportHeight = ((_a2 = window.visualViewport) == null ? void 0 : _a2.height) || window.innerHeight;
            const headerHeight = this.getHeaderHeight();
            newHeight = viewportHeight - headerHeight - footerHeight;
            this.style.setProperty("--local-border-bottom-radius", "0px");
          } else {
            const totalHeight = newHeight + footerHeight;
            newHeight = totalHeight;
            this.style.setProperty("--local-border-bottom-radius", footerHeight ? "var(--apkt-borderRadius-5)" : "0px");
          }
          this.style.setProperty("--local-container-height", `${newHeight}px`);
          if (this.previousHeight !== "0px") {
            this.style.setProperty("--local-duration-height", this.transitionDuration);
          }
          this.previousHeight = `${newHeight}px`;
        }
      }
    });
    this.resizeObserver.observe(this.getWrapper());
    this.updateContainerHeight();
    window.addEventListener("resize", this.onViewportResize);
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", this.onViewportResize);
  }
  disconnectedCallback() {
    var _a;
    const wrapper = this.getWrapper();
    if (wrapper && this.resizeObserver) {
      this.resizeObserver.unobserve(wrapper);
    }
    window.removeEventListener("resize", this.onViewportResize);
    (_a = window.visualViewport) == null ? void 0 : _a.removeEventListener("resize", this.onViewportResize);
  }
  render() {
    return b`
      <div class="container" data-mobile-fullscreen="${o(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${o(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
  onViewChange(history) {
    const historyArr = history.split(",").filter(Boolean);
    const prevArr = this.historyState.split(",").filter(Boolean);
    const prevLength = prevArr.length;
    const newLength = historyArr.length;
    const newView = historyArr[historyArr.length - 1] || "";
    const duration = UiHelperUtil.cssDurationToNumber(this.transitionDuration);
    let direction = "";
    if (newLength > prevLength) {
      direction = "next";
    } else if (newLength < prevLength) {
      direction = "prev";
    } else if (newLength === prevLength && historyArr[newLength - 1] !== prevArr[prevLength - 1]) {
      direction = "next";
    }
    this.viewDirection = `${direction}-${newView}`;
    setTimeout(() => {
      var _a;
      this.historyState = history;
      (_a = this.setView) == null ? void 0 : _a.call(this, newView);
    }, duration);
    setTimeout(() => {
      this.viewDirection = "";
    }, duration * 2);
  }
  getWrapper() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("div.page");
  }
  updateContainerHeight() {
    var _a;
    const wrapper = this.getWrapper();
    if (!wrapper) {
      return;
    }
    const footerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height") || "0");
    let newHeight = 0;
    if (this.mobileFullScreen) {
      const viewportHeight = ((_a = window.visualViewport) == null ? void 0 : _a.height) || window.innerHeight;
      const headerHeight = this.getHeaderHeight();
      newHeight = viewportHeight - headerHeight - footerHeight;
      this.style.setProperty("--local-border-bottom-radius", "0px");
    } else {
      newHeight = wrapper.getBoundingClientRect().height + footerHeight;
      this.style.setProperty("--local-border-bottom-radius", footerHeight ? "var(--apkt-borderRadius-5)" : "0px");
    }
    this.style.setProperty("--local-container-height", `${newHeight}px`);
    if (this.previousHeight !== "0px") {
      this.style.setProperty("--local-duration-height", this.transitionDuration);
    }
    this.previousHeight = `${newHeight}px`;
  }
  getHeaderHeight() {
    return HEADER_HEIGHT;
  }
};
W3mRouterContainer.styles = [styles];
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "transitionDuration", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "transitionFunction", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "history", void 0);
__decorate([
  n({ type: String })
], W3mRouterContainer.prototype, "view", void 0);
__decorate([
  n({ attribute: false })
], W3mRouterContainer.prototype, "setView", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "viewDirection", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "historyState", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "previousHeight", void 0);
__decorate([
  r()
], W3mRouterContainer.prototype, "mobileFullScreen", void 0);
W3mRouterContainer = __decorate([
  customElement("w3m-router-container")
], W3mRouterContainer);
export {
  AppKitModal,
  W3mListWallet,
  W3mModal,
  W3mModalBase,
  W3mRouterContainer
};
