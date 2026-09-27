import { createContext, createElement } from 'preact'
import { useCallback, useContext, useEffect, useMemo, useState } from 'preact/hooks'
import { IntlProvider, Text } from 'preact-i18n'
import { tariMessages } from '../tari/messages.js'
import { getTelegramWebApp } from '../lib/telegram.js'

export const LANGUAGE_OPTIONS = [
  { code: 'bn', label: 'বাংলা' },
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' }
]

const english = {
  tari: tariMessages,
  language: { label: 'Language', automatic: 'Automatic', saved: 'Language saved', preferences: 'Preferences', hint: 'Choose the language used across Outruna.' },
  security: { twoFactor: '2FA', twoFactorDescription: 'Protect wallet transactions with 2FA.', enabled: 'Enabled', disabled: 'Disabled', enableTwoFactor: 'Enable 2FA', manageTwoFactor: 'Manage 2FA' },
  auth: {
    eyebrow: 'Embedded Wallet (Privy)',
    preparing: 'Preparing authentication',
    preparingDescription: 'Setting up your secure wallet experience.',
    opening: 'Opening wallet',
    openingDescription: 'Preparing your wallet and syncing your account.',
    unable: 'Unable to open wallet',
    title: 'Outruna',
    telegramDescription: 'Open your embedded EVM wallet securely with Telegram.',
    browserDescription: 'Sign in to open your embedded EVM wallet.',
    continueTelegram: 'Continue With Telegram',
    continueEmail: 'Continue With Email',
    retryTelegram: 'Retry With Telegram',
    signOut: 'Sign Out',
    loading: 'Loading'
  },
  nav: { wallet: 'Wallet', swap: 'Swap', p2p: 'P2P', gas: 'Gas', more: 'More', sections: 'Wallet sections' },
  common: {
    close: 'Close',
    copy: 'Copy',
    copied: 'Copied',
    refresh: 'Refresh',
    selected: 'Selected',
    cancel: 'Cancel',
    continue: 'Continue',
    save: 'Save',
    send: 'Send',
    withdraw: 'Withdraw',
    deposit: 'Deposit',
    history: 'History',
    unknown: 'Unknown',
    unavailable: 'Unavailable',
    none: 'None',
    loading: 'Loading...',
    noResults: 'No results found',
    version: 'Version',
    sourceCode: 'Source code',
    disconnect: 'Disconnect',
    processing: 'Processing...',
    explorer: 'Explorer',
    max: 'Max',
    copyExplorerLink: 'Copy explorer link',
    expand: 'Expand',
    collapse: 'Collapse',
    asset: 'asset',
    searchTokenOrChain: 'Search token or chain',
    searchToken: 'Search token',
    selectNetwork: 'Select network',
    selectToken: 'Select token',
    closePicker: 'Close token picker',
    quoting: 'Quoting...',
    swapping: 'Swapping...'
  },
  wallet: {
    portfolio: 'Total portfolio value',
    assets: 'My Assets',
    customToken: 'Custom token',
    addCustomToken: 'Add a custom token',
    hideSmallBalances: 'Hide small balances',
    showSmallBalances: 'Show small balances',
    noBalances: 'No visible balances on this chain.',
    noBalancesHint: 'Toggle small balances or switch network.',
    switchNetwork: 'Switch network',
    supportedNetworks: 'Supported networks',
    accountHistory: 'Open account history',
    copyAddress: 'Copy wallet address',
    refreshBalances: 'Refresh balances',
    details: 'Details',
    address: 'Address',
    chain: 'Chain',
    chainId: 'Chain ID',
    walletType: 'Wallet type',
    accountSource: 'Account source',
    linkedWallets: 'Linked wallets',
    telegramUser: 'Telegram user',
    telegramStatus: 'Telegram status',
    tokenDetails: 'Token details',
    network: 'Network',
    symbol: 'Symbol',
    decimals: 'Decimals',
    type: 'Type',
    nativeAsset: 'Native asset',
    erc20: 'ERC-20 token',
    price: 'Price',
    priceUnavailable: 'Price unavailable',
    updatePrice: 'Update price',
    updatingPrice: 'Updating...',
    updateLogo: 'Update logo',
    copyContract: 'Copy contract',
    removeCustomToken: 'Remove custom token',
    contract: 'Contract',
    contractWarning: 'Review this contract carefully before sending or approving transactions.',
    nativeNote: 'This is the native gas asset for {{chain}}.',
    embeddedWalletLabel: 'Embedded Wallet (Privy)',
    connectedWallet: 'Connected Wallet',
    telegramVerified: 'Verified',
    telegramVerifying: 'Verifying',
    telegramError: 'Error',
    telegramLinked: 'Linked',
    telegramNotPresent: 'Not present'
  },
  gas: {
    title: 'Gas Account',
    description: 'User-funded gas payments for Outruna transfers.',
    embeddedWallet: 'Embedded Wallet',
    mode: 'Mode',
    walletType: 'Wallet type',
    latestSend: 'Latest send',
    latestAction: 'Latest action ID',
    account: 'Account',
    balance: 'Balance',
    howItWorks: 'How it works',
    topUp: 'Top up',
    selectNetwork: 'Select network',
    selectToken: 'Select token',
    topUpNetworksUnavailable: 'Gas Account top-up networks are unavailable.',
    switchNetworkStablecoin: 'Switch network or add a supported stablecoin.',
    amount: 'Amount',
    walletBalance: 'Wallet balance',
    gasDeposit: 'Gas Deposit',
    reportTopUp: 'Report existing top-up tx',
    transactionHash: 'Transaction hash',
    yourWallet: 'Your Wallet',
    refreshDestinations: 'Refresh Gas Account to load destinations.',
    selectDestination: 'Select another destination or refresh Gas Account.',
    connect: 'Connect Gas Account',
    refreshBalance: 'Refresh balance',
    topUpButton: 'Top up Gas Account',
    withdrawMax: 'Withdraw max',
    fee: 'Fee',
    limit: 'Limit',
    latestCheck: 'Latest eligibility check',
    total: 'Total',
    gas: 'Gas',
    gasAccount: 'Gas Account',
    copyDepositAddress: 'Copy Gas Deposit Address',
    reportTransaction: 'Report existing top-up transaction',
    transactionHashPlaceholder: '0x transaction hash',
    noTopUpNetworks: 'Gas Account top-up networks are unavailable.',
    noTopUpTokens: 'Switch network or add a supported stablecoin.',
    noDestinations: 'Refresh Gas Account to load destinations.',
    noDestinationOptions: 'Select another destination or refresh Gas Account.',
    rateLimitedCached: 'Gas Account service is rate limiting requests. Showing cached data.',
    transactions: 'Transactions',
    supportedToken: 'supported token',
    supportedTokens: 'supported tokens',
    supportedChain: 'supported network',
    supportedChains: 'supported networks',
    eligibilityDescription: 'Outruna checks Gas Account eligibility, asks the Embedded Wallet to sign the transaction, then submits it.',
    hostedService: 'This uses hosted Gas Account services.',
    connected: 'Connected',
    connectedMessage: 'Gas Account connected.',
    signatureRequired: 'Signature required',
    notConnected: 'Not connected',
    network: 'Network',
    token: 'Token',
    destination: 'Destination',
    chooseTopUpNetwork: 'Choose top-up network',
    chooseStablecoin: 'Choose stablecoin',
    noTopUpNetwork: 'No top-up network',
    noSupportedTopUpToken: 'No supported top-up token',
    depositAddressNotConfigured: 'Deposit address not configured',
    withdrawTo: 'Withdraw to',
    embeddedWalletDestination: 'Embedded Wallet destination',
    noWalletDestination: 'No wallet destination',
    chooseWithdrawNetwork: 'Choose withdraw network',
    noWithdrawNetwork: 'No withdraw network',
    enoughBalance: 'Enough balance',
    notUsable: 'Not usable',
    supportsTransaction: 'Gas Account supports this transaction.',
    doesNotSupportTransaction: 'Gas Account does not support this transaction.',
    status: {
      idle: 'Idle',
      rabby_signing: 'Signing',
      rabby_submitting: 'Submitting',
      rabby_submitted: 'Submitted'
    }
  },
  swap: {
    title: 'Swap',
    unavailable: 'Swaps are not available on this network.',
    supportedChainHint: 'Switch to a supported EVM chain.',
    noTokens: 'No held tokens available to swap.',
    depositFirst: 'Deposit to the Wallet first.',
    reverse: 'Reverse swap pair',
    youPay: 'You pay',
    youReceive: 'You receive',
    balance: 'Balance {{amount}} {{symbol}}',
    balanceAmount: 'Balance {{amount}}',
    unknownToken: 'Unknown token',
    customNotice: 'To swap a custom token, add it to your wallet first.',
    route: 'Route',
    autoRoute: 'Auto - best available',
    choosePay: 'Choose token to pay',
    chooseReceive: 'Choose token to receive',
    amount: 'Amount',
    exchange: 'Exchange',
    estimatedOutput: 'Estimated output',
    minimumReceived: 'Minimum received',
    outrunaFee: 'Outruna fee',
    estimatedUsd: 'Estimated USD',
    minimumUsd: 'Minimum USD',
    status: 'Status',
    transactionHash: 'Transaction hash',
    getQuote: 'Get quote',
    chooseToken: 'Choose token',
    searchToken: 'Search token',
    noTokensFound: 'No tokens found',
    tryAnother: 'Try another symbol or name.',
    closePicker: 'Close token picker',
    succeeded: 'Succeeded',
    idle: 'Idle',
    selectToken: 'Select token',
    selectTokens: 'Select swap tokens'
  },
  deposit: {
    title: 'Deposit Crypto',
    eyebrow: 'Deposit',
    close: 'Close deposit sheet',
    subtitle: 'Follow the steps below to deposit.',
    scan: 'Scan QR code',
    scanDescription: 'Open your wallet app & scan the code to get address.',
    qr: 'Deposit QR code',
    fallbackQr: 'QR',
    copyTitle: 'Or copy wallet address',
    copyDescription: 'Paste this address in your wallet & send your crypto.',
    copied: 'Copied!',
    networks: 'Works on all supported networks',
    supportedNetworks: 'Supported networks',
    safety: 'Only send supported assets on the networks shown above.'
  },
  withdraw: {
    title: 'Send from wallet',
    subtitle: 'Withdraw assets from your wallet',
    close: 'Close withdraw sheet',
    amount: 'Amount',
    destination: 'Destination',
    gasMode: 'Gas mode',
    speed: 'Speed',
    customGwei: 'Custom gwei',
    destinationPlaceholder: '0x...',
    amountPlaceholder: '10.0',
    customGweiPlaceholder: '1.5',
    prepare: 'Prepare',
    fundGas: 'Fund gas',
    confirm: 'Confirm',
    sendAsset: 'Send {{asset}}',
    gasAccount: 'Gas Account',
    nativeGas: 'Native gas',
    standard: 'Standard',
    fast: 'Fast',
    instant: 'Instant',
    custom: 'Custom',
    sending: 'Sending...',
    asset: 'Asset',
    chooseBalance: 'Choose a balance on this network',
    noBalance: 'No balance available',
    depositFunds: 'Deposit funds on this network first.',
    checkingGasCoverage: 'Checking Gas Account coverage...',
    approveInWallet: 'Approve the transaction in your wallet...',
    fundingNetworkGas: 'Funding network gas before sending {{asset}}...',
    waitingTransferConfirmation: 'Waiting for the {{asset}} transfer to confirm...',
    transferConfirmed: 'Transfer confirmed onchain.',
    transferFailed: 'Transfer failed.',
    preparingTransaction: 'Preparing transaction...',
    gasAccountHint: 'Uses wallet gas when available; Gas Account funds gas only when native gas balance is insufficient.',
    nativeGasHint: 'Wallet pays gas directly in {{symbol}}.',
    estimatedFee: 'Estimated fee: ~{{amount}}'
  },
  customToken: {
    title: 'Add token',
    subtitle: 'Add a custom token to your wallet',
    close: 'Close custom token sheet',
    trustTitle: 'Only add tokens you trust',
    trustDescription: 'Anyone can create a token with a familiar name or symbol. Check the contract on the block explorer before adding it. You are responsible for verifying the token.',
    contractAddress: 'Contract address',
    reviewTitle: 'Review this token carefully',
    unsafeAcknowledgement: 'I checked the contract & understand this token may be unsafe.',
    lookup: 'On-chain lookup',
    token: 'Token',
    name: 'Name',
    tokenName: 'Token name',
    symbol: 'Symbol',
    decimals: 'Decimals',
    add: 'Add token'
  },
  p2p: {
    opening: 'Opening P2P exchange...',
    eyebrow: 'P2P exchange',
    title: 'Sell stablecoins for fiat',
    description: 'Send a supported stablecoin. An operator verifies it & sends the payout to your bank.',
    limit: 'From $50 to $150',
    amountRange: 'From $' + '{{minimum}} to $' + '{{maximum}}',
    approximateReceive: 'Approximate receive: {{amount}} RUB',
    howItWorks: 'How P2P works',
    createInvoice: 'Create invoice',
    sendCrypto: 'Send crypto',
    receiveFiat: 'Receive fiat',
    invoiceAmount: 'Invoice amount',
    depositAddress: 'Deposit address',
    copyInvoice: 'Copy invoice address',
    tokenContract: 'Token contract',
    copyContract: 'Copy token contract',
    openContract: 'Open token contract in explorer',
    operatorNotice: 'Send only {{symbol}} on {{chain}}. The operator is notified only after the exact deposit is verified.',
    cryptoReceived: 'Crypto received',
    payoutWithOperator: 'Your payout to {{target}} is now with the operator.',
    chooseSend: 'Choose what to send',
    stablecoinValue: 'Stablecoins are valued at $1 for this payout.',
    chooseNetwork: 'Choose where you will send the stablecoin',
    choosePayout: 'Choose your payout',
    encrypted: 'These details are encrypted & shown only to the operator.',
    bankName: 'Bank name',
    yourBank: 'Your bank',
    decimals: 'decimals',
    maxAmount: 'Maximum $150',
    bankCard: 'Bank card',
    phone: 'Phone',
    cardNumber: 'Card number',
    phoneNumber: 'Phone number',
    securityNotice: 'Never enter a PIN, CVV, expiry date, password, or verification code.',
    recentOrders: 'Recent orders',
    refreshOrders: 'Refresh P2P orders',
    empty: 'No P2P orders yet.',
    depositDetected: 'Deposit detected',
    paymentSubmitted: 'Payment submitted',
    exactDepositDetected: 'Exact deposit detected',
    depositMismatch: 'Deposit amount does not match',
    checkingBalance: 'Checking invoice balance',
    balanceUnavailable: 'Balance check unavailable',
    waitingExactDeposit: 'Waiting for exact deposit',
    readyToCollect: 'Your stablecoin is ready to collect and send for payout.',
    mismatchHelp: 'The invoice contains more than expected. Contact support before continuing.',
    retryingRpc: 'RPC providers are temporarily unavailable. Retrying automatically.',
    lookingFor: 'Looking for exactly {{amount}} {{symbol}}.',
    requestPayout: 'Request fiat payout',
    requestingPayout: 'Requesting payout...',
    processingTransfer: 'Processing transfer...',
    sendFromWallet: 'Send from wallet',
    checkingDeposit: 'Checking deposit...',
    checkDeposit: 'Check deposit',
    backToP2p: 'Back to P2P',
    createAnother: 'Create another invoice',
    done: 'Done',
    createInvoiceButton: 'Create deposit invoice',
    creatingInvoice: 'Creating invoice...',
    waitingDeposit: 'Waiting for deposit',
    verifyingDeposit: 'Verifying deposit',
    payoutPending: 'Payout pending',
    completed: 'Completed',
    cancelled: 'Cancelled',
    needsAttention: 'Needs attention'
  },
  risk: {
    close: 'Close risk dialog',
    title: 'Transaction risk',
    subtitle: 'Review the risks before you continue',
    summary: 'This transaction may involve risks to your funds or assets. Only continue if you understand what may happen.',
    whatCouldGoWrong: 'What could go wrong?',
    confirmation: 'I understand the risks and want to continue.',
    goBack: 'Go back',
    continueAnyway: 'Continue anyway',
    checking: 'Checking transaction...',
    checkingDescription: 'Running a transaction risk check before sending.',
    noReason: 'No detailed reason returned.',
    blocked: 'This transaction was blocked by the risk engine.',
    acknowledged: 'Address risk acknowledged',
    sendingBlocked: 'Sending to this address is blocked.',
    checkingAddress: 'Checking address reputation...',
    unavailableAddress: 'Risk check unavailable. Double-check the address before sending.',
    previousTransfer: 'Previous transfer found',
    acknowledgeAddress: 'I understand the address risk',
    acknowledgeTransaction: 'I understand the transaction risk',
    continueSend: 'Continue to send',
    unknownAddress: 'Unknown address. Reputation data not found.'
  },
  messages: {
    invoiceReady: 'Invoice ready. Send the exact stablecoin amount to continue.',
    checkingDeposit: 'Checking the exact stablecoin deposit...',
    confirmCollection: 'Confirm deposit collection in your wallet.',
    settlementConfirmed: 'Settlement confirmed onchain. Notifying the payout operator...',
    depositVerified: 'Deposit verified. The operator has received your payout instructions.',
    verifyingAddress: 'Verifying the invoice address...',
    confirmTransfer: 'Confirm the stablecoin transfer in your wallet.',
    transferConfirmed: 'Transfer confirmed onchain. Checking the invoice balance...',
    unableLoadP2p: 'Unable to load P2P.',
    unableCreateP2p: 'Unable to create P2P order.',
    unableVerifyDeposit: 'Unable to verify the deposit.',
    unableSendTransfer: 'Unable to send the stablecoin transfer.',
    unableVerifyInvoice: 'Unable to verify the invoice.'
  }
}

const tariTextOverrides = {
  bn: {
    tari: {
      name: 'তারি', network: 'তারি মেইননেট', symbol: 'XTM', title: 'তারি ওয়ালেট',
      settingsDescription: 'এনক্রিপ্টেড ফাইল ব্যাকআপ এবং লোকাল ওয়ালেট সঞ্চয়', notInitialized: 'শুরু করা হয়নি',
      preparing: 'তারি ওয়ালেট প্রস্তুত হচ্ছে...', create: 'তারি ওয়ালেট তৈরি করুন',
      backupExported: 'ব্যাকআপ এক্সপোর্ট করা হয়েছে', backupMissing: 'ব্যাকআপ এক্সপোর্ট করা হয়নি',
      backupWarning: 'তারি ওয়ালেটের ব্যাকআপ এখনো এক্সপোর্ট করা হয়নি',
      backupWarningBody: 'আপনার ওয়ালেটের ব্যাকআপ এখনো এক্সপোর্ট করা হয়নি। এই ডিভাইসে প্রবেশাধিকার হারালে আপনি আপনার তহবিল হারাতে পারেন।',
      export: 'এনক্রিপ্টেড ব্যাকআপ এক্সপোর্ট করুন', import: 'ব্যাকআপ ইমপোর্ট করুন', importExisting: 'বিদ্যমান ব্যাকআপ ইমপোর্ট করুন',
      exportTitle: 'তারি ব্যাকআপ এক্সপোর্ট করুন', exportDescription: 'অন্য ডিভাইসে আপনার XTM ওয়ালেট পুনরুদ্ধার করতে পারে এমন একটি এনক্রিপ্টেড ফাইল তৈরি করুন।',
      password: 'ব্যাকআপ পাসওয়ার্ড', confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন', showPassword: 'পাসওয়ার্ড দেখুন',
      passwordNotice: 'Outruna এই পাসওয়ার্ড রিসেট করতে পারে না এবং আপনার তারি ব্যাকআপের কোনো কপি রাখে না।',
      passwordLength: 'ব্যাকআপ পাসওয়ার্ডে অন্তত ১২টি অক্ষর ব্যবহার করুন।', passwordMismatch: 'পাসওয়ার্ডগুলি হুবহু মিলতে হবে।',
      download: 'এনক্রিপ্টেড ব্যাকআপ ডাউনলোড করুন', encrypting: 'ব্যাকআপ এনক্রিপ্ট হচ্ছে...', decrypting: 'ব্যাকআপ ডিক্রিপ্ট হচ্ছে...',
      chooseFile: 'ব্যাকআপ ফাইল নির্বাচন করুন', creationDate: 'ব্যাকআপ তৈরির তারিখ', restore: 'তারি ওয়ালেট পুনরুদ্ধার করুন',
      decryptError: 'এই ব্যাকআপটি ডিক্রিপ্ট করা যায়নি। ফাইল এবং পাসওয়ার্ড পরীক্ষা করুন।',
      invalidBackup: 'সমর্থিত নয় বা অবৈধ তারি ব্যাকআপ ফাইল। ২৫৬ KiB-এর কম আকারের ভার্সন ১ মেইননেট ব্যাকআপ নির্বাচন করুন।',
      replaceTitle: 'এই ডিভাইসের তারি ওয়ালেট প্রতিস্থাপন করবেন?',
      replaceWarning: 'ইমপোর্ট করা ব্যাকআপ ভিন্ন একটি তারি ওয়ালেটের। বর্তমান ওয়ালেটটি এই ডিভাইস থেকে সরিয়ে ফেলা হবে। প্রথমে এর ব্যাকআপ এক্সপোর্ট করেছেন কিনা নিশ্চিত করুন।',
      current: 'বর্তমান', imported: 'ইমপোর্ট করা', replace: 'ওয়ালেট প্রতিস্থাপন করুন',
      remove: 'এই ডিভাইস থেকে সরান', removeTitle: 'এই ডিভাইস থেকে তারি ওয়ালেট সরাবেন?',
      removeWarning: 'এই তারি ওয়ালেট পুনরুদ্ধার করতে আপনার এনক্রিপ্টেড ব্যাকআপ ফাইল এবং এর পাসওয়ার্ড প্রয়োজন হবে।',
      removeUnbacked: 'কোনো তারি ব্যাকআপ এক্সপোর্ট করা হয়নি। এই ওয়ালেট সরালে এতে রাখা যেকোনো XTM-এ স্থায়ীভাবে প্রবেশাধিকার হারাতে পারেন।',
      sessionOnly: 'এই ব্রাউজারটি আপনার তারি ওয়ালেট সেশনের মধ্যে সুরক্ষিতভাবে রাখতে পারে না। Outruna বন্ধ করার আগে একটি এনক্রিপ্টেড ব্যাকআপ ডাউনলোড করুন।',
      storageError: 'এনক্রিপ্টেড তারি স্টোরেজ অ্যাক্সেস করা যায়নি। বিদ্যমান ওয়ালেট তথ্য মোছা হয়নি। আবার চেষ্টা করুন বা আপনার ব্যাকআপ পুনরুদ্ধার করুন।',
      storageUnavailable: 'এই ব্রাউজারে নিরাপদ ডিভাইস স্টোরেজ পাওয়া যাচ্ছে না।',
      accountError: 'আপনার তারি ওয়ালেট অ্যাক্সেস করতে সাইন ইন করুন।', otherTab: 'তারি অন্য ট্যাবে খোলা আছে। এখানে আবার খোলার আগে সেটি বন্ধ করুন।',
      wasmError: 'তারি স্বাক্ষর সফটওয়্যার লোড করা যায়নি। আপনার ব্রাউজার ডেটা মুছে না ফেলে আবার চেষ্টা করুন।',
      receive: 'XTM জমা করুন', receiveSubtitle: 'তারি মেইননেটে XTM গ্রহণ করুন', qr: 'তারি ঠিকানার QR কোড',
      receiveNotice: 'শুধু তারি মেইননেটে এই ঠিকানায় XTM পাঠান। অন্য অ্যাসেট বা অন্য নেটওয়ার্ক থেকে তহবিল পাঠালে সেগুলি স্থায়ীভাবে হারাতে পারে।',
      receiveBackup: 'তহবিল জমা দেওয়ার আগে আপনার ব্যাকআপ এক্সপোর্ট করুন।', address: 'তারি ঠিকানা', addressCopied: 'ঠিকানা কপি করা হয়েছে',
      send: 'XTM পাঠান', recipient: 'প্রাপকের ঠিকানা', recipientPlaceholder: 'তারি ঠিকানা লিখুন...', amount: 'পরিমাণ',
      available: 'উপলব্ধ ব্যালেন্স', locked: 'লক করা ব্যালেন্স', pendingBalance: 'অমীমাংসিত ফেরত',
      fee: 'নেটওয়ার্ক ফি', total: 'মোট', review: 'লেনদেন পর্যালোচনা করুন', confirmSend: 'নিশ্চিত করে পাঠান', back: 'ফিরে যান',
      invalidAddress: 'একটি বৈধ তারি মেইননেট ঠিকানা লিখুন।', singleAddress: 'এই তারি ঠিকানাটি একতরফা পেমেন্ট গ্রহণ করতে পারে না।',
      invalidAmount: 'শূন্যের চেয়ে বেশি এবং ৬টি দশমিক স্থানের বেশি নয় এমন পরিমাণ লিখুন।', insufficient: 'নেটওয়ার্ক ফি সহ পর্যাপ্ত ব্যয়যোগ্য ব্যালেন্স নেই।',
      feeChanged: 'লেনদেনের ফি বা ইনপুট পরিবর্তিত হয়েছে। লেনদেনটি আবার পর্যালোচনা করুন।',
      syncRequired: 'পাঠানোর আগে তারি সিঙ্ক করুন। রিফ্রেশ করে লেনদেনটি আবার পর্যালোচনা করুন।',
      signing: 'লেনদেন স্বাক্ষর এবং জমা হচ্ছে...', sent: 'লেনদেন জমা হয়েছে। নিশ্চিতকরণের অপেক্ষায়।',
      rejected: 'তারি নোড লেনদেনটি প্রত্যাখ্যান করেছে। আপনার ইনপুটগুলি উপলব্ধ থেকে গেছে।',
      broadcastUnknown: 'জমা নিশ্চিত করা যায়নি। ডাবল স্পেন্ড প্রতিরোধ করতে ইনপুটগুলি সংরক্ষিত রয়েছে। অন্য পাঠানোর আগে নিশ্চিতকরণ পরীক্ষা করতে সিঙ্ক করুন।',
      syncing: 'তারি সিঙ্ক হচ্ছে...', synced: 'তারি সিঙ্ক হয়েছে', syncError: 'তারি সিঙ্ক করা যায়নি', unknown: 'ব্যালেন্স অজানা', retry: 'আবার চেষ্টা করুন',
      rpcError: 'তারি RPC পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।', rpcData: 'অসম্পূর্ণ বা অবৈধ তারি প্রতিক্রিয়া। ব্যর্থ ব্লকটি স্ক্যান করা থেকে বাদ পড়েনি।',
      partialBlock: 'তারি সার্ভার একটি অসম্পূর্ণ ব্লক ফেরত দিয়েছে। স্ক্যানের অগ্রগতি সংরক্ষিত আছে। পরে আবার চেষ্টা করুন।',
      pruned: 'এই তারি নোডটি সম্পূর্ণ পুনরুদ্ধারের ইতিহাস দিতে পারছে না। আপনার ওয়ালেট মুছে না ফেলে পরে আবার চেষ্টা করুন।',
      workerError: 'তারি ওয়ার্কার পাওয়া যাচ্ছে না।', busy: 'বর্তমান কাজটি শেষ হওয়ার অপেক্ষা করুন।',
      history: 'তারি ইতিহাস', emptyHistory: 'এখনো কোনো তারি লেনদেন পাওয়া যায়নি।', in: 'প্রাপ্ত', out: 'পাঠানো',
      pending: 'অমীমাংসিত', confirmed: 'নিশ্চিত', failed: 'ব্যর্থ', height: 'মাইন করা উচ্চতা',
      details: 'তারি অ্যাসেটের বিবরণ', decimals: 'দশমিক', type: 'ধরন', nativeAsset: 'নেটিভ অ্যাসেট', price: 'মূল্য', sync: 'সিঙ্ক', backup: 'ব্যাকআপের অবস্থা',
      unavailable: 'প্রযোজ্য নয়', generalError: 'এই তারি কাজটি সম্পন্ন করা যায়নি। আপনার ওয়ালেট মুছে না ফেলে আবার চেষ্টা করুন।',
      localWarning: 'এনক্রিপ্টেড লোকাল স্টোরেজ শুধু এই ডিভাইসের জন্য। সাইট ডেটা মুছে ফেললে লোকাল প্রবেশাধিকার চলে যায়। আপনার এনক্রিপ্টেড ব্যাকআপ ফাইল এবং পাসওয়ার্ড রাখুন।',
      noSwaps: 'XTM সোয়াপ সমর্থিত নয়। সোয়াপ করতে একটি EVM নেটওয়ার্ক নির্বাচন করুন।'
    }
  },
  de: {
    tari: {
      name: 'Tari', network: 'Tari Mainnet', symbol: 'XTM', title: 'Tari Wallet',
      settingsDescription: 'Verschlüsselte Dateisicherung und lokale Wallet-Speicherung', notInitialized: 'Nicht initialisiert',
      preparing: 'Tari Wallet wird vorbereitet...', create: 'Tari Wallet erstellen',
      backupExported: 'Sicherung exportiert', backupMissing: 'Sicherung nicht exportiert',
      backupWarning: 'Tari Wallet-Sicherung noch nicht exportiert',
      backupWarningBody: 'Deine Wallet-Sicherung wurde noch nicht exportiert. Verlierst du den Zugriff auf dieses Gerät, kannst du deine Mittel verlieren.',
      export: 'Verschlüsselte Sicherung exportieren', import: 'Sicherung importieren', importExisting: 'Vorhandene Sicherung importieren',
      exportTitle: 'Tari Sicherung exportieren', exportDescription: 'Erstelle eine verschlüsselte Datei, mit der du deine XTM Wallet auf einem anderen Gerät wiederherstellen kannst.',
      password: 'Sicherungspasswort', confirmPassword: 'Passwort bestätigen', showPassword: 'Passwort anzeigen',
      passwordNotice: 'Outruna kann dieses Passwort nicht zurücksetzen und bewahrt keine Kopie deiner Tari Sicherung auf.',
      passwordLength: 'Verwende für das Sicherungspasswort mindestens 12 Zeichen.', passwordMismatch: 'Die Passwörter müssen exakt übereinstimmen.',
      download: 'Verschlüsselte Sicherung herunterladen', encrypting: 'Sicherung wird verschlüsselt...', decrypting: 'Sicherung wird entschlüsselt...',
      chooseFile: 'Sicherungsdatei auswählen', creationDate: 'Erstellungsdatum der Sicherung', restore: 'Tari Wallet wiederherstellen',
      decryptError: 'Diese Sicherung kann nicht entschlüsselt werden. Prüfe Datei und Passwort.',
      invalidBackup: 'Nicht unterstützte oder ungültige Tari Sicherungsdatei. Wähle eine Mainnet Sicherung der Version 1 unter 256 KiB.',
      replaceTitle: 'Tari Wallet auf diesem Gerät ersetzen?',
      replaceWarning: 'Die importierte Sicherung gehört zu einer anderen Tari Wallet. Die aktuelle Wallet wird von diesem Gerät entfernt. Stelle sicher, dass du zuerst deren Sicherung exportiert hast.',
      current: 'Aktuell', imported: 'Importiert', replace: 'Wallet ersetzen',
      remove: 'Von diesem Gerät entfernen', removeTitle: 'Tari Wallet von diesem Gerät entfernen?',
      removeWarning: 'Zum Wiederherstellen dieser Tari Wallet benötigst du die verschlüsselte Sicherungsdatei und deren Passwort.',
      removeUnbacked: 'Es wurde keine Tari Sicherung exportiert. Beim Entfernen dieser Wallet kannst du dauerhaft den Zugriff auf enthaltenes XTM verlieren.',
      sessionOnly: 'Dieser Browser kann deine Tari Wallet zwischen Sitzungen nicht sicher speichern. Lade vor dem Schließen von Outruna eine verschlüsselte Sicherung herunter.',
      storageError: 'Auf den verschlüsselten Tari Speicher kann nicht zugegriffen werden. Vorhandene Wallet-Daten wurden nicht entfernt. Versuche es erneut oder stelle deine Sicherung wieder her.',
      storageUnavailable: 'Sicherer Gerätespeicher ist in diesem Browser nicht verfügbar.',
      accountError: 'Melde dich an, um auf deine Tari Wallet zuzugreifen.', otherTab: 'Tari ist in einem anderen Tab geöffnet. Schließe ihn, bevor du ihn hier erneut öffnest.',
      wasmError: 'Die Tari Signier-Software kann nicht geladen werden. Versuche es erneut, ohne deine Browserdaten zu löschen.',
      receive: 'XTM einzahlen', receiveSubtitle: 'XTM auf Tari Mainnet empfangen', qr: 'QR-Code der Tari Adresse',
      receiveNotice: 'Sende nur XTM auf Tari Mainnet an diese Adresse. Andere Assets oder Mittel aus einem anderen Netzwerk können dauerhaft verloren gehen.',
      receiveBackup: 'Exportiere deine Sicherung, bevor du Mittel einzahlst.', address: 'Tari Adresse', addressCopied: 'Adresse kopiert',
      send: 'XTM senden', recipient: 'Empfängeradresse', recipientPlaceholder: 'Tari Adresse eingeben...', amount: 'Betrag',
      available: 'Verfügbares Guthaben', locked: 'Gesperrtes Guthaben', pendingBalance: 'Ausstehender Wechselbetrag',
      fee: 'Netzwerkgebühr', total: 'Gesamt', review: 'Transaktion prüfen', confirmSend: 'Bestätigen und senden', back: 'Zurück',
      invalidAddress: 'Gib eine gültige Tari Mainnet Adresse ein.', singleAddress: 'Diese Tari Adresse kann keine einseitigen Zahlungen empfangen.',
      invalidAmount: 'Gib einen Betrag über null mit höchstens 6 Nachkommastellen ein.', insufficient: 'Nicht genügend ausgabefähiges Guthaben einschließlich Netzwerkgebühr.',
      feeChanged: 'Die Transaktionsgebühr oder die Eingaben haben sich geändert. Prüfe die Transaktion erneut.',
      syncRequired: 'Synchronisiere Tari vor dem Senden. Aktualisiere und prüfe die Transaktion erneut.',
      signing: 'Transaktion wird signiert und eingereicht...', sent: 'Transaktion eingereicht. Warte auf Bestätigung.',
      rejected: 'Der Tari Knoten hat die Transaktion abgelehnt. Deine Eingaben bleiben verfügbar.',
      broadcastUnknown: 'Die Einreichung konnte nicht bestätigt werden. Eingaben bleiben reserviert, um einen doppelten Ausgabenversuch zu verhindern. Prüfe vor dem nächsten Senden per Synchronisierung.',
      syncing: 'Tari wird synchronisiert...', synced: 'Tari synchronisiert', syncError: 'Tari kann nicht synchronisiert werden', unknown: 'Guthaben unbekannt', retry: 'Erneut versuchen',
      rpcError: 'Tari RPC ist nicht verfügbar. Versuche es später erneut.', rpcData: 'Unvollständige oder ungültige Tari Antwort. Der fehlgeschlagene Block wurde beim Scan nicht übersprungen.',
      partialBlock: 'Der Tari Server hat einen unvollständigen Block zurückgegeben. Der Scanfortschritt bleibt erhalten. Versuche es später erneut.',
      pruned: 'Dieser Tari Knoten kann keine vollständige Wiederherstellungshistorie bereitstellen. Versuche es später erneut, ohne deine Wallet zu löschen.',
      workerError: 'Tari Worker ist nicht verfügbar.', busy: 'Warte, bis der aktuelle Vorgang abgeschlossen ist.',
      history: 'Tari Verlauf', emptyHistory: 'Noch keine Tari Transaktionen gefunden.', in: 'Empfangen', out: 'Gesendet',
      pending: 'Ausstehend', confirmed: 'Bestätigt', failed: 'Fehlgeschlagen', height: 'Geblockte Höhe',
      details: 'Tari Asset Details', decimals: 'Dezimalstellen', type: 'Typ', nativeAsset: 'Native Asset', price: 'Preis', sync: 'Synchronisierung', backup: 'Sicherungsstatus',
      unavailable: 'n. v.', generalError: 'Diese Tari Aktion konnte nicht abgeschlossen werden. Versuche es erneut, ohne deine Wallet zu löschen.',
      localWarning: 'Verschlüsselter lokaler Speicher gilt nur für dieses Gerät. Das Löschen von Websitedaten entfernt den lokalen Zugriff. Bewahre deine verschlüsselte Sicherungsdatei und deren Passwort auf.',
      noSwaps: 'XTM Swaps werden nicht unterstützt. Wähle zum Tauschen ein EVM Netzwerk.'
    }
  },
  es: {
    tari: {
      name: 'Tari', network: 'Tari Mainnet', symbol: 'XTM', title: 'Wallet de Tari',
      settingsDescription: 'Copia de seguridad cifrada y almacenamiento local de la wallet', notInitialized: 'No inicializada',
      preparing: 'Preparando la wallet de Tari...', create: 'Crear wallet de Tari',
      backupExported: 'Copia de seguridad exportada', backupMissing: 'Copia de seguridad no exportada',
      backupWarning: 'La copia de seguridad de la wallet de Tari aún no se ha exportado',
      backupWarningBody: 'La copia de seguridad de tu wallet aún no se ha exportado. Si pierdes el acceso a este dispositivo, podrías perder tus fondos.',
      export: 'Exportar copia de seguridad cifrada', import: 'Importar copia de seguridad', importExisting: 'Importar copia existente',
      exportTitle: 'Exportar copia de seguridad de Tari', exportDescription: 'Crea un archivo cifrado que pueda restaurar tu wallet XTM en otro dispositivo.',
      password: 'Contraseña de la copia', confirmPassword: 'Confirmar contraseña', showPassword: 'Mostrar contraseña',
      passwordNotice: 'Outruna no puede restablecer esta contraseña y no conserva una copia de tu copia de seguridad de Tari.',
      passwordLength: 'Usa al menos 12 caracteres para la contraseña de la copia de seguridad.', passwordMismatch: 'Las contraseñas deben coincidir exactamente.',
      download: 'Descargar copia de seguridad cifrada', encrypting: 'Cifrando la copia de seguridad...', decrypting: 'Descifrando la copia de seguridad...',
      chooseFile: 'Elegir archivo de copia de seguridad', creationDate: 'Fecha de creación de la copia', restore: 'Restaurar wallet de Tari',
      decryptError: 'No se puede descifrar esta copia de seguridad. Comprueba el archivo y la contraseña.',
      invalidBackup: 'Archivo de copia de seguridad de Tari no compatible o no válido. Elige una copia de Mainnet de versión 1 inferior a 256 KiB.',
      replaceTitle: '¿Reemplazar la wallet de Tari en este dispositivo?',
      replaceWarning: 'La copia importada pertenece a otra wallet de Tari. La wallet actual se eliminará de este dispositivo. Asegúrate de haber exportado antes su copia de seguridad.',
      current: 'Actual', imported: 'Importada', replace: 'Reemplazar wallet',
      remove: 'Quitar de este dispositivo', removeTitle: '¿Quitar la wallet de Tari de este dispositivo?',
      removeWarning: 'Necesitarás el archivo cifrado de copia de seguridad y su contraseña para restaurar esta wallet de Tari.',
      removeUnbacked: 'No se ha exportado ninguna copia de seguridad de Tari. Al quitar esta wallet podrías perder permanentemente el acceso a cualquier XTM que contenga.',
      sessionOnly: 'Este navegador no puede conservar de forma segura tu wallet de Tari entre sesiones. Descarga una copia cifrada antes de cerrar Outruna.',
      storageError: 'No se puede acceder al almacenamiento cifrado de Tari. No se eliminaron los datos existentes de la wallet. Inténtalo de nuevo o restaura tu copia.',
      storageUnavailable: 'El almacenamiento seguro del dispositivo no está disponible en este navegador.',
      accountError: 'Inicia sesión para acceder a tu wallet de Tari.', otherTab: 'Tari está abierto en otra pestaña. Ciérrala antes de volver a abrirla aquí.',
      wasmError: 'No se puede cargar el software de firma de Tari. Inténtalo de nuevo sin borrar los datos del navegador.',
      receive: 'Depositar XTM', receiveSubtitle: 'Recibir XTM en Tari Mainnet', qr: 'Código QR de la dirección de Tari',
      receiveNotice: 'Envía XTM a esta dirección solo en Tari Mainnet. Enviar otros activos o fondos desde otra red puede causar una pérdida permanente.',
      receiveBackup: 'Exporta tu copia de seguridad antes de depositar fondos.', address: 'Dirección de Tari', addressCopied: 'Dirección copiada',
      send: 'Enviar XTM', recipient: 'Dirección del destinatario', recipientPlaceholder: 'Introduce la dirección de Tari...', amount: 'Importe',
      available: 'Saldo disponible', locked: 'Saldo bloqueado', pendingBalance: 'Cambio pendiente',
      fee: 'Comisión de red', total: 'Total', review: 'Revisar transacción', confirmSend: 'Confirmar y enviar', back: 'Volver',
      invalidAddress: 'Introduce una dirección válida de Tari Mainnet.', singleAddress: 'Esta dirección de Tari no puede recibir pagos unilaterales.',
      invalidAmount: 'Introduce un importe mayor que cero con un máximo de 6 decimales.', insufficient: 'No hay saldo disponible suficiente incluida la comisión de red.',
      feeChanged: 'Cambió la comisión o las entradas de la transacción. Revisa la transacción de nuevo.',
      syncRequired: 'Sincroniza Tari antes de enviar. Actualiza y revisa la transacción de nuevo.',
      signing: 'Firmando y enviando la transacción...', sent: 'Transacción enviada. Esperando confirmación.',
      rejected: 'El nodo de Tari rechazó la transacción. Tus entradas siguen disponibles.',
      broadcastUnknown: 'No se pudo confirmar el envío. Las entradas siguen reservadas para evitar un doble gasto. Sincroniza para comprobar la confirmación antes de otro envío.',
      syncing: 'Sincronizando Tari...', synced: 'Tari sincronizado', syncError: 'No se puede sincronizar Tari', unknown: 'Saldo desconocido', retry: 'Reintentar',
      rpcError: 'El RPC de Tari no está disponible. Inténtalo más tarde.', rpcData: 'Respuesta incompleta o no válida de Tari. El análisis no omitió el bloque fallido.',
      partialBlock: 'El servidor de Tari devolvió un bloque incompleto. Se conserva el progreso. Inténtalo más tarde.',
      pruned: 'Este nodo de Tari no puede proporcionar el historial completo de recuperación. Inténtalo más tarde sin borrar tu wallet.',
      workerError: 'El worker de Tari no está disponible.', busy: 'Espera a que termine la operación actual.',
      history: 'Historial de Tari', emptyHistory: 'Aún no se encontraron transacciones de Tari.', in: 'Recibido', out: 'Enviado',
      pending: 'Pendiente', confirmed: 'Confirmado', failed: 'Fallido', height: 'Altura minada',
      details: 'Detalles del activo Tari', decimals: 'Decimales', type: 'Tipo', nativeAsset: 'Activo nativo', price: 'Precio', sync: 'Sincronización', backup: 'Estado de la copia',
      unavailable: 'n/d', generalError: 'No se pudo completar esta acción de Tari. Inténtalo de nuevo sin borrar tu wallet.',
      localWarning: 'El almacenamiento local cifrado es solo para este dispositivo. Borrar los datos del sitio elimina el acceso local. Conserva el archivo cifrado y su contraseña.',
      noSwaps: 'No se admiten swaps de XTM. Selecciona una red EVM para hacer swaps.'
    }
  },
  hi: {
    tari: {
      name: 'Tari', network: 'Tari Mainnet', symbol: 'XTM', title: 'Tari वॉलेट',
      settingsDescription: 'एन्क्रिप्टेड फ़ाइल बैकअप और लोकल वॉलेट स्टोरेज', notInitialized: 'आरंभ नहीं किया गया',
      preparing: 'Tari वॉलेट तैयार हो रहा है...', create: 'Tari वॉलेट बनाएँ',
      backupExported: 'बैकअप निर्यात किया गया', backupMissing: 'बैकअप निर्यात नहीं किया गया',
      backupWarning: 'Tari वॉलेट बैकअप अभी निर्यात नहीं हुआ है',
      backupWarningBody: 'आपका वॉलेट बैकअप अभी निर्यात नहीं हुआ है। यदि आप इस डिवाइस तक पहुँच खो देते हैं, तो अपने फ़ंड खो सकते हैं।',
      export: 'एन्क्रिप्टेड बैकअप निर्यात करें', import: 'बैकअप आयात करें', importExisting: 'मौजूदा बैकअप आयात करें',
      exportTitle: 'Tari बैकअप निर्यात करें', exportDescription: 'एक एन्क्रिप्टेड फ़ाइल बनाएँ जो किसी दूसरे डिवाइस पर आपका XTM वॉलेट बहाल कर सके।',
      password: 'बैकअप पासवर्ड', confirmPassword: 'पासवर्ड की पुष्टि करें', showPassword: 'पासवर्ड दिखाएँ',
      passwordNotice: 'Outruna इस पासवर्ड को रीसेट नहीं कर सकता और आपके Tari बैकअप की कोई प्रति नहीं रखता।',
      passwordLength: 'बैकअप पासवर्ड में कम से कम 12 अक्षर उपयोग करें।', passwordMismatch: 'पासवर्ड बिल्कुल मेल खाने चाहिए।',
      download: 'एन्क्रिप्टेड बैकअप डाउनलोड करें', encrypting: 'बैकअप एन्क्रिप्ट हो रहा है...', decrypting: 'बैकअप डिक्रिप्ट हो रहा है...',
      chooseFile: 'बैकअप फ़ाइल चुनें', creationDate: 'बैकअप निर्माण तिथि', restore: 'Tari वॉलेट बहाल करें',
      decryptError: 'यह बैकअप डिक्रिप्ट नहीं किया जा सका। फ़ाइल और पासवर्ड जाँचें।',
      invalidBackup: 'असमर्थित या अमान्य Tari बैकअप फ़ाइल। 256 KiB से छोटा संस्करण 1 Mainnet बैकअप चुनें।',
      replaceTitle: 'इस डिवाइस पर Tari वॉलेट बदलें?',
      replaceWarning: 'आयातित बैकअप एक अलग Tari वॉलेट का है। वर्तमान वॉलेट इस डिवाइस से हटा दिया जाएगा। सुनिश्चित करें कि आपने पहले उसका बैकअप निर्यात किया है।',
      current: 'वर्तमान', imported: 'आयातित', replace: 'वॉलेट बदलें',
      remove: 'इस डिवाइस से हटाएँ', removeTitle: 'इस डिवाइस से Tari वॉलेट हटाएँ?',
      removeWarning: 'इस Tari वॉलेट को बहाल करने के लिए आपको एन्क्रिप्टेड बैकअप फ़ाइल और उसका पासवर्ड चाहिए होगा।',
      removeUnbacked: 'कोई Tari बैकअप निर्यात नहीं हुआ है। यह वॉलेट हटाने से इसमें रखे किसी भी XTM तक पहुँच स्थायी रूप से समाप्त हो सकती है।',
      sessionOnly: 'यह ब्राउज़र आपका Tari वॉलेट सत्रों के बीच सुरक्षित रूप से नहीं रख सकता। Outruna बंद करने से पहले एक एन्क्रिप्टेड बैकअप डाउनलोड करें।',
      storageError: 'एन्क्रिप्टेड Tari स्टोरेज तक पहुँच नहीं हो सकी। मौजूदा वॉलेट डेटा हटाया नहीं गया। फिर प्रयास करें या अपना बैकअप बहाल करें।',
      storageUnavailable: 'इस ब्राउज़र में सुरक्षित डिवाइस स्टोरेज उपलब्ध नहीं है।',
      accountError: 'अपने Tari वॉलेट तक पहुँचने के लिए साइन इन करें।', otherTab: 'Tari दूसरे टैब में खुला है। यहाँ दोबारा खोलने से पहले उसे बंद करें।',
      wasmError: 'Tari हस्ताक्षर सॉफ़्टवेयर लोड नहीं हो सका। ब्राउज़र डेटा हटाए बिना फिर प्रयास करें।',
      receive: 'XTM जमा करें', receiveSubtitle: 'Tari Mainnet पर XTM प्राप्त करें', qr: 'Tari पते का QR कोड',
      receiveNotice: 'इस पते पर केवल Tari Mainnet का XTM भेजें। दूसरे नेटवर्क से अन्य संपत्ति या फ़ंड भेजने से स्थायी हानि हो सकती है।',
      receiveBackup: 'फ़ंड जमा करने से पहले अपना बैकअप निर्यात करें।', address: 'Tari पता', addressCopied: 'पता कॉपी हुआ',
      send: 'XTM भेजें', recipient: 'प्राप्तकर्ता का पता', recipientPlaceholder: 'Tari पता दर्ज करें...', amount: 'राशि',
      available: 'उपलब्ध शेष', locked: 'लॉक किया गया शेष', pendingBalance: 'लंबित शेष राशि',
      fee: 'नेटवर्क शुल्क', total: 'कुल', review: 'लेनदेन की समीक्षा करें', confirmSend: 'पुष्टि करें और भेजें', back: 'वापस',
      invalidAddress: 'एक मान्य Tari Mainnet पता दर्ज करें।', singleAddress: 'यह Tari पता एकतरफा भुगतान प्राप्त नहीं कर सकता।',
      invalidAmount: 'शून्य से अधिक और अधिकतम 6 दशमलव वाली राशि दर्ज करें।', insufficient: 'नेटवर्क शुल्क सहित पर्याप्त खर्च योग्य शेष नहीं है।',
      feeChanged: 'लेनदेन का शुल्क या इनपुट बदल गया। लेनदेन की फिर समीक्षा करें।',
      syncRequired: 'भेजने से पहले Tari सिंक करें। रीफ़्रेश करके लेनदेन की फिर समीक्षा करें।',
      signing: 'लेनदेन पर हस्ताक्षर और सबमिट हो रहा है...', sent: 'लेनदेन सबमिट हुआ। पुष्टि की प्रतीक्षा है।',
      rejected: 'Tari नोड ने लेनदेन अस्वीकार कर दिया। आपके इनपुट उपलब्ध हैं।',
      broadcastUnknown: 'सबमिशन की पुष्टि नहीं हो सकी। डबल खर्च रोकने के लिए इनपुट आरक्षित हैं। दूसरा भेजने से पहले पुष्टि के लिए सिंक करें।',
      syncing: 'Tari सिंक हो रहा है...', synced: 'Tari सिंक हुआ', syncError: 'Tari सिंक नहीं हो सका', unknown: 'शेष अज्ञात', retry: 'फिर प्रयास करें',
      rpcError: 'Tari RPC उपलब्ध नहीं है। बाद में फिर प्रयास करें।', rpcData: 'अधूरा या अमान्य Tari उत्तर। विफल ब्लॉक को स्कैन में छोड़ा नहीं गया।',
      partialBlock: 'Tari सर्वर ने अधूरा ब्लॉक लौटाया। स्कैन प्रगति सुरक्षित है। बाद में फिर प्रयास करें।',
      pruned: 'यह Tari नोड पूर्ण पुनर्प्राप्ति इतिहास नहीं दे सकता। अपना वॉलेट हटाए बिना बाद में फिर प्रयास करें।',
      workerError: 'Tari वर्कर उपलब्ध नहीं है।', busy: 'वर्तमान कार्रवाई पूरी होने की प्रतीक्षा करें।',
      history: 'Tari इतिहास', emptyHistory: 'अभी तक कोई Tari लेनदेन नहीं मिला।', in: 'प्राप्त', out: 'भेजा गया',
      pending: 'लंबित', confirmed: 'पुष्टि हुई', failed: 'विफल', height: 'माइन की गई ऊँचाई',
      details: 'Tari संपत्ति विवरण', decimals: 'दशमलव', type: 'प्रकार', nativeAsset: 'मूल संपत्ति', price: 'कीमत', sync: 'सिंक', backup: 'बैकअप स्थिति',
      unavailable: 'उपलब्ध नहीं', generalError: 'यह Tari कार्रवाई पूरी नहीं हो सकी। अपना वॉलेट हटाए बिना फिर प्रयास करें।',
      localWarning: 'एन्क्रिप्टेड लोकल स्टोरेज केवल इस डिवाइस के लिए है। साइट डेटा हटाने से लोकल पहुँच समाप्त हो जाती है। अपनी एन्क्रिप्टेड बैकअप फ़ाइल और पासवर्ड रखें।',
      noSwaps: 'XTM स्वैप समर्थित नहीं हैं। स्वैप करने के लिए EVM नेटवर्क चुनें।'
    }
  },
  ru: {
    tari: {
      name: 'Tari', network: 'Tari Mainnet', symbol: 'XTM', title: 'Кошелёк Tari',
      settingsDescription: 'Зашифрованная резервная копия и локальное хранилище кошелька', notInitialized: 'Не инициализирован',
      preparing: 'Подготовка кошелька Tari...', create: 'Создать кошелёк Tari',
      backupExported: 'Резервная копия экспортирована', backupMissing: 'Резервная копия не экспортирована',
      backupWarning: 'Резервная копия кошелька Tari ещё не экспортирована',
      backupWarningBody: 'Резервная копия вашего кошелька ещё не экспортирована. Если вы потеряете доступ к этому устройству, вы можете потерять свои средства.',
      export: 'Экспортировать зашифрованную копию', import: 'Импортировать копию', importExisting: 'Импортировать существующую копию',
      exportTitle: 'Экспорт резервной копии Tari', exportDescription: 'Создайте зашифрованный файл, который сможет восстановить ваш кошелёк XTM на другом устройстве.',
      password: 'Пароль резервной копии', confirmPassword: 'Подтвердите пароль', showPassword: 'Показать пароль',
      passwordNotice: 'Outruna не может сбросить этот пароль и не хранит копию вашей резервной копии Tari.',
      passwordLength: 'Используйте не менее 12 символов для пароля резервной копии.', passwordMismatch: 'Пароли должны точно совпадать.',
      download: 'Скачать зашифрованную копию', encrypting: 'Шифрование резервной копии...', decrypting: 'Расшифровка резервной копии...',
      chooseFile: 'Выбрать файл резервной копии', creationDate: 'Дата создания копии', restore: 'Восстановить кошелёк Tari',
      decryptError: 'Не удалось расшифровать эту копию. Проверьте файл и пароль.',
      invalidBackup: 'Неподдерживаемый или недопустимый файл резервной копии Tari. Выберите копию Mainnet версии 1 размером менее 256 КиБ.',
      replaceTitle: 'Заменить кошелёк Tari на этом устройстве?',
      replaceWarning: 'Импортированная копия принадлежит другому кошельку Tari. Текущий кошелёк будет удалён с этого устройства. Убедитесь, что вы сначала экспортировали его копию.',
      current: 'Текущий', imported: 'Импортированный', replace: 'Заменить кошелёк',
      remove: 'Удалить с этого устройства', removeTitle: 'Удалить кошелёк Tari с этого устройства?',
      removeWarning: 'Для восстановления этого кошелька Tari потребуются зашифрованный файл копии и его пароль.',
      removeUnbacked: 'Резервная копия Tari не экспортирована. Удаление кошелька может навсегда лишить доступа к любым XTM на нём.',
      sessionOnly: 'Этот браузер не может безопасно хранить кошелёк Tari между сессиями. Перед закрытием Outruna скачайте зашифрованную копию.',
      storageError: 'Не удалось получить доступ к зашифрованному хранилищу Tari. Существующие данные кошелька не удалены. Повторите попытку или восстановите копию.',
      storageUnavailable: 'Безопасное хранилище устройства недоступно в этом браузере.',
      accountError: 'Войдите, чтобы получить доступ к кошельку Tari.', otherTab: 'Tari открыт в другой вкладке. Закройте её перед повторным открытием здесь.',
      wasmError: 'Не удалось загрузить программное обеспечение подписи Tari. Повторите попытку, не удаляя данные браузера.',
      receive: 'Пополнить XTM', receiveSubtitle: 'Получить XTM в Tari Mainnet', qr: 'QR-код адреса Tari',
      receiveNotice: 'Отправляйте на этот адрес XTM только в Tari Mainnet. Отправка других активов или средств из другой сети может привести к их безвозвратной потере.',
      receiveBackup: 'Экспортируйте резервную копию перед пополнением.', address: 'Адрес Tari', addressCopied: 'Адрес скопирован',
      send: 'Отправить XTM', recipient: 'Адрес получателя', recipientPlaceholder: 'Введите адрес Tari...', amount: 'Сумма',
      available: 'Доступный баланс', locked: 'Заблокированный баланс', pendingBalance: 'Ожидаемая сдача',
      fee: 'Комиссия сети', total: 'Итого', review: 'Проверить транзакцию', confirmSend: 'Подтвердить и отправить', back: 'Назад',
      invalidAddress: 'Введите действительный адрес Tari Mainnet.', singleAddress: 'Этот адрес Tari не может принимать односторонние платежи.',
      invalidAmount: 'Введите сумму больше нуля с максимум 6 знаками после запятой.', insufficient: 'Недостаточно расходуемого баланса с учётом комиссии сети.',
      feeChanged: 'Комиссия или входные данные транзакции изменились. Проверьте транзакцию ещё раз.',
      syncRequired: 'Синхронизируйте Tari перед отправкой. Обновите данные и проверьте транзакцию ещё раз.',
      signing: 'Подпись и отправка транзакции...', sent: 'Транзакция отправлена. Ожидается подтверждение.',
      rejected: 'Узел Tari отклонил транзакцию. Ваши входные данные остаются доступными.',
      broadcastUnknown: 'Отправку не удалось подтвердить. Входные данные зарезервированы, чтобы предотвратить двойную трату. Синхронизируйтесь перед повторной отправкой.',
      syncing: 'Синхронизация Tari...', synced: 'Tari синхронизирован', syncError: 'Не удалось синхронизировать Tari', unknown: 'Баланс неизвестен', retry: 'Повторить',
      rpcError: 'Tari RPC недоступен. Повторите попытку позже.', rpcData: 'Неполный или недопустимый ответ Tari. Неудачный блок не был пропущен при сканировании.',
      partialBlock: 'Сервер Tari вернул неполный блок. Прогресс сканирования сохранён. Повторите попытку позже.',
      pruned: 'Этот узел Tari не может предоставить полную историю восстановления. Повторите попытку позже, не удаляя кошелёк.',
      workerError: 'Рабочий процесс Tari недоступен.', busy: 'Дождитесь завершения текущей операции.',
      history: 'История Tari', emptyHistory: 'Транзакции Tari пока не найдены.', in: 'Получено', out: 'Отправлено',
      pending: 'Ожидает', confirmed: 'Подтверждено', failed: 'Не удалось', height: 'Высота блока',
      details: 'Сведения об активе Tari', decimals: 'Знаков после запятой', type: 'Тип', nativeAsset: 'Нативный актив', price: 'Цена', sync: 'Синхронизация', backup: 'Статус копии',
      unavailable: 'н/д', generalError: 'Не удалось выполнить это действие Tari. Повторите попытку, не удаляя кошелёк.',
      localWarning: 'Зашифрованное локальное хранилище предназначено только для этого устройства. Очистка данных сайта удаляет локальный доступ. Храните зашифрованный файл копии и его пароль.',
      noSwaps: 'Обмен XTM не поддерживается. Для обмена выберите сеть EVM.'
    }
  },
  zh: {
    tari: {
      name: 'Tari', network: 'Tari 主网', symbol: 'XTM', title: 'Tari 钱包',
      settingsDescription: '加密文件备份与本地钱包存储', notInitialized: '尚未初始化',
      preparing: '正在准备 Tari 钱包...', create: '创建 Tari 钱包',
      backupExported: '已导出备份', backupMissing: '尚未导出备份',
      backupWarning: '尚未导出 Tari 钱包备份',
      backupWarningBody: '你的钱包备份尚未导出。如果失去此设备的访问权限，你可能会丢失资金。',
      export: '导出加密备份', import: '导入备份', importExisting: '导入现有备份',
      exportTitle: '导出 Tari 备份', exportDescription: '创建一个加密文件，用于在另一台设备上恢复你的 XTM 钱包。',
      password: '备份密码', confirmPassword: '确认密码', showPassword: '显示密码',
      passwordNotice: 'Outruna 无法重置此密码，也不会保存你的 Tari 备份副本。',
      passwordLength: '备份密码至少需要 12 个字符。', passwordMismatch: '两次输入的密码必须完全一致。',
      download: '下载加密备份', encrypting: '正在加密备份...', decrypting: '正在解密备份...',
      chooseFile: '选择备份文件', creationDate: '备份创建日期', restore: '恢复 Tari 钱包',
      decryptError: '无法解密此备份。请检查文件和密码。',
      invalidBackup: '不支持或无效的 Tari 备份文件。请选择小于 256 KiB 的版本 1 主网备份。',
      replaceTitle: '替换此设备上的 Tari 钱包？',
      replaceWarning: '导入的备份属于另一个 Tari 钱包。当前钱包将从此设备移除。请确保已经先导出它的备份。',
      current: '当前', imported: '已导入', replace: '替换钱包',
      remove: '从此设备移除', removeTitle: '从此设备移除 Tari 钱包？',
      removeWarning: '恢复此 Tari 钱包需要加密备份文件及其密码。',
      removeUnbacked: '尚未导出 Tari 备份。移除此钱包可能永久失去对其中 XTM 的访问权限。',
      sessionOnly: '此浏览器无法在会话之间安全保存你的 Tari 钱包。关闭 Outruna 前请下载加密备份。',
      storageError: '无法访问加密的 Tari 存储。现有钱包数据尚未删除。请重试或恢复备份。',
      storageUnavailable: '此浏览器不支持安全的设备存储。',
      accountError: '请登录以访问你的 Tari 钱包。', otherTab: 'Tari 已在另一个标签页中打开。请先关闭它，然后在此重新打开。',
      wasmError: '无法加载 Tari 签名软件。请重试，不要清除浏览器数据。',
      receive: '存入 XTM', receiveSubtitle: '在 Tari 主网接收 XTM', qr: 'Tari 地址二维码',
      receiveNotice: '请仅向此地址发送 Tari 主网上的 XTM。发送其他资产或来自其他网络的资金可能导致永久损失。',
      receiveBackup: '存入资金前请导出备份。', address: 'Tari 地址', addressCopied: '地址已复制',
      send: '发送 XTM', recipient: '收款地址', recipientPlaceholder: '输入 Tari 地址...', amount: '金额',
      available: '可用余额', locked: '锁定余额', pendingBalance: '待确认找零',
      fee: '网络费', total: '总计', review: '检查交易', confirmSend: '确认并发送', back: '返回',
      invalidAddress: '请输入有效的 Tari 主网地址。', singleAddress: '此 Tari 地址无法接收单边支付。',
      invalidAmount: '请输入大于零且最多 6 位小数的金额。', insufficient: '包含网络费后可用余额不足。',
      feeChanged: '交易费用或输入已变化。请重新检查交易。',
      syncRequired: '发送前请同步 Tari。刷新并重新检查交易。',
      signing: '正在签名并提交交易...', sent: '交易已提交，正在等待确认。',
      rejected: 'Tari 节点拒绝了此交易。你的输入仍然可用。',
      broadcastUnknown: '无法确认提交结果。为防止双重支付，输入仍被保留。请同步确认状态后再尝试发送。',
      syncing: '正在同步 Tari...', synced: 'Tari 已同步', syncError: '无法同步 Tari', unknown: '余额未知', retry: '重试',
      rpcError: 'Tari RPC 不可用。请稍后重试。', rpcData: 'Tari 响应不完整或无效。扫描未跳过失败的区块。',
      partialBlock: 'Tari 服务器返回了不完整的区块。扫描进度已保留。请稍后重试。',
      pruned: '此 Tari 节点无法提供完整的恢复历史。请在不删除钱包的情况下稍后重试。',
      workerError: 'Tari 工作进程不可用。', busy: '请等待当前操作完成。',
      history: 'Tari 历史', emptyHistory: '尚未发现 Tari 交易。', in: '已收到', out: '已发送',
      pending: '待确认', confirmed: '已确认', failed: '失败', height: '挖矿高度',
      details: 'Tari 资产详情', decimals: '小数位', type: '类型', nativeAsset: '原生资产', price: '价格', sync: '同步', backup: '备份状态',
      unavailable: '不可用', generalError: '无法完成此 Tari 操作。请重试，不要删除钱包。',
      localWarning: '加密的本地存储仅适用于此设备。清除网站数据会删除本地访问权限。请妥善保存加密备份文件及其密码。',
      noSwaps: '不支持 XTM 兑换。请切换到 EVM 网络进行兑换。'
    }
  }
}

const overrides = {
  de: {
    language: { label: 'Sprache', automatic: 'Automatisch', saved: 'Sprache gespeichert' },
    auth: { eyebrow: 'Eingebettete Wallet (Privy)', preparing: 'Authentifizierung wird vorbereitet', preparingDescription: 'Deine sichere Wallet wird eingerichtet.', opening: 'Wallet wird geöffnet', openingDescription: 'Deine Wallet wird vorbereitet und synchronisiert.', unable: 'Wallet konnte nicht geöffnet werden', telegramDescription: 'Öffne deine eingebettete EVM-Wallet sicher mit Telegram.', browserDescription: 'Melde dich an, um deine eingebettete EVM-Wallet zu öffnen.', continueTelegram: 'Mit Telegram fortfahren', continueEmail: 'Mit E-Mail fortfahren', retryTelegram: 'Mit Telegram erneut versuchen', signOut: 'Abmelden', loading: 'Laden' },
    nav: { wallet: 'Wallet', swap: 'Swap', p2p: 'P2P', gas: 'Gas', more: 'Mehr', sections: 'Wallet-Bereiche' },
    common: { close: 'Schließen', copy: 'Kopieren', copied: 'Kopiert', refresh: 'Aktualisieren', selected: 'Ausgewählt', cancel: 'Abbrechen', continue: 'Weiter', save: 'Speichern', send: 'Senden', withdraw: 'Auszahlen', deposit: 'Einzahlen', history: 'Verlauf', unknown: 'Unbekannt', unavailable: 'Nicht verfügbar', none: 'Keine', loading: 'Wird geladen...', noResults: 'Keine Ergebnisse' },
    wallet: { portfolio: 'Gesamtwert des Portfolios', assets: 'Meine Assets', customToken: 'Benutzerdefiniertes Token', addCustomToken: 'Benutzerdefiniertes Token hinzufügen', hideSmallBalances: 'Kleine Guthaben ausblenden', showSmallBalances: 'Kleine Guthaben anzeigen', noBalances: 'Keine sichtbaren Guthaben auf dieser Chain.', noBalancesHint: 'Kleine Guthaben anzeigen oder Netzwerk wechseln.', switchNetwork: 'Netzwerk wechseln', supportedNetworks: 'Unterstützte Netzwerke', accountHistory: 'Kontoverlauf öffnen', copyAddress: 'Wallet-Adresse kopieren', refreshBalances: 'Guthaben aktualisieren', details: 'Details', address: 'Adresse', chain: 'Chain', chainId: 'Chain-ID', walletType: 'Wallet-Typ', accountSource: 'Kontenquelle', linkedWallets: 'Verknüpfte Wallets', telegramUser: 'Telegram-Nutzer', telegramStatus: 'Telegram-Status', tokenDetails: 'Token-Details', network: 'Netzwerk', symbol: 'Symbol', decimals: 'Dezimalstellen', type: 'Typ', nativeAsset: 'Native Asset', erc20: 'ERC-20-Token', price: 'Preis', priceUnavailable: 'Preis nicht verfügbar', updatePrice: 'Preis aktualisieren', contract: 'Contract', contractWarning: 'Prüfe diesen Contract sorgfältig vor dem Senden oder Genehmigen von Transaktionen.', nativeNote: 'Dies ist das native Gas-Asset für {{chain}}.' },
    gas: { title: 'Gas-Konto', description: 'Vom Nutzer finanzierte Gaszahlungen für Outruna-Transfers.', embeddedWallet: 'Eingebettete Wallet', mode: 'Modus', walletType: 'Wallet-Typ', latestSend: 'Letzte Sendung', latestAction: 'Letzte Aktions-ID', rabbyAccount: 'Rabby-Konto', rabbyBalance: 'Rabby-Guthaben', howItWorks: 'So funktioniert es', topUp: 'Aufladen', selectNetwork: 'Netzwerk auswählen', selectToken: 'Token auswählen', topUpNetworksUnavailable: 'Gas-Konto-Aufladenetzwerke sind nicht verfügbar.', switchNetworkStablecoin: 'Wechsle das Netzwerk oder füge einen unterstützten Stablecoin hinzu.', amount: 'Betrag', walletBalance: 'Wallet-Guthaben', gasDeposit: 'Gas-Einzahlung', reportTopUp: 'Vorhandene Auflade-Transaktion melden', transactionHash: 'Transaktions-Hash', yourWallet: 'Deine Wallet', refreshDestinations: 'Gas-Konto aktualisieren, um Ziele zu laden.', selectDestination: 'Anderes Ziel auswählen oder Gas-Konto aktualisieren.', fee: 'Gebühr', limit: 'Limit', latestCheck: 'Letzte Rabby-Prüfung', total: 'Gesamt', gas: 'Gas' },
    swap: { title: 'Tauschen', unavailable: 'Swaps sind in diesem Netzwerk nicht verfügbar.', supportedChainHint: 'Wechsle zu einer unterstützten EVM-Chain.', noTokens: 'Keine gehaltenen Token zum Tauschen verfügbar.', depositFirst: 'Zahle zuerst in die Wallet ein.', reverse: 'Swap-Paar umkehren', customNotice: 'Füge einen benutzerdefinierten Token zuerst in deiner Wallet hinzu.', route: 'Route', autoRoute: 'Auto - beste verfügbare', choosePay: 'Token zum Bezahlen auswählen', chooseReceive: 'Token zum Empfangen auswählen', amount: 'Betrag', exchange: 'Exchange', estimatedOutput: 'Geschätzter Output', minimumReceived: 'Mindestens erhalten', outrunaFee: 'Outruna-Gebühr', estimatedUsd: 'Geschätzter USD-Wert', minimumUsd: 'Minimaler USD-Wert', status: 'Status', transactionHash: 'Transaktions-Hash', chooseToken: 'Token auswählen', searchToken: 'Token suchen', noTokensFound: 'Keine Token gefunden', tryAnother: 'Versuche ein anderes Symbol oder einen anderen Namen.', closePicker: 'Token-Auswahl schließen' },
    deposit: { title: 'Krypto einzahlen', eyebrow: 'Einzahlung', close: 'Einzahlungsfenster schließen', subtitle: 'Folge den folgenden Schritten für eine Einzahlung.', scan: 'QR-Code scannen', scanDescription: 'Öffne deine Wallet-App und scanne den Code, um die Adresse zu erhalten.', qr: 'Einzahlungs-QR-Code', fallbackQr: 'QR', copyTitle: 'Oder Wallet-Adresse kopieren', copyDescription: 'Füge diese Adresse in deiner Wallet ein und sende deine Kryptowährung.', copied: 'Kopiert!', networks: 'Funktioniert in allen unterstützten Netzwerken', supportedNetworks: 'Unterstützte Netzwerke', safety: 'Sende nur unterstützte Assets über die oben angezeigten Netzwerke.' },
    withdraw: { title: 'Aus Wallet senden', close: 'Auszahlungsfenster schließen', amount: 'Betrag', destination: 'Ziel', gasMode: 'Gas-Modus', speed: 'Geschwindigkeit', customGwei: 'Benutzerdefiniertes Gwei', destinationPlaceholder: '0x...' },
    customToken: { title: 'Token hinzufügen', close: 'Fenster für benutzerdefiniertes Token schließen', trustTitle: 'Füge nur vertrauenswürdige Token hinzu', trustDescription: 'Jeder kann ein Token mit einem bekannten Namen oder Symbol erstellen. Prüfe den Contract im Block Explorer, bevor du es hinzufügst. Du bist für die Prüfung verantwortlich.', contractAddress: 'Contract-Adresse', reviewTitle: 'Prüfe dieses Token sorgfältig', unsafeAcknowledgement: 'Ich habe den Contract geprüft und verstanden, dass dieses Token unsicher sein kann.', lookup: 'On-Chain-Abfrage', token: 'Token', name: 'Name', tokenName: 'Token-Name' },
    p2p: { opening: 'P2P-Exchange wird geöffnet...', eyebrow: 'P2P-Exchange', title: 'Stablecoins gegen Fiat verkaufen', description: 'Sende einen unterstützten Stablecoin. Ein Operator prüft ihn und sendet die Auszahlung an deine Bank.', limit: 'Bis zu 150 $', howItWorks: 'So funktioniert P2P', createInvoice: 'Rechnung erstellen', sendCrypto: 'Krypto senden', receiveFiat: 'Fiat erhalten', invoiceAmount: 'Rechnungsbetrag', depositAddress: 'Einzahlungsadresse', copyInvoice: 'Einzahlungsadresse kopieren', tokenContract: 'Token-Contract', copyContract: 'Token-Contract kopieren', openContract: 'Token-Contract im Explorer öffnen', operatorNotice: 'Sende nur {{symbol}} auf {{chain}}. Der Operator wird erst nach Prüfung der exakten Einzahlung benachrichtigt.', cryptoReceived: 'Krypto erhalten', payoutWithOperator: 'Deine Auszahlung an {{target}} liegt jetzt beim Operator.', chooseSend: 'Auswahl zum Senden', stablecoinValue: 'Stablecoins werden für diese Auszahlung mit 1 $ bewertet.', chooseNetwork: 'Wähle, wo du den Stablecoin senden wirst', choosePayout: 'Auszahlung auswählen', encrypted: 'Diese Daten sind verschlüsselt und werden nur dem Operator angezeigt.', bankName: 'Bankname', yourBank: 'Deine Bank', securityNotice: 'Gib niemals PIN, CVV, Ablaufdatum, Passwort oder Bestätigungscode ein.', recentOrders: 'Letzte Aufträge', refreshOrders: 'P2P-Aufträge aktualisieren', empty: 'Noch keine P2P-Aufträge.', waitingDeposit: 'Warten auf Einzahlung', verifyingDeposit: 'Einzahlung wird geprüft', payoutPending: 'Auszahlung ausstehend', completed: 'Abgeschlossen', cancelled: 'Storniert', needsAttention: 'Aufmerksamkeit erforderlich' },
    risk: { checking: 'Transaktion wird geprüft...', checkingDescription: 'Risikoprüfung vor dem Senden.', noReason: 'Keine detaillierte Begründung zurückgegeben.', blocked: 'Diese Transaktion wurde von der Risiko-Engine blockiert.', acknowledged: 'Adressrisiko bestätigt', sendingBlocked: 'Senden an diese Adresse ist blockiert.' }
  },
  es: {
    language: { label: 'Idioma', automatic: 'Automático', saved: 'Idioma guardado' },
    auth: { eyebrow: 'Wallet integrada (Privy)', preparing: 'Preparando autenticación', preparingDescription: 'Configurando tu wallet segura.', opening: 'Abriendo wallet', openingDescription: 'Preparando tu wallet y sincronizando tu cuenta.', unable: 'No se pudo abrir la wallet', telegramDescription: 'Abre tu wallet EVM integrada de forma segura con Telegram.', browserDescription: 'Inicia sesión para abrir tu wallet EVM integrada.', continueTelegram: 'Continuar con Telegram', continueEmail: 'Continuar con correo', retryTelegram: 'Reintentar con Telegram', signOut: 'Cerrar sesión', loading: 'Cargando' },
    nav: { wallet: 'Wallet', swap: 'Intercambiar', p2p: 'P2P', gas: 'Gas', more: 'Más', sections: 'Secciones de la wallet' },
    common: { close: 'Cerrar', copy: 'Copiar', copied: 'Copiado', refresh: 'Actualizar', selected: 'Seleccionado', cancel: 'Cancelar', continue: 'Continuar', save: 'Guardar', send: 'Enviar', withdraw: 'Retirar', deposit: 'Depositar', history: 'Historial', unknown: 'Desconocido', unavailable: 'No disponible', none: 'Ninguno', loading: 'Cargando...', noResults: 'No se encontraron resultados' },
    wallet: { portfolio: 'Valor total de la cartera', assets: 'Mis activos', customToken: 'Token personalizado', addCustomToken: 'Añadir token personalizado', hideSmallBalances: 'Ocultar saldos pequeños', showSmallBalances: 'Mostrar saldos pequeños', noBalances: 'No hay saldos visibles en esta red.', noBalancesHint: 'Muestra saldos pequeños o cambia de red.', switchNetwork: 'Cambiar red', supportedNetworks: 'Redes compatibles', accountHistory: 'Abrir historial de cuenta', copyAddress: 'Copiar dirección de wallet', refreshBalances: 'Actualizar saldos', details: 'Detalles', address: 'Dirección', chain: 'Red', chainId: 'ID de red', walletType: 'Tipo de wallet', accountSource: 'Origen de cuenta', linkedWallets: 'Wallets vinculadas', telegramUser: 'Usuario de Telegram', telegramStatus: 'Estado de Telegram', tokenDetails: 'Detalles del token', network: 'Red', symbol: 'Símbolo', decimals: 'Decimales', type: 'Tipo', nativeAsset: 'Activo nativo', erc20: 'Token ERC-20', price: 'Precio', priceUnavailable: 'Precio no disponible', updatePrice: 'Actualizar precio', contract: 'Contrato', contractWarning: 'Revisa este contrato antes de enviar o aprobar transacciones.', nativeNote: 'Este es el activo de gas nativo de {{chain}}.' },
    gas: { title: 'Cuenta de gas', description: 'Pagos de gas financiados por el usuario para transferencias de Outruna.', embeddedWallet: 'Wallet integrada', mode: 'Modo', walletType: 'Tipo de wallet', latestSend: 'Último envío', latestAction: 'ID de última acción', rabbyAccount: 'Cuenta Rabby', rabbyBalance: 'Saldo Rabby', howItWorks: 'Cómo funciona', topUp: 'Recargar', selectNetwork: 'Seleccionar red', selectToken: 'Seleccionar token', topUpNetworksUnavailable: 'Las redes de recarga de la cuenta de gas no están disponibles.', switchNetworkStablecoin: 'Cambia de red o añade un stablecoin compatible.', amount: 'Cantidad', walletBalance: 'Saldo de wallet', gasDeposit: 'Depósito de gas', reportTopUp: 'Informar de una recarga existente', transactionHash: 'Hash de transacción', yourWallet: 'Tu wallet', refreshDestinations: 'Actualiza la cuenta de gas para cargar destinos.', selectDestination: 'Selecciona otro destino o actualiza la cuenta de gas.', fee: 'Comisión', limit: 'Límite', latestCheck: 'Última comprobación de Rabby', total: 'Total', gas: 'Gas' },
    swap: { title: 'Intercambiar', unavailable: 'Los swaps no están disponibles en esta red.', supportedChainHint: 'Cambia a una red EVM compatible.', noTokens: 'No hay tokens disponibles para intercambiar.', depositFirst: 'Deposita primero en la wallet.', reverse: 'Invertir par de swap', customNotice: 'Para intercambiar un token personalizado, añádelo primero en Mis activos.', route: 'Ruta', autoRoute: 'Auto - mejor disponible', choosePay: 'Elegir token para pagar', chooseReceive: 'Elegir token para recibir', amount: 'Cantidad', exchange: 'Exchange', estimatedOutput: 'Salida estimada', minimumReceived: 'Mínimo recibido', outrunaFee: 'Comisión de Outruna', estimatedUsd: 'USD estimado', minimumUsd: 'USD mínimo', status: 'Estado', transactionHash: 'Hash de transacción', chooseToken: 'Elegir token', searchToken: 'Buscar token', noTokensFound: 'No se encontraron tokens', tryAnother: 'Prueba otro símbolo o nombre.', closePicker: 'Cerrar selector de tokens' },
    deposit: { title: 'Depositar cripto', eyebrow: 'Depósito', close: 'Cerrar depósito', subtitle: 'Sigue estos pasos para depositar.', scan: 'Escanear código QR', scanDescription: 'Abre tu app de wallet y escanea el código para obtener la dirección.', qr: 'Código QR de depósito', fallbackQr: 'QR', copyTitle: 'O copiar dirección de wallet', copyDescription: 'Pega esta dirección en tu wallet y envía tus criptomonedas.', copied: '¡Copiado!', networks: 'Funciona en todas las redes compatibles', supportedNetworks: 'Redes compatibles', safety: 'Envía solo activos compatibles por las redes mostradas arriba.' },
    withdraw: { title: 'Enviar desde wallet', close: 'Cerrar retiro', amount: 'Cantidad', destination: 'Destino', gasMode: 'Modo de gas', speed: 'Velocidad', customGwei: 'Gwei personalizado', destinationPlaceholder: '0x...' },
    customToken: { title: 'Añadir token', close: 'Cerrar token personalizado', trustTitle: 'Añade solo tokens de confianza', trustDescription: 'Cualquiera puede crear un token con un nombre o símbolo conocido. Comprueba el contrato en el explorador antes de añadirlo. Tú eres responsable de verificarlo.', contractAddress: 'Dirección del contrato', reviewTitle: 'Revisa este token cuidadosamente', unsafeAcknowledgement: 'He comprobado el contrato y entiendo que este token puede no ser seguro.', lookup: 'Consulta on-chain', token: 'Token', name: 'Nombre', tokenName: 'Nombre del token' },
    p2p: { opening: 'Abriendo exchange P2P...', eyebrow: 'Exchange P2P', title: 'Vende stablecoins por fiat', description: 'Envía un stablecoin compatible. Un operador lo verifica y envía el pago a tu banco.', limit: 'Hasta 150 $', howItWorks: 'Cómo funciona P2P', createInvoice: 'Crear factura', sendCrypto: 'Enviar cripto', receiveFiat: 'Recibir fiat', invoiceAmount: 'Importe de factura', depositAddress: 'Dirección de depósito', copyInvoice: 'Copiar dirección de depósito', tokenContract: 'Contrato del token', copyContract: 'Copiar contrato del token', openContract: 'Abrir contrato en el explorador', operatorNotice: 'Envía solo {{symbol}} en {{chain}}. El operador recibe aviso tras verificar el depósito exacto.', cryptoReceived: 'Cripto recibida', payoutWithOperator: 'Tu pago a {{target}} ya está con el operador.', chooseSend: 'Elige qué enviar', stablecoinValue: 'Los stablecoins valen 1 $ para este pago.', chooseNetwork: 'Elige dónde enviar el stablecoin', choosePayout: 'Elige tu pago', encrypted: 'Estos datos están cifrados y solo los verá el operador.', bankName: 'Nombre del banco', yourBank: 'Tu banco', securityNotice: 'Nunca introduzcas PIN, CVV, fecha de caducidad, contraseña ni código de verificación.', recentOrders: 'Pedidos recientes', refreshOrders: 'Actualizar pedidos P2P', empty: 'Aún no hay pedidos P2P.', waitingDeposit: 'Esperando depósito', verifyingDeposit: 'Verificando depósito', payoutPending: 'Pago pendiente', completed: 'Completado', cancelled: 'Cancelado', needsAttention: 'Requiere atención' },
    risk: { checking: 'Comprobando transacción...', checkingDescription: 'Ejecutando una comprobación de riesgo antes de enviar.', noReason: 'No se recibió una explicación detallada.', blocked: 'El motor de riesgo bloqueó esta transacción.', acknowledged: 'Riesgo de dirección aceptado', sendingBlocked: 'El envío a esta dirección está bloqueado.' }
  },
  ru: {
    language: { label: 'Язык', automatic: 'Автоматически', saved: 'Язык сохранён' },
    auth: { eyebrow: 'Встроенный кошелёк (Privy)', preparing: 'Подготовка авторизации', preparingDescription: 'Настраиваем безопасный кошелёк.', opening: 'Открываем кошелёк', openingDescription: 'Подготавливаем кошелёк и синхронизируем аккаунт.', unable: 'Не удалось открыть кошелёк', telegramDescription: 'Безопасно откройте встроенный EVM-кошелёк через Telegram.', browserDescription: 'Войдите, чтобы открыть встроенный EVM-кошелёк.', continueTelegram: 'Продолжить через Telegram', continueEmail: 'Продолжить по email', retryTelegram: 'Повторить через Telegram', signOut: 'Выйти', loading: 'Загрузка' },
    nav: { wallet: 'Кошелёк', swap: 'Обмен', p2p: 'P2P', gas: 'Газ', more: 'Ещё', sections: 'Разделы кошелька' },
    common: { close: 'Закрыть', copy: 'Копировать', copied: 'Скопировано', refresh: 'Обновить', selected: 'Выбрано', cancel: 'Отмена', continue: 'Продолжить', save: 'Сохранить', send: 'Отправить', withdraw: 'Вывести', deposit: 'Пополнить', history: 'История', unknown: 'Неизвестно', unavailable: 'Недоступно', none: 'Нет', loading: 'Загрузка...', noResults: 'Ничего не найдено' },
    wallet: { portfolio: 'Общая стоимость портфеля', assets: 'Мои активы', customToken: 'Пользовательский токен', addCustomToken: 'Добавить пользовательский токен', hideSmallBalances: 'Скрыть маленькие балансы', showSmallBalances: 'Показать маленькие балансы', noBalances: 'На этой сети нет видимых балансов.', noBalancesHint: 'Покажите маленькие балансы или смените сеть.', switchNetwork: 'Сменить сеть', supportedNetworks: 'Поддерживаемые сети', accountHistory: 'Открыть историю аккаунта', copyAddress: 'Копировать адрес кошелька', refreshBalances: 'Обновить балансы', details: 'Детали', address: 'Адрес', chain: 'Сеть', chainId: 'ID сети', walletType: 'Тип кошелька', accountSource: 'Источник аккаунта', linkedWallets: 'Связанные кошельки', telegramUser: 'Пользователь Telegram', telegramStatus: 'Статус Telegram', tokenDetails: 'Детали токена', network: 'Сеть', symbol: 'Символ', decimals: 'Десятичные знаки', type: 'Тип', nativeAsset: 'Нативный актив', erc20: 'Токен ERC-20', price: 'Цена', priceUnavailable: 'Цена недоступна', updatePrice: 'Обновить цену', contract: 'Контракт', contractWarning: 'Проверьте этот контракт перед отправкой или подтверждением транзакций.', nativeNote: 'Это нативный газовый актив сети {{chain}}.' },
    gas: { title: 'Газовый аккаунт', description: 'Газовые платежи для переводов Outruna финансируются пользователем.', embeddedWallet: 'Встроенный кошелёк', mode: 'Режим', walletType: 'Тип кошелька', latestSend: 'Последняя отправка', latestAction: 'ID последнего действия', rabbyAccount: 'Аккаунт Rabby', rabbyBalance: 'Баланс Rabby', howItWorks: 'Как это работает', topUp: 'Пополнить', selectNetwork: 'Выбрать сеть', selectToken: 'Выбрать токен', topUpNetworksUnavailable: 'Сети пополнения газового аккаунта недоступны.', switchNetworkStablecoin: 'Смените сеть или добавьте поддерживаемый стейблкоин.', amount: 'Сумма', walletBalance: 'Баланс кошелька', gasDeposit: 'Газовый депозит', reportTopUp: 'Сообщить о существующем пополнении', transactionHash: 'Хеш транзакции', yourWallet: 'Ваш кошелёк', refreshDestinations: 'Обновите газовый аккаунт для загрузки адресов.', selectDestination: 'Выберите другой адрес или обновите газовый аккаунт.', fee: 'Комиссия', limit: 'Лимит', latestCheck: 'Последняя проверка Rabby', total: 'Всего', gas: 'Газ' },
    swap: { title: 'Обмен', unavailable: 'Обмен в этой сети недоступен.', supportedChainHint: 'Переключитесь на поддерживаемую EVM-сеть.', noTokens: 'Нет токенов для обмена.', depositFirst: 'Сначала пополните кошелёк.', reverse: 'Изменить направление обмена', customNotice: 'Чтобы обменять пользовательский токен, сначала добавьте его в «Мои активы».', route: 'Маршрут', autoRoute: 'Авто - лучший доступный', choosePay: 'Выбрать токен для оплаты', chooseReceive: 'Выбрать токен для получения', amount: 'Сумма', exchange: 'Биржа', estimatedOutput: 'Ожидаемый результат', minimumReceived: 'Минимум к получению', outrunaFee: 'Комиссия Outruna', estimatedUsd: 'Ожидаемый USD', minimumUsd: 'Минимальный USD', status: 'Статус', transactionHash: 'Хеш транзакции', chooseToken: 'Выбрать токен', searchToken: 'Поиск токена', noTokensFound: 'Токены не найдены', tryAnother: 'Попробуйте другой символ или название.', closePicker: 'Закрыть выбор токена' },
    deposit: { title: 'Пополнить криптовалютой', eyebrow: 'Пополнение', close: 'Закрыть окно пополнения', subtitle: 'Следуйте шагам ниже, чтобы внести средства.', scan: 'Сканировать QR-код', scanDescription: 'Откройте приложение кошелька и отсканируйте код, чтобы получить адрес.', qr: 'QR-код пополнения', fallbackQr: 'QR', copyTitle: 'Или скопировать адрес кошелька', copyDescription: 'Вставьте этот адрес в кошелёк и отправьте криптовалюту.', copied: 'Скопировано!', networks: 'Работает во всех поддерживаемых сетях', supportedNetworks: 'Поддерживаемые сети', safety: 'Отправляйте только поддерживаемые активы через сети выше.' },
    withdraw: { title: 'Отправить из кошелька', close: 'Закрыть окно вывода', amount: 'Сумма', destination: 'Адрес назначения', gasMode: 'Режим газа', speed: 'Скорость', customGwei: 'Свой Gwei', destinationPlaceholder: '0x...' },
    customToken: { title: 'Добавить токен', close: 'Закрыть окно пользовательского токена', trustTitle: 'Добавляйте только доверенные токены', trustDescription: 'Любой может создать токен со знакомым именем или символом. Проверьте контракт в обозревателе перед добавлением. Проверка токена лежит на вас.', contractAddress: 'Адрес контракта', reviewTitle: 'Внимательно проверьте токен', unsafeAcknowledgement: 'Я проверил контракт и понимаю, что токен может быть небезопасным.', lookup: 'Проверка в сети', token: 'Токен', name: 'Название', tokenName: 'Название токена' },
    p2p: { opening: 'Открываем P2P-обмен...', eyebrow: 'P2P-обмен', title: 'Продать за фиат', description: 'Отправьте поддерживаемый стейблкоин. Оператор проверит его и отправит выплату в ваш банк по СБП или номеру карты.', limit: 'До 150 $', howItWorks: 'Как работает P2P', createInvoice: 'Создать счёт', sendCrypto: 'Отправить крипту', receiveFiat: 'Получить фиат', invoiceAmount: 'Сумма счёта', depositAddress: 'Адрес депозита', copyInvoice: 'Копировать адрес депозита', tokenContract: 'Контракт токена', copyContract: 'Копировать контракт токена', openContract: 'Открыть контракт в обозревателе', operatorNotice: 'Отправляйте только {{symbol}} в сети {{chain}}. Оператор получит уведомление после проверки точного депозита.', cryptoReceived: 'Криптовалюта получена', payoutWithOperator: 'Ваша выплата на {{target}} теперь у оператора.', chooseSend: 'Выберите, что отправить', stablecoinValue: 'Для этой выплаты стейблкоины оцениваются в $1.', chooseNetwork: 'Выберите сеть для отправки стейблкоина', choosePayout: 'Выберите выплату', encrypted: 'Эти данные зашифрованы и видны только оператору.', bankName: 'Название банка', yourBank: 'Ваш банк', securityNotice: 'Никогда не вводите PIN, CVV, срок действия, пароль или код подтверждения.', recentOrders: 'Последние заявки', refreshOrders: 'Обновить P2P-заявки', empty: 'Заявок P2P пока нет.', waitingDeposit: 'Ожидание депозита', verifyingDeposit: 'Проверка депозита', payoutPending: 'Выплата ожидается', completed: 'Завершено', cancelled: 'Отменено', needsAttention: 'Требуется внимание' },
    risk: { checking: 'Проверяем транзакцию...', checkingDescription: 'Проверка риска перед отправкой.', noReason: 'Подробная причина не указана.', blocked: 'Риск-движок заблокировал эту транзакцию.', acknowledged: 'Риск адреса подтверждён', sendingBlocked: 'Отправка на этот адрес заблокирована.' }
  },
  zh: {
    language: { label: '语言', automatic: '自动', saved: '语言已保存' },
    auth: { eyebrow: '嵌入式钱包（Privy）', preparing: '正在准备身份验证', preparingDescription: '正在设置安全钱包体验。', opening: '正在打开钱包', openingDescription: '正在准备钱包并同步账户。', unable: '无法打开钱包', telegramDescription: '通过 Telegram 安全打开嵌入式 EVM 钱包。', browserDescription: '登录以打开嵌入式 EVM 钱包。', continueTelegram: '使用 Telegram 继续', continueEmail: '使用邮箱继续', retryTelegram: '使用 Telegram 重试', signOut: '退出登录', loading: '加载中' },
    nav: { wallet: '钱包', swap: '兑换', p2p: 'P2P', gas: 'Gas', more: '更多', sections: '钱包分区' },
    common: { close: '关闭', copy: '复制', copied: '已复制', refresh: '刷新', selected: '已选择', cancel: '取消', continue: '继续', save: '保存', send: '发送', withdraw: '提现', deposit: '充值', history: '历史', unknown: '未知', unavailable: '不可用', none: '无', loading: '加载中...', noResults: '没有找到结果' },
    wallet: { portfolio: '总资产价值', assets: '我的资产', customToken: '自定义代币', addCustomToken: '添加自定义代币', hideSmallBalances: '隐藏小额余额', showSmallBalances: '显示小额余额', noBalances: '此网络没有可见余额。', noBalancesHint: '显示小额余额或切换网络。', switchNetwork: '切换网络', supportedNetworks: '支持的网络', accountHistory: '打开账户历史', copyAddress: '复制钱包地址', refreshBalances: '刷新余额', details: '详情', address: '地址', chain: '网络', chainId: '网络 ID', walletType: '钱包类型', accountSource: '账户来源', linkedWallets: '已连接钱包', telegramUser: 'Telegram 用户', telegramStatus: 'Telegram 状态', tokenDetails: '代币详情', network: '网络', symbol: '符号', decimals: '小数位', type: '类型', nativeAsset: '原生资产', erc20: 'ERC-20 代币', price: '价格', priceUnavailable: '价格不可用', updatePrice: '更新价格', contract: '合约', contractWarning: '发送或批准交易前请仔细检查此合约。', nativeNote: '这是 {{chain}} 的原生 Gas 资产。' },
    gas: { title: 'Gas 账户', description: '由用户为 Outruna 转账支付 Gas。', embeddedWallet: '嵌入式钱包', mode: '模式', walletType: '钱包类型', latestSend: '最近发送', latestAction: '最近操作 ID', rabbyAccount: 'Rabby 账户', rabbyBalance: 'Rabby 余额', howItWorks: '使用方式', topUp: '充值', selectNetwork: '选择网络', selectToken: '选择代币', topUpNetworksUnavailable: 'Gas 账户充值网络不可用。', switchNetworkStablecoin: '切换网络或添加支持的稳定币。', amount: '金额', walletBalance: '钱包余额', gasDeposit: 'Gas 充值', reportTopUp: '报告已有充值交易', transactionHash: '交易哈希', yourWallet: '你的钱包', refreshDestinations: '刷新 Gas 账户以加载目标地址。', selectDestination: '选择其他目标地址或刷新 Gas 账户。', fee: '费用', limit: '限额', latestCheck: '最近 Rabby 检查', total: '总计', gas: 'Gas' },
    swap: { title: '兑换', unavailable: '此网络不支持兑换。', supportedChainHint: '切换到支持的 EVM 网络。', noTokens: '没有可兑换的持有代币。', depositFirst: '请先向钱包充值。', reverse: '反转兑换方向', customNotice: '兑换自定义代币前，请先在我的资产中添加它。', route: '路由', autoRoute: '自动 - 最佳可用', choosePay: '选择支付代币', chooseReceive: '选择接收代币', amount: '金额', exchange: '交易所', estimatedOutput: '预计输出', minimumReceived: '最低接收', outrunaFee: 'Outruna 费用', estimatedUsd: '预计 USD', minimumUsd: '最低 USD', status: '状态', transactionHash: '交易哈希', chooseToken: '选择代币', searchToken: '搜索代币', noTokensFound: '未找到代币', tryAnother: '请尝试其他符号或名称。', closePicker: '关闭代币选择' },
    deposit: { title: '充值加密货币', eyebrow: '充值', close: '关闭充值窗口', subtitle: '按照以下步骤进行充值。', scan: '扫描二维码', scanDescription: '打开钱包应用并扫描二维码获取地址。', qr: '充值二维码', fallbackQr: '二维码', copyTitle: '或复制钱包地址', copyDescription: '将此地址粘贴到钱包并发送加密货币。', copied: '已复制！', networks: '支持所有已支持的网络', supportedNetworks: '支持的网络', safety: '只通过上方显示的网络发送支持的资产。' },
    withdraw: { title: '从钱包发送', close: '关闭发送窗口', amount: '金额', destination: '目标地址', gasMode: 'Gas 模式', speed: '速度', customGwei: '自定义 Gwei', destinationPlaceholder: '0x...' },
    customToken: { title: '添加代币', close: '关闭自定义代币窗口', trustTitle: '只添加你信任的代币', trustDescription: '任何人都可以创建一个使用熟悉名称或符号的代币。添加前请在区块浏览器中检查合约。你需要自行验证代币。', contractAddress: '合约地址', reviewTitle: '请仔细检查此代币', unsafeAcknowledgement: '我已检查合约，并理解此代币可能不安全。', lookup: '链上查询', token: '代币', name: '名称', tokenName: '代币名称' },
    p2p: { opening: '正在打开 P2P 兑换...', eyebrow: 'P2P 兑换', title: '将稳定币兑换为法币', description: '发送支持的稳定币。运营方验证后会将款项支付到你的银行。', limit: '最高 150 美元', howItWorks: 'P2P 使用方式', createInvoice: '创建发票', sendCrypto: '发送加密货币', receiveFiat: '接收法币', invoiceAmount: '发票金额', depositAddress: '充值地址', copyInvoice: '复制充值地址', tokenContract: '代币合约', copyContract: '复制代币合约', openContract: '在浏览器中打开代币合约', operatorNotice: '只在 {{chain}} 发送 {{symbol}}。确认准确充值后，运营方才会收到通知。', cryptoReceived: '已收到加密货币', payoutWithOperator: '你向 {{target}} 的付款现在已交给运营方。', chooseSend: '选择发送内容', stablecoinValue: '本次付款中稳定币按 1 美元计价。', chooseNetwork: '选择发送稳定币的网络', choosePayout: '选择收款方式', encrypted: '这些信息已加密，仅运营方可见。', bankName: '银行名称', yourBank: '你的银行', securityNotice: '不要输入 PIN、CVV、有效期、密码或验证码。', recentOrders: '最近订单', refreshOrders: '刷新 P2P 订单', empty: '暂无 P2P 订单。', waitingDeposit: '等待充值', verifyingDeposit: '正在验证充值', payoutPending: '等待付款', completed: '已完成', cancelled: '已取消', needsAttention: '需要处理' },
    risk: { checking: '正在检查交易...', checkingDescription: '发送前正在执行交易风险检查。', noReason: '未返回详细原因。', blocked: '风险引擎已阻止此交易。', acknowledged: '已确认地址风险', sendingBlocked: '已阻止向此地址发送。' }
  },
  bn: {
    language: { label: 'ভাষা', automatic: 'স্বয়ংক্রিয়', saved: 'ভাষা সংরক্ষিত হয়েছে' },
    auth: { eyebrow: 'এম্বেডেড ওয়ালেট (Privy)', preparing: 'প্রমাণীকরণ প্রস্তুত হচ্ছে', preparingDescription: 'আপনার নিরাপদ ওয়ালেট প্রস্তুত করা হচ্ছে।', opening: 'ওয়ালেট খোলা হচ্ছে', openingDescription: 'আপনার ওয়ালেট প্রস্তুত ও অ্যাকাউন্ট সিঙ্ক করা হচ্ছে।', unable: 'ওয়ালেট খোলা যায়নি', telegramDescription: 'Telegram দিয়ে নিরাপদে এম্বেডেড EVM ওয়ালেট খুলুন।', browserDescription: 'এম্বেডেড EVM ওয়ালেট খুলতে সাইন ইন করুন।', continueTelegram: 'Telegram দিয়ে চালিয়ে যান', continueEmail: 'ইমেইল দিয়ে চালিয়ে যান', retryTelegram: 'Telegram দিয়ে আবার চেষ্টা করুন', signOut: 'সাইন আউট', loading: 'লোড হচ্ছে' },
    nav: { wallet: 'ওয়ালেট', swap: 'সোয়াপ', p2p: 'P2P', gas: 'গ্যাস', more: 'আরও', sections: 'ওয়ালেট বিভাগ' },
    common: { close: 'বন্ধ করুন', copy: 'কপি', copied: 'কপি হয়েছে', refresh: 'রিফ্রেশ', selected: 'নির্বাচিত', cancel: 'বাতিল', continue: 'চালিয়ে যান', save: 'সংরক্ষণ', send: 'পাঠান', withdraw: 'উত্তোলন', deposit: 'জমা', history: 'ইতিহাস', unknown: 'অজানা', unavailable: 'অনুপলব্ধ', none: 'কিছু নেই', loading: 'লোড হচ্ছে...', noResults: 'কোনো ফলাফল নেই' },
    wallet: { portfolio: 'মোট পোর্টফোলিও মূল্য', assets: 'আমার অ্যাসেট', customToken: 'কাস্টম টোকেন', addCustomToken: 'কাস্টম টোকেন যোগ করুন', hideSmallBalances: 'ছোট ব্যালেন্স লুকান', showSmallBalances: 'ছোট ব্যালেন্স দেখান', noBalances: 'এই চেইনে দৃশ্যমান ব্যালেন্স নেই।', noBalancesHint: 'ছোট ব্যালেন্স দেখান বা নেটওয়ার্ক বদলান।', switchNetwork: 'নেটওয়ার্ক বদলান', supportedNetworks: 'সমর্থিত নেটওয়ার্ক', accountHistory: 'অ্যাকাউন্ট ইতিহাস খুলুন', copyAddress: 'ওয়ালেট ঠিকানা কপি করুন', refreshBalances: 'ব্যালেন্স রিফ্রেশ করুন', details: 'বিবরণ', address: 'ঠিকানা', chain: 'চেইন', chainId: 'চেইন আইডি', walletType: 'ওয়ালেটের ধরন', accountSource: 'অ্যাকাউন্টের উৎস', linkedWallets: 'সংযুক্ত ওয়ালেট', telegramUser: 'Telegram ব্যবহারকারী', telegramStatus: 'Telegram অবস্থা', tokenDetails: 'টোকেনের বিবরণ', network: 'নেটওয়ার্ক', symbol: 'সিম্বল', decimals: 'দশমিক', type: 'ধরন', nativeAsset: 'নেটিভ অ্যাসেট', erc20: 'ERC-20 টোকেন', price: 'দাম', priceUnavailable: 'দাম অনুপলব্ধ', updatePrice: 'দাম আপডেট করুন', contract: 'কনট্রাক্ট', contractWarning: 'পাঠানো বা অনুমোদনের আগে কনট্রাক্টটি ভালোভাবে যাচাই করুন।', nativeNote: 'এটি {{chain}}-এর নেটিভ গ্যাস অ্যাসেট।' },
    gas: { title: 'গ্যাস অ্যাকাউন্ট', description: 'Outruna ট্রান্সফারের জন্য ব্যবহারকারীর অর্থায়িত গ্যাস পেমেন্ট।', embeddedWallet: 'এম্বেডেড ওয়ালেট', mode: 'মোড', walletType: 'ওয়ালেটের ধরন', latestSend: 'সর্বশেষ পাঠানো', latestAction: 'সর্বশেষ অ্যাকশন আইডি', rabbyAccount: 'Rabby অ্যাকাউন্ট', rabbyBalance: 'Rabby ব্যালেন্স', howItWorks: 'কীভাবে কাজ করে', topUp: 'টপ আপ', selectNetwork: 'নেটওয়ার্ক নির্বাচন', selectToken: 'টোকেন নির্বাচন', topUpNetworksUnavailable: 'গ্যাস অ্যাকাউন্ট টপ-আপ নেটওয়ার্ক অনুপলব্ধ।', switchNetworkStablecoin: 'নেটওয়ার্ক বদলান বা সমর্থিত স্টেবলকয়েন যোগ করুন।', amount: 'পরিমাণ', walletBalance: 'ওয়ালেট ব্যালেন্স', gasDeposit: 'গ্যাস জমা', reportTopUp: 'বিদ্যমান টপ-আপ ট্রান্স্যাকশন জানান', transactionHash: 'ট্রান্স্যাকশন হ্যাশ', yourWallet: 'আপনার ওয়ালেট', refreshDestinations: 'গন্তব্য লোড করতে গ্যাস অ্যাকাউন্ট রিফ্রেশ করুন।', selectDestination: 'অন্য গন্তব্য নির্বাচন বা গ্যাস অ্যাকাউন্ট রিফ্রেশ করুন।', fee: 'ফি', limit: 'সীমা', latestCheck: 'সর্বশেষ Rabby পরীক্ষা', total: 'মোট', gas: 'গ্যাস' },
    swap: { title: 'সোয়াপ', unavailable: 'এই নেটওয়ার্কে সোয়াপ নেই।', supportedChainHint: 'সমর্থিত EVM চেইনে বদলান।', noTokens: 'সোয়াপ করার মতো টোকেন নেই।', depositFirst: 'প্রথমে ওয়ালেটে জমা করুন।', reverse: 'সোয়াপ জোড়া উল্টান', customNotice: 'কাস্টম টোকেন সোয়াপ করতে আগে My Assets-এ যোগ করুন।', route: 'রুট', autoRoute: 'অটো - সেরা উপলব্ধ', choosePay: 'পেমেন্ট টোকেন নির্বাচন', chooseReceive: 'গ্রহণের টোকেন নির্বাচন', amount: 'পরিমাণ', exchange: 'এক্সচেঞ্জ', estimatedOutput: 'আনুমানিক আউটপুট', minimumReceived: 'সর্বনিম্ন প্রাপ্তি', outrunaFee: 'Outruna ফি', estimatedUsd: 'আনুমানিক USD', minimumUsd: 'সর্বনিম্ন USD', status: 'অবস্থা', transactionHash: 'ট্রান্স্যাকশন হ্যাশ', chooseToken: 'টোকেন নির্বাচন', searchToken: 'টোকেন খুঁজুন', noTokensFound: 'কোনো টোকেন নেই', tryAnother: 'অন্য সিম্বল বা নাম চেষ্টা করুন।', closePicker: 'টোকেন নির্বাচন বন্ধ করুন' },
    deposit: { title: 'ক্রিপ্টো জমা', eyebrow: 'জমা', close: 'জমা উইন্ডো বন্ধ করুন', subtitle: 'জমা দিতে নিচের ধাপগুলো অনুসরণ করুন।', scan: 'QR কোড স্ক্যান করুন', scanDescription: 'ঠিকানা পেতে আপনার ওয়ালেট অ্যাপ খুলে কোড স্ক্যান করুন।', qr: 'জমার QR কোড', fallbackQr: 'QR', copyTitle: 'অথবা ওয়ালেট ঠিকানা কপি করুন', copyDescription: 'এই ঠিকানা ওয়ালেটে পেস্ট করে ক্রিপ্টো পাঠান।', copied: 'কপি হয়েছে!', networks: 'সব সমর্থিত নেটওয়ার্কে কাজ করে', supportedNetworks: 'সমর্থিত নেটওয়ার্ক', safety: 'উপরে দেখানো নেটওয়ার্কে কেবল সমর্থিত অ্যাসেট পাঠান।' },
    withdraw: { title: 'ওয়ালেট থেকে পাঠান', close: 'পাঠানো উইন্ডো বন্ধ করুন', amount: 'পরিমাণ', destination: 'গন্তব্য', gasMode: 'গ্যাস মোড', speed: 'গতি', customGwei: 'কাস্টম Gwei', destinationPlaceholder: '0x...' },
    customToken: { title: 'টোকেন যোগ করুন', close: 'কাস্টম টোকেন উইন্ডো বন্ধ করুন', trustTitle: 'শুধু বিশ্বস্ত টোকেন যোগ করুন', trustDescription: 'যে কেউ পরিচিত নাম বা সিম্বল দিয়ে টোকেন তৈরি করতে পারে। যোগ করার আগে ব্লক এক্সপ্লোরারে কনট্রাক্ট যাচাই করুন। টোকেন যাচাইয়ের দায়িত্ব আপনার।', contractAddress: 'কনট্রাক্ট ঠিকানা', reviewTitle: 'টোকেনটি ভালোভাবে যাচাই করুন', unsafeAcknowledgement: 'আমি কনট্রাক্ট যাচাই করেছি এবং বুঝি টোকেনটি অনিরাপদ হতে পারে।', lookup: 'অন-চেইন অনুসন্ধান', token: 'টোকেন', name: 'নাম', tokenName: 'টোকেনের নাম' },
    p2p: { opening: 'P2P এক্সচেঞ্জ খোলা হচ্ছে...', eyebrow: 'P2P এক্সচেঞ্জ', title: 'স্টেবলকয়েন ফিয়াটে বিক্রি করুন', description: 'সমর্থিত স্টেবলকয়েন পাঠান। অপারেটর যাচাই করে আপনার ব্যাংকে পেমেন্ট পাঠাবেন।', limit: 'সর্বোচ্চ $150', howItWorks: 'P2P কীভাবে কাজ করে', createInvoice: 'ইনভয়েস তৈরি', sendCrypto: 'ক্রিপ্টো পাঠান', receiveFiat: 'ফিয়াট পান', invoiceAmount: 'ইনভয়েসের পরিমাণ', depositAddress: 'জমার ঠিকানা', copyInvoice: 'জমার ঠিকানা কপি', tokenContract: 'টোকেন কনট্রাক্ট', copyContract: 'টোকেন কনট্রাক্ট কপি', openContract: 'এক্সপ্লোরারে টোকেন কনট্রাক্ট খুলুন', operatorNotice: 'শুধু {{chain}}-এ {{symbol}} পাঠান। সঠিক জমা যাচাইয়ের পর অপারেটরকে জানানো হবে।', cryptoReceived: 'ক্রিপ্টো পাওয়া গেছে', payoutWithOperator: '{{target}}-এ আপনার পেমেন্ট এখন অপারেটরের কাছে।', chooseSend: 'কী পাঠাবেন নির্বাচন করুন', stablecoinValue: 'এই পেমেন্টে স্টেবলকয়েনের মূল্য $1 ধরা হয়।', chooseNetwork: 'স্টেবলকয়েন পাঠানোর নেটওয়ার্ক বাছুন', choosePayout: 'পেমেন্ট বাছুন', encrypted: 'এই তথ্য এনক্রিপ্টেড এবং কেবল অপারেটর দেখতে পারবেন।', bankName: 'ব্যাংকের নাম', yourBank: 'আপনার ব্যাংক', securityNotice: 'কখনো PIN, CVV, মেয়াদ, পাসওয়ার্ড বা ভেরিফিকেশন কোড দেবেন না।', recentOrders: 'সাম্প্রতিক অর্ডার', refreshOrders: 'P2P অর্ডার রিফ্রেশ', empty: 'এখনও কোনো P2P অর্ডার নেই।', waitingDeposit: 'জমার অপেক্ষায়', verifyingDeposit: 'জমা যাচাই হচ্ছে', payoutPending: 'পেমেন্ট অপেক্ষমাণ', completed: 'সম্পন্ন', cancelled: 'বাতিল', needsAttention: 'মনোযোগ প্রয়োজন' },
    risk: { checking: 'ট্রান্স্যাকশন পরীক্ষা হচ্ছে...', checkingDescription: 'পাঠানোর আগে ঝুঁকি পরীক্ষা চলছে।', noReason: 'বিস্তারিত কারণ পাওয়া যায়নি।', blocked: 'ঝুঁকি ইঞ্জিন ট্রান্স্যাকশনটি আটকে দিয়েছে।', acknowledged: 'ঠিকানার ঝুঁকি স্বীকার করা হয়েছে', sendingBlocked: 'এই ঠিকানায় পাঠানো বন্ধ করা হয়েছে।' }
  },
  hi: {
    language: { label: 'भाषा', automatic: 'स्वचालित', saved: 'भाषा सहेजी गई' },
    auth: { eyebrow: 'एम्बेडेड वॉलेट (Privy)', preparing: 'प्रमाणीकरण तैयार हो रहा है', preparingDescription: 'आपका सुरक्षित वॉलेट तैयार किया जा रहा है।', opening: 'वॉलेट खोला जा रहा है', openingDescription: 'वॉलेट तैयार और अकाउंट सिंक किया जा रहा है।', unable: 'वॉलेट नहीं खुल सका', telegramDescription: 'Telegram से अपना एम्बेडेड EVM वॉलेट सुरक्षित रूप से खोलें।', browserDescription: 'एम्बेडेड EVM वॉलेट खोलने के लिए साइन इन करें।', continueTelegram: 'Telegram के साथ जारी रखें', continueEmail: 'ईमेल के साथ जारी रखें', retryTelegram: 'Telegram के साथ फिर कोशिश करें', signOut: 'साइन आउट', loading: 'लोड हो रहा है' },
    nav: { wallet: 'वॉलेट', swap: 'स्वैप', p2p: 'P2P', gas: 'गैस', more: 'और', sections: 'वॉलेट सेक्शन' },
    common: { close: 'बंद करें', copy: 'कॉपी', copied: 'कॉपी हो गया', refresh: 'रिफ्रेश', selected: 'चयनित', cancel: 'रद्द करें', continue: 'जारी रखें', save: 'सहेजें', send: 'भेजें', withdraw: 'निकालें', deposit: 'जमा करें', history: 'इतिहास', unknown: 'अज्ञात', unavailable: 'उपलब्ध नहीं', none: 'कोई नहीं', loading: 'लोड हो रहा है...', noResults: 'कोई परिणाम नहीं' },
    wallet: { portfolio: 'कुल पोर्टफोलियो मूल्य', assets: 'मेरी एसेट्स', customToken: 'कस्टम टोकन', addCustomToken: 'कस्टम टोकन जोड़ें', hideSmallBalances: 'छोटे बैलेंस छिपाएं', showSmallBalances: 'छोटे बैलेंस दिखाएं', noBalances: 'इस चेन पर कोई दिखाई देने वाला बैलेंस नहीं है।', noBalancesHint: 'छोटे बैलेंस दिखाएं या नेटवर्क बदलें।', switchNetwork: 'नेटवर्क बदलें', supportedNetworks: 'समर्थित नेटवर्क', accountHistory: 'अकाउंट इतिहास खोलें', copyAddress: 'वॉलेट पता कॉपी करें', refreshBalances: 'बैलेंस रिफ्रेश करें', details: 'विवरण', address: 'पता', chain: 'चेन', chainId: 'चेन ID', walletType: 'वॉलेट प्रकार', accountSource: 'अकाउंट स्रोत', linkedWallets: 'लिंक किए गए वॉलेट', telegramUser: 'Telegram उपयोगकर्ता', telegramStatus: 'Telegram स्थिति', tokenDetails: 'टोकन विवरण', network: 'नेटवर्क', symbol: 'सिंबल', decimals: 'दशमलव', type: 'प्रकार', nativeAsset: 'नेटिव एसेट', erc20: 'ERC-20 टोकन', price: 'कीमत', priceUnavailable: 'कीमत उपलब्ध नहीं', updatePrice: 'कीमत अपडेट करें', contract: 'कॉन्ट्रैक्ट', contractWarning: 'भेजने या अनुमति देने से पहले इस कॉन्ट्रैक्ट को ध्यान से जांचें।', nativeNote: 'यह {{chain}} की नेटिव गैस एसेट है।' },
    gas: { title: 'गैस अकाउंट', description: 'Outruna ट्रांसफर के लिए उपयोगकर्ता द्वारा वित्तपोषित गैस भुगतान।', embeddedWallet: 'एम्बेडेड वॉलेट', mode: 'मोड', walletType: 'वॉलेट प्रकार', latestSend: 'नवीनतम भेजना', latestAction: 'नवीनतम एक्शन ID', rabbyAccount: 'Rabby अकाउंट', rabbyBalance: 'Rabby बैलेंस', howItWorks: 'यह कैसे काम करता है', topUp: 'टॉप अप', selectNetwork: 'नेटवर्क चुनें', selectToken: 'टोकन चुनें', topUpNetworksUnavailable: 'गैस अकाउंट टॉप-अप नेटवर्क उपलब्ध नहीं हैं।', switchNetworkStablecoin: 'नेटवर्क बदलें या समर्थित स्टेबलकॉइन जोड़ें।', amount: 'राशि', walletBalance: 'वॉलेट बैलेंस', gasDeposit: 'गैस जमा', reportTopUp: 'मौजूदा टॉप-अप ट्रांजैक्शन रिपोर्ट करें', transactionHash: 'ट्रांजैक्शन हैश', yourWallet: 'आपका वॉलेट', refreshDestinations: 'डेस्टिनेशन लोड करने के लिए गैस अकाउंट रिफ्रेश करें।', selectDestination: 'दूसरा डेस्टिनेशन चुनें या गैस अकाउंट रिफ्रेश करें।', fee: 'फीस', limit: 'सीमा', latestCheck: 'नवीनतम Rabby जांच', total: 'कुल', gas: 'गैस' },
    swap: { title: 'स्वैप', unavailable: 'इस नेटवर्क पर स्वैप उपलब्ध नहीं हैं।', supportedChainHint: 'समर्थित EVM चेन पर बदलें।', noTokens: 'स्वैप करने के लिए कोई टोकन नहीं है।', depositFirst: 'पहले वॉलेट में जमा करें।', reverse: 'स्वैप जोड़ी उलटें', customNotice: 'कस्टम टोकन स्वैप करने के लिए पहले उसे My Assets में जोड़ें।', route: 'रूट', autoRoute: 'ऑटो - सबसे अच्छा उपलब्ध', choosePay: 'भुगतान टोकन चुनें', chooseReceive: 'प्राप्ति टोकन चुनें', amount: 'राशि', exchange: 'एक्सचेंज', estimatedOutput: 'अनुमानित आउटपुट', minimumReceived: 'न्यूनतम प्राप्ति', outrunaFee: 'Outruna फीस', estimatedUsd: 'अनुमानित USD', minimumUsd: 'न्यूनतम USD', status: 'स्थिति', transactionHash: 'ट्रांजैक्शन हैश', chooseToken: 'टोकन चुनें', searchToken: 'टोकन खोजें', noTokensFound: 'कोई टोकन नहीं मिला', tryAnother: 'दूसरा सिंबल या नाम आज़माएं।', closePicker: 'टोकन चयन बंद करें' },
    deposit: { title: 'क्रिप्टो जमा करें', eyebrow: 'जमा', close: 'जमा विंडो बंद करें', subtitle: 'जमा करने के लिए नीचे दिए चरणों का पालन करें।', scan: 'QR कोड स्कैन करें', scanDescription: 'पता पाने के लिए अपना वॉलेट ऐप खोलें और कोड स्कैन करें।', qr: 'जमा QR कोड', fallbackQr: 'QR', copyTitle: 'या वॉलेट पता कॉपी करें', copyDescription: 'इस पते को वॉलेट में पेस्ट करके क्रिप्टो भेजें।', copied: 'कॉपी हो गया!', networks: 'सभी समर्थित नेटवर्क पर काम करता है', supportedNetworks: 'समर्थित नेटवर्क', safety: 'ऊपर दिखाए गए नेटवर्क पर केवल समर्थित एसेट भेजें।' },
    withdraw: { title: 'वॉलेट से भेजें', close: 'भेजने की विंडो बंद करें', amount: 'राशि', destination: 'डेस्टिनेशन', gasMode: 'गैस मोड', speed: 'गति', customGwei: 'कस्टम Gwei', destinationPlaceholder: '0x...' },
    customToken: { title: 'टोकन जोड़ें', close: 'कस्टम टोकन विंडो बंद करें', trustTitle: 'केवल भरोसेमंद टोकन जोड़ें', trustDescription: 'कोई भी परिचित नाम या सिंबल वाला टोकन बना सकता है। जोड़ने से पहले ब्लॉक एक्सप्लोरर पर कॉन्ट्रैक्ट जांचें। सत्यापन की जिम्मेदारी आपकी है।', contractAddress: 'कॉन्ट्रैक्ट पता', reviewTitle: 'इस टोकन की सावधानी से समीक्षा करें', unsafeAcknowledgement: 'मैंने कॉन्ट्रैक्ट जांच लिया है और समझता हूं कि यह टोकन असुरक्षित हो सकता है।', lookup: 'ऑन-चेन खोज', token: 'टोकन', name: 'नाम', tokenName: 'टोकन नाम' },
    p2p: { opening: 'P2P एक्सचेंज खुल रहा है...', eyebrow: 'P2P एक्सचेंज', title: 'स्टेबलकॉइन को फिएट में बेचें', description: 'समर्थित स्टेबलकॉइन भेजें। ऑपरेटर इसे सत्यापित करके आपके बैंक में भुगतान भेजेगा।', limit: 'अधिकतम $150', howItWorks: 'P2P कैसे काम करता है', createInvoice: 'इनवॉइस बनाएं', sendCrypto: 'क्रिप्टो भेजें', receiveFiat: 'फिएट पाएं', invoiceAmount: 'इनवॉइस राशि', depositAddress: 'जमा पता', copyInvoice: 'जमा पता कॉपी करें', tokenContract: 'टोकन कॉन्ट्रैक्ट', copyContract: 'टोकन कॉन्ट्रैक्ट कॉपी करें', openContract: 'एक्सप्लोरर में टोकन कॉन्ट्रैक्ट खोलें', operatorNotice: 'केवल {{chain}} पर {{symbol}} भेजें। सही जमा सत्यापित होने के बाद ही ऑपरेटर को सूचना मिलेगी।', cryptoReceived: 'क्रिप्टो प्राप्त हुआ', payoutWithOperator: '{{target}} को आपका भुगतान अब ऑपरेटर के पास है।', chooseSend: 'भेजने के लिए चुनें', stablecoinValue: 'इस भुगतान के लिए स्टेबलकॉइन का मूल्य $1 है।', chooseNetwork: 'स्टेबलकॉइन भेजने का नेटवर्क चुनें', choosePayout: 'भुगतान चुनें', encrypted: 'यह विवरण एन्क्रिप्टेड है और केवल ऑपरेटर को दिखता है।', bankName: 'बैंक का नाम', yourBank: 'आपका बैंक', securityNotice: 'PIN, CVV, समाप्ति तिथि, पासवर्ड या सत्यापन कोड कभी न डालें।', recentOrders: 'हाल के ऑर्डर', refreshOrders: 'P2P ऑर्डर रिफ्रेश करें', empty: 'अभी कोई P2P ऑर्डर नहीं है।', waitingDeposit: 'जमा का इंतजार', verifyingDeposit: 'जमा सत्यापित हो रहा है', payoutPending: 'भुगतान लंबित', completed: 'पूर्ण', cancelled: 'रद्द', needsAttention: 'ध्यान आवश्यक' },
    risk: { checking: 'ट्रांजैक्शन जांच रहा है...', checkingDescription: 'भेजने से पहले जोखिम जांच चल रही है।', noReason: 'कोई विस्तृत कारण नहीं मिला।', blocked: 'जोखिम इंजन ने इस ट्रांजैक्शन को रोक दिया।', acknowledged: 'पते का जोखिम स्वीकार किया गया', sendingBlocked: 'इस पते पर भेजना रोक दिया गया है।' }
  }
}

const buttonOverrides = {
  bn: {
    language: { preferences: 'পছন্দসমূহ', hint: 'Outruna-তে ব্যবহৃত ভাষা নির্বাচন করুন।' },
    common: { disconnect: 'সংযোগ বিচ্ছিন্ন করুন', processing: 'প্রক্রিয়াধীন...', explorer: 'এক্সপ্লোরার', max: 'সর্বোচ্চ', copyExplorerLink: 'এক্সপ্লোরার লিংক কপি করুন', expand: 'বিস্তার করুন', collapse: 'সংকুচিত করুন' },
    wallet: { updateLogo: 'লোগো আপডেট করুন', copyContract: 'কনট্র্যাক্ট কপি করুন', removeCustomToken: 'কাস্টম টোকেন সরান' },
    gas: { connect: 'Gas Account সংযুক্ত করুন', refreshBalance: 'ব্যালেন্স রিফ্রেশ করুন', topUpButton: 'Gas Account টপ আপ করুন', withdrawMax: 'সর্বোচ্চ উত্তোলন', eligibilityDescription: 'Outruna Gas Account-এর উপযুক্ততা পরীক্ষা করে, Embedded Wallet-কে লেনদেনে সই করতে বলে, তারপর জমা দেয়।', hostedService: 'এটি হোস্টেড Gas Account পরিষেবা ব্যবহার করে।', connected: 'সংযুক্ত', signatureRequired: 'সই প্রয়োজন', notConnected: 'সংযুক্ত নয়', network: 'নেটওয়ার্ক', token: 'টোকেন', destination: 'গন্তব্য', chooseTopUpNetwork: 'টপ-আপ নেটওয়ার্ক বেছে নিন', chooseStablecoin: 'স্টেবলকয়েন বেছে নিন', noTopUpNetwork: 'কোনো টপ-আপ নেটওয়ার্ক নেই', noSupportedTopUpToken: 'সমর্থিত টপ-আপ টোকেন নেই', depositAddressNotConfigured: 'ডিপোজিট ঠিকানা কনফিগার করা নেই', withdrawTo: 'উত্তোলনের গন্তব্য', embeddedWalletDestination: 'Embedded Wallet গন্তব্য', noWalletDestination: 'কোনো ওয়ালেট গন্তব্য নেই', chooseWithdrawNetwork: 'উত্তোলন নেটওয়ার্ক বেছে নিন', noWithdrawNetwork: 'কোনো উত্তোলন নেটওয়ার্ক নেই', enoughBalance: 'পর্যাপ্ত ব্যালেন্স', notUsable: 'ব্যবহারযোগ্য নয়', supportsTransaction: 'Gas Account এই লেনদেন সমর্থন করে।', doesNotSupportTransaction: 'Gas Account এই লেনদেন সমর্থন করে না।', status: { idle: 'নিষ্ক্রিয়', rabby_signing: 'সই হচ্ছে', rabby_submitting: 'জমা দেওয়া হচ্ছে', rabby_submitted: 'জমা দেওয়া হয়েছে' } },
    withdraw: { gasAccount: 'Gas Account', nativeGas: 'নেটিভ গ্যাস', standard: 'স্ট্যান্ডার্ড', fast: 'দ্রুত', instant: 'তাৎক্ষণিক', custom: 'কাস্টম', sending: 'পাঠানো হচ্ছে...' },
    customToken: { add: 'টোকেন যোগ করুন' },
    p2p: { createInvoiceButton: 'ডিপোজিট ইনভয়েস তৈরি করুন', creatingInvoice: 'ইনভয়েস তৈরি হচ্ছে...', decimals: 'দশমিক', maxAmount: 'সর্বোচ্চ $150' },
    risk: { acknowledgeAddress: 'ঠিকানার ঝুঁকি বুঝেছি', acknowledgeTransaction: 'ট্রানজ্যাকশনের ঝুঁকি বুঝেছি', continueSend: 'পাঠানো চালিয়ে যান' },
    messages: { invoiceReady: 'ইনভয়েস প্রস্তুত। চালিয়ে যেতে সঠিক স্টেবলকয়েন পরিমাণ পাঠান।', checkingDeposit: 'সঠিক স্টেবলকয়েন জমা পরীক্ষা হচ্ছে...', confirmCollection: 'আপনার ওয়ালেটে জমা সংগ্রহ নিশ্চিত করুন।', settlementConfirmed: 'সেটেলমেন্ট অনচেইনে নিশ্চিত হয়েছে। পেআউট অপারেটরকে জানানো হচ্ছে...', depositVerified: 'জমা যাচাই হয়েছে। অপারেটর আপনার পেআউট নির্দেশনা পেয়েছেন।', verifyingAddress: 'ইনভয়েস ঠিকানা যাচাই হচ্ছে...', confirmTransfer: 'আপনার ওয়ালেটে স্টেবলকয়েন ট্রান্সফার নিশ্চিত করুন।', transferConfirmed: 'ট্রান্সফার অনচেইনে নিশ্চিত হয়েছে। ইনভয়েস ব্যালেন্স পরীক্ষা হচ্ছে...', unableLoadP2p: 'P2P লোড করা যায়নি।', unableCreateP2p: 'P2P অর্ডার তৈরি করা যায়নি।', unableVerifyDeposit: 'জমা যাচাই করা যায়নি।', unableSendTransfer: 'স্টেবলকয়েন ট্রান্সফার পাঠানো যায়নি।', unableVerifyInvoice: 'ইনভয়েস যাচাই করা যায়নি।' }
  },
  de: {
    language: { preferences: 'Einstellungen', hint: 'Wähle die Sprache für Outruna.' },
    common: { disconnect: 'Trennen', processing: 'Wird verarbeitet...', explorer: 'Explorer', max: 'Max.', copyExplorerLink: 'Explorer-Link kopieren', expand: 'Aufklappen', collapse: 'Zuklappen' },
    wallet: { updateLogo: 'Logo aktualisieren', copyContract: 'Contract kopieren', removeCustomToken: 'Benutzerdefiniertes Token entfernen' },
    gas: { connect: 'Gas-Konto verbinden', refreshBalance: 'Guthaben aktualisieren', topUpButton: 'Gas-Konto aufladen', withdrawMax: 'Maximal auszahlen', eligibilityDescription: 'Outruna prüft die Gas-Konto-Berechtigung, lässt die Embedded Wallet die Transaktion signieren und reicht sie dann ein.', hostedService: 'Dies verwendet gehostete Gas-Konto-Dienste.', connected: 'Verbunden', signatureRequired: 'Signatur erforderlich', notConnected: 'Nicht verbunden', network: 'Netzwerk', token: 'Token', destination: 'Ziel', chooseTopUpNetwork: 'Auflade-Netzwerk wählen', chooseStablecoin: 'Stablecoin wählen', noTopUpNetwork: 'Kein Auflade-Netzwerk', noSupportedTopUpToken: 'Kein unterstützter Auflade-Token', depositAddressNotConfigured: 'Einzahlungsadresse nicht konfiguriert', withdrawTo: 'Auszahlen an', embeddedWalletDestination: 'Embedded-Wallet-Ziel', noWalletDestination: 'Kein Wallet-Ziel', chooseWithdrawNetwork: 'Auszahlungsnetzwerk wählen', noWithdrawNetwork: 'Kein Auszahlungsnetzwerk', enoughBalance: 'Ausreichendes Guthaben', notUsable: 'Nicht nutzbar', supportsTransaction: 'Das Gas-Konto unterstützt diese Transaktion.', doesNotSupportTransaction: 'Das Gas-Konto unterstützt diese Transaktion nicht.', status: { idle: 'Inaktiv', rabby_signing: 'Wird signiert', rabby_submitting: 'Wird eingereicht', rabby_submitted: 'Eingereicht' } },
    withdraw: { gasAccount: 'Gas-Konto', nativeGas: 'Native Gasgebühr', standard: 'Standard', fast: 'Schnell', instant: 'Sofort', custom: 'Benutzerdefiniert', sending: 'Wird gesendet...' },
    customToken: { add: 'Token hinzufügen' },
    p2p: { createInvoiceButton: 'Einzahlungsrechnung erstellen', creatingInvoice: 'Rechnung wird erstellt...', decimals: 'Dezimalstellen', maxAmount: 'Maximal 150 $' },
    risk: { acknowledgeAddress: 'Adressrisiko verstanden', acknowledgeTransaction: 'Transaktionsrisiko verstanden', continueSend: 'Senden fortsetzen' },
    messages: { invoiceReady: 'Rechnung bereit. Sende den exakten Stablecoin-Betrag, um fortzufahren.', checkingDeposit: 'Exakte Stablecoin-Einzahlung wird geprüft...', confirmCollection: 'Bestätige die Abholung der Einzahlung in deiner Wallet.', settlementConfirmed: 'Settlement onchain bestätigt. Auszahlungsoperator wird benachrichtigt...', depositVerified: 'Einzahlung bestätigt. Der Operator hat deine Auszahlungsdaten erhalten.', verifyingAddress: 'Rechnungsadresse wird geprüft...', confirmTransfer: 'Bestätige die Stablecoin-Überweisung in deiner Wallet.', transferConfirmed: 'Überweisung onchain bestätigt. Rechnungsbetrag wird geprüft...', unableLoadP2p: 'P2P konnte nicht geladen werden.', unableCreateP2p: 'P2P-Auftrag konnte nicht erstellt werden.', unableVerifyDeposit: 'Einzahlung konnte nicht geprüft werden.', unableSendTransfer: 'Stablecoin-Überweisung konnte nicht gesendet werden.', unableVerifyInvoice: 'Rechnung konnte nicht geprüft werden.' }
  },
  es: {
    language: { preferences: 'Preferencias', hint: 'Elige el idioma de Outruna.' },
    common: { disconnect: 'Desconectar', processing: 'Procesando...', explorer: 'Explorador', max: 'Máx.', copyExplorerLink: 'Copiar enlace del explorador', expand: 'Expandir', collapse: 'Contraer' },
    wallet: { updateLogo: 'Actualizar logo', copyContract: 'Copiar contrato', removeCustomToken: 'Eliminar token personalizado' },
    gas: { connect: 'Conectar cuenta de gas', refreshBalance: 'Actualizar saldo', topUpButton: 'Recargar cuenta de gas', withdrawMax: 'Retirar máximo', eligibilityDescription: 'Outruna comprueba la elegibilidad de la cuenta de gas, pide a la billetera integrada que firme la transacción y después la envía.', hostedService: 'Esto usa servicios alojados de cuenta de gas.', connected: 'Conectada', signatureRequired: 'Se requiere firma', notConnected: 'No conectada', network: 'Red', token: 'Token', destination: 'Destino', chooseTopUpNetwork: 'Elige la red de recarga', chooseStablecoin: 'Elige una stablecoin', noTopUpNetwork: 'No hay red de recarga', noSupportedTopUpToken: 'No hay token de recarga compatible', depositAddressNotConfigured: 'Dirección de depósito no configurada', withdrawTo: 'Retirar a', embeddedWalletDestination: 'Destino de billetera integrada', noWalletDestination: 'No hay destino de billetera', chooseWithdrawNetwork: 'Elige la red de retiro', noWithdrawNetwork: 'No hay red de retiro', enoughBalance: 'Saldo suficiente', notUsable: 'No utilizable', supportsTransaction: 'La cuenta de gas admite esta transacción.', doesNotSupportTransaction: 'La cuenta de gas no admite esta transacción.', status: { idle: 'Inactiva', rabby_signing: 'Firmando', rabby_submitting: 'Enviando', rabby_submitted: 'Enviada' } },
    withdraw: { gasAccount: 'Cuenta de gas', nativeGas: 'Gas nativo', standard: 'Estándar', fast: 'Rápido', instant: 'Instantáneo', custom: 'Personalizado', sending: 'Enviando...' },
    customToken: { add: 'Añadir token' },
    p2p: { createInvoiceButton: 'Crear factura de depósito', creatingInvoice: 'Creando factura...', decimals: 'decimales', maxAmount: 'Máximo 150 $' },
    risk: { acknowledgeAddress: 'Entiendo el riesgo de la dirección', acknowledgeTransaction: 'Entiendo el riesgo de la transacción', continueSend: 'Continuar con el envío' },
    messages: { invoiceReady: 'Factura lista. Envía la cantidad exacta de stablecoin para continuar.', checkingDeposit: 'Comprobando el depósito exacto de stablecoin...', confirmCollection: 'Confirma la recogida del depósito en tu wallet.', settlementConfirmed: 'Liquidación confirmada onchain. Avisando al operador de pagos...', depositVerified: 'Depósito verificado. El operador ha recibido tus instrucciones de pago.', verifyingAddress: 'Verificando la dirección de la factura...', confirmTransfer: 'Confirma la transferencia de stablecoin en tu wallet.', transferConfirmed: 'Transferencia confirmada onchain. Comprobando el saldo de la factura...', unableLoadP2p: 'No se pudo cargar P2P.', unableCreateP2p: 'No se pudo crear el pedido P2P.', unableVerifyDeposit: 'No se pudo verificar el depósito.', unableSendTransfer: 'No se pudo enviar la transferencia de stablecoin.', unableVerifyInvoice: 'No se pudo verificar la factura.' }
  },
  hi: {
    language: { preferences: 'प्राथमिकताएं', hint: 'Outruna में उपयोग होने वाली भाषा चुनें।' },
    common: { disconnect: 'डिस्कनेक्ट करें', processing: 'प्रोसेस हो रहा है...', explorer: 'एक्सप्लोरर', max: 'अधिकतम', copyExplorerLink: 'एक्सप्लोरर लिंक कॉपी करें', expand: 'विस्तार करें', collapse: 'संकुचित करें' },
    wallet: { updateLogo: 'लोगो अपडेट करें', copyContract: 'कॉन्ट्रैक्ट कॉपी करें', removeCustomToken: 'कस्टम टोकन हटाएं' },
    gas: { connect: 'गैस अकाउंट कनेक्ट करें', refreshBalance: 'बैलेंस रिफ्रेश करें', topUpButton: 'गैस अकाउंट टॉप अप करें', withdrawMax: 'अधिकतम निकालें', eligibilityDescription: 'Outruna गैस अकाउंट की पात्रता जांचता है, एम्बेडेड वॉलेट से लेनदेन पर हस्ताक्षर कराता है और फिर उसे सबमिट करता है।', hostedService: 'यह होस्ट की गई गैस अकाउंट सेवाओं का उपयोग करता है।', connected: 'कनेक्टेड', signatureRequired: 'हस्ताक्षर आवश्यक', notConnected: 'कनेक्ट नहीं है', network: 'नेटवर्क', token: 'टोकन', destination: 'गंतव्य', chooseTopUpNetwork: 'टॉप-अप नेटवर्क चुनें', chooseStablecoin: 'स्टेबलकॉइन चुनें', noTopUpNetwork: 'कोई टॉप-अप नेटवर्क नहीं', noSupportedTopUpToken: 'कोई समर्थित टॉप-अप टोकन नहीं', depositAddressNotConfigured: 'डिपॉज़िट पता कॉन्फ़िगर नहीं है', withdrawTo: 'निकालें', embeddedWalletDestination: 'एम्बेडेड वॉलेट गंतव्य', noWalletDestination: 'कोई वॉलेट गंतव्य नहीं', chooseWithdrawNetwork: 'निकासी नेटवर्क चुनें', noWithdrawNetwork: 'कोई निकासी नेटवर्क नहीं', enoughBalance: 'पर्याप्त बैलेंस', notUsable: 'उपयोग योग्य नहीं', supportsTransaction: 'गैस अकाउंट इस लेनदेन का समर्थन करता है।', doesNotSupportTransaction: 'गैस अकाउंट इस लेनदेन का समर्थन नहीं करता।', status: { idle: 'निष्क्रिय', rabby_signing: 'हस्ताक्षर हो रहा है', rabby_submitting: 'सबमिट हो रहा है', rabby_submitted: 'सबमिट किया गया' } },
    withdraw: { gasAccount: 'गैस अकाउंट', nativeGas: 'नेटिव गैस', standard: 'स्टैंडर्ड', fast: 'तेज़', instant: 'तुरंत', custom: 'कस्टम', sending: 'भेजा जा रहा है...' },
    customToken: { add: 'टोकन जोड़ें' },
    p2p: { createInvoiceButton: 'डिपॉज़िट इनवॉइस बनाएं', creatingInvoice: 'इनवॉइस बन रहा है...', decimals: 'दशमलव', maxAmount: 'अधिकतम $150' },
    risk: { acknowledgeAddress: 'मैं पते का जोखिम समझता हूं', acknowledgeTransaction: 'मैं ट्रांजैक्शन का जोखिम समझता हूं', continueSend: 'भेजना जारी रखें' },
    messages: { invoiceReady: 'इनवॉइस तैयार है। जारी रखने के लिए सही स्टेबलकॉइन राशि भेजें।', checkingDeposit: 'सही स्टेबलकॉइन जमा की जांच हो रही है...', confirmCollection: 'अपने वॉलेट में जमा कलेक्शन की पुष्टि करें।', settlementConfirmed: 'सेटलमेंट ऑनचेन कन्फर्म है। पेआउट ऑपरेटर को सूचित किया जा रहा है...', depositVerified: 'जमा सत्यापित है। ऑपरेटर को आपकी पेआउट जानकारी मिल गई है।', verifyingAddress: 'इनवॉइस पता सत्यापित हो रहा है...', confirmTransfer: 'अपने वॉलेट में स्टेबलकॉइन ट्रांसफर की पुष्टि करें।', transferConfirmed: 'ट्रांसफर ऑनचेन कन्फर्म है। इनवॉइस बैलेंस जांचा जा रहा है...', unableLoadP2p: 'P2P लोड नहीं हो सका।', unableCreateP2p: 'P2P ऑर्डर नहीं बन सका।', unableVerifyDeposit: 'जमा सत्यापित नहीं हो सका।', unableSendTransfer: 'स्टेबलकॉइन ट्रांसफर नहीं भेजा जा सका।', unableVerifyInvoice: 'इनवॉइस सत्यापित नहीं हो सका।' }
  },
  ru: {
    language: { preferences: 'Настройки', hint: 'Выберите язык интерфейса Outruna.' },
    common: { disconnect: 'Отключить', processing: 'Обработка...', explorer: 'Обозреватель', max: 'Макс.', copyExplorerLink: 'Копировать ссылку обозревателя', expand: 'Развернуть', collapse: 'Свернуть' },
    wallet: { updateLogo: 'Обновить логотип', copyContract: 'Копировать контракт', removeCustomToken: 'Удалить пользовательский токен' },
    gas: { connect: 'Подключить газовый аккаунт', refreshBalance: 'Обновить баланс', topUpButton: 'Пополнить газовый аккаунт', withdrawMax: 'Вывести максимум', eligibilityDescription: 'Outruna проверяет доступность Газового аккаунта, просит Встроенный кошелек подписать транзакцию, затем отправляет её.', hostedService: 'Используются размещенные сервисы Газового аккаунта.', connected: 'Подключен', signatureRequired: 'Требуется подпись', notConnected: 'Не подключен', network: 'Сеть', token: 'Токен', destination: 'Получатель', chooseTopUpNetwork: 'Выберите сеть пополнения', chooseStablecoin: 'Выберите стейблкоин', noTopUpNetwork: 'Нет сети пополнения', noSupportedTopUpToken: 'Нет поддерживаемого токена пополнения', depositAddressNotConfigured: 'Адрес пополнения не настроен', withdrawTo: 'Вывести на', embeddedWalletDestination: 'Адрес Встроенного кошелька', noWalletDestination: 'Нет адреса кошелька', chooseWithdrawNetwork: 'Выберите сеть вывода', noWithdrawNetwork: 'Нет сети вывода', enoughBalance: 'Достаточно средств', notUsable: 'Недоступен', supportsTransaction: 'Газовый аккаунт поддерживает эту транзакцию.', doesNotSupportTransaction: 'Газовый аккаунт не поддерживает эту транзакцию.', status: { idle: 'Ожидание', rabby_signing: 'Подписание', rabby_submitting: 'Отправка', rabby_submitted: 'Отправлено' } },
    withdraw: { gasAccount: 'Газовый аккаунт', nativeGas: 'Нативный газ', standard: 'Стандарт', fast: 'Быстро', instant: 'Мгновенно', custom: 'Пользовательский', sending: 'Отправка...' },
    customToken: { add: 'Добавить токен' },
    p2p: { createInvoiceButton: 'Создать счёт для пополнения', creatingInvoice: 'Создание счёта...', decimals: 'десятичных знаков', maxAmount: 'Максимум 150 $' },
    risk: { acknowledgeAddress: 'Я понимаю риск адреса', acknowledgeTransaction: 'Я понимаю риск транзакции', continueSend: 'Продолжить отправку' },
    messages: { invoiceReady: 'Счёт готов. Отправьте точную сумму стейблкоина, чтобы продолжить.', checkingDeposit: 'Проверяем точное пополнение стейблкоином...', confirmCollection: 'Подтвердите получение пополнения в кошельке.', settlementConfirmed: 'Сеттлмент подтверждён ончейн. Уведомляем оператора выплаты...', depositVerified: 'Пополнение подтверждено. Оператор получил инструкции по выплате.', verifyingAddress: 'Проверяем адрес счёта...', confirmTransfer: 'Подтвердите перевод стейблкоина в кошельке.', transferConfirmed: 'Перевод подтверждён ончейн. Проверяем баланс счёта...', unableLoadP2p: 'Не удалось загрузить P2P.', unableCreateP2p: 'Не удалось создать P2P-заказ.', unableVerifyDeposit: 'Не удалось проверить пополнение.', unableSendTransfer: 'Не удалось отправить перевод стейблкоина.', unableVerifyInvoice: 'Не удалось проверить счёт.' }
  },
  zh: {
    language: { preferences: '偏好设置', hint: '选择 Outruna 使用的语言。' },
    common: { disconnect: '断开连接', processing: '处理中...', explorer: '区块浏览器', max: '最大', copyExplorerLink: '复制浏览器链接', expand: '展开', collapse: '收起' },
    wallet: { updateLogo: '更新图标', copyContract: '复制合约', removeCustomToken: '删除自定义代币' },
    gas: { connect: '连接 Gas Account', refreshBalance: '刷新余额', topUpButton: '充值 Gas Account', withdrawMax: '最大提现', eligibilityDescription: 'Outruna 会检查 Gas Account 资格，请求嵌入式钱包签署交易，然后提交交易。', hostedService: '此功能使用托管的 Gas Account 服务。', connected: '已连接', signatureRequired: '需要签名', notConnected: '未连接', network: '网络', token: '代币', destination: '目标地址', chooseTopUpNetwork: '选择充值网络', chooseStablecoin: '选择稳定币', noTopUpNetwork: '没有充值网络', noSupportedTopUpToken: '没有支持的充值代币', depositAddressNotConfigured: '未配置充值地址', withdrawTo: '提现至', embeddedWalletDestination: '嵌入式钱包地址', noWalletDestination: '没有钱包地址', chooseWithdrawNetwork: '选择提现网络', noWithdrawNetwork: '没有提现网络', enoughBalance: '余额充足', notUsable: '不可用', supportsTransaction: 'Gas Account 支持此交易。', doesNotSupportTransaction: 'Gas Account 不支持此交易。', status: { idle: '空闲', rabby_signing: '正在签名', rabby_submitting: '正在提交', rabby_submitted: '已提交' } },
    withdraw: { gasAccount: 'Gas Account', nativeGas: '原生 Gas', standard: '标准', fast: '快速', instant: '即时', custom: '自定义', sending: '发送中...' },
    customToken: { add: '添加代币' },
    p2p: { createInvoiceButton: '创建充值发票', creatingInvoice: '正在创建发票...', decimals: '小数位', maxAmount: '最高 150 美元' },
    risk: { acknowledgeAddress: '我了解地址风险', acknowledgeTransaction: '我了解交易风险', continueSend: '继续发送' },
    messages: { invoiceReady: '发票已准备好。请发送准确的稳定币金额以继续。', checkingDeposit: '正在检查准确的稳定币存款...', confirmCollection: '请在钱包中确认收取存款。', settlementConfirmed: '链上结算已确认。正在通知付款运营方...', depositVerified: '存款已验证。运营方已收到付款信息。', verifyingAddress: '正在验证发票地址...', confirmTransfer: '请在钱包中确认稳定币转账。', transferConfirmed: '转账已在链上确认。正在检查发票余额...', unableLoadP2p: '无法加载 P2P。', unableCreateP2p: '无法创建 P2P 订单。', unableVerifyDeposit: '无法验证存款。', unableSendTransfer: '无法发送稳定币转账。', unableVerifyInvoice: '无法验证发票。' }
  }
}

const gasTextOverrides = {
  bn: { gas: { selectNetwork: 'নেটওয়ার্ক নির্বাচন করুন', yourWallet: 'আপনার ওয়ালেট', fee: 'ফি', limit: 'সীমা', supportedToken: 'সমর্থিত টোকেন', supportedTokens: 'সমর্থিত টোকেন', supportedChain: 'সমর্থিত নেটওয়ার্ক', supportedChains: 'সমর্থিত নেটওয়ার্ক', rateLimitedCached: 'Gas Account পরিষেবায় অনুরোধের সীমা হয়েছে। ক্যাশ করা তথ্য দেখানো হচ্ছে।', transactions: 'লেনদেন', connectedMessage: 'Gas Account সংযুক্ত হয়েছে।' } },
  de: { gas: { selectNetwork: 'Netzwerk wählen', yourWallet: 'Deine Wallet', fee: 'Gebühr', limit: 'Limit', supportedToken: 'unterstützter Token', supportedTokens: 'unterstützte Token', supportedChain: 'unterstütztes Netzwerk', supportedChains: 'unterstützte Netzwerke', rateLimitedCached: 'Der Gas-Konto-Dienst begrenzt Anfragen. Zwischengespeicherte Daten werden angezeigt.', transactions: 'Transaktionen', connectedMessage: 'Gas-Konto verbunden.' } },
  es: { gas: { selectNetwork: 'Elegir red', yourWallet: 'Tu billetera', fee: 'Comisión', limit: 'Límite', supportedToken: 'token compatible', supportedTokens: 'tokens compatibles', supportedChain: 'red compatible', supportedChains: 'redes compatibles', rateLimitedCached: 'El servicio de cuenta de gas está limitando las solicitudes. Se muestran datos en caché.', transactions: 'Transacciones', connectedMessage: 'Cuenta de gas conectada.' } },
  hi: { gas: { selectNetwork: 'नेटवर्क चुनें', yourWallet: 'आपका वॉलेट', fee: 'शुल्क', limit: 'सीमा', supportedToken: 'समर्थित टोकन', supportedTokens: 'समर्थित टोकन', supportedChain: 'समर्थित नेटवर्क', supportedChains: 'समर्थित नेटवर्क', rateLimitedCached: 'गैस अकाउंट सेवा अनुरोधों को सीमित कर रही है। कैश किया हुआ डेटा दिखाया जा रहा है।', transactions: 'लेनदेन', connectedMessage: 'गैस अकाउंट कनेक्ट हो गया।' } },
  ru: { gas: { selectNetwork: 'Выберите сеть', yourWallet: 'Ваш кошелёк', fee: 'Комиссия', limit: 'Лимит', supportedToken: 'поддерживаемый токен', supportedTokens: 'поддерживаемых токенов', supportedChain: 'поддерживаемая сеть', supportedChains: 'поддерживаемых сетей', rateLimitedCached: 'Сервис Газового аккаунта ограничивает запросы. Показываем сохранённые данные.', transactions: 'Транзакции', connectedMessage: 'Газовый аккаунт подключён.' } },
  zh: { gas: { selectNetwork: '选择网络', yourWallet: '你的钱包', fee: '手续费', limit: '限额', supportedToken: '支持的代币', supportedTokens: '支持的代币', supportedChain: '支持的网络', supportedChains: '支持的网络', rateLimitedCached: 'Gas Account 服务正在限制请求。正在显示缓存数据。', transactions: '交易记录', connectedMessage: 'Gas Account 已连接。' } }
}

const flowTextOverrides = {
  bn: { common: { asset: 'অ্যাসেট' }, wallet: { embeddedWalletLabel: 'Embedded Wallet (Privy)', connectedWallet: 'সংযুক্ত ওয়ালেট', telegramVerified: 'যাচাইকৃত', telegramVerifying: 'যাচাই হচ্ছে', telegramError: 'ত্রুটি', telegramLinked: 'সংযুক্ত', telegramNotPresent: 'উপস্থিত নেই' }, swap: { succeeded: 'সফল', idle: 'নিষ্ক্রিয়', selectToken: 'টোকেন নির্বাচন করুন', selectTokens: 'সোয়াপ টোকেন নির্বাচন করুন' }, withdraw: { asset: 'অ্যাসেট', chooseBalance: 'এই নেটওয়ার্কে একটি ব্যালেন্স বেছে নিন', noBalance: 'কোনো ব্যালেন্স নেই', depositFunds: 'আগে এই নেটওয়ার্কে ফান্ড জমা করুন।', checkingGasCoverage: 'Gas Account কভারেজ পরীক্ষা হচ্ছে...', approveInWallet: 'ওয়ালেটে লেনদেন অনুমোদন করুন...', fundingNetworkGas: '{{asset}} পাঠানোর আগে নেটওয়ার্ক গ্যাস ফান্ড করা হচ্ছে...', waitingTransferConfirmation: '{{asset}} ট্রান্সফার নিশ্চিত হওয়ার অপেক্ষা করা হচ্ছে...', transferConfirmed: 'ট্রান্সফার অনচেইনে নিশ্চিত হয়েছে।', transferFailed: 'ট্রান্সফার ব্যর্থ হয়েছে।', preparingTransaction: 'লেনদেন প্রস্তুত হচ্ছে...', gasAccountHint: 'ওয়ালেট গ্যাস থাকলে সেটি ব্যবহার করা হয়; নেটিভ গ্যাস কম হলে Gas Account গ্যাস ফান্ড করে।', nativeGasHint: 'ওয়ালেট সরাসরি {{symbol}} দিয়ে গ্যাস দেয়।', estimatedFee: 'আনুমানিক ফি: ~{{amount}}' } },
  de: { common: { asset: 'Asset' }, wallet: { embeddedWalletLabel: 'Embedded Wallet (Privy)', connectedWallet: 'Verbundene Wallet', telegramVerified: 'Bestätigt', telegramVerifying: 'Wird geprüft', telegramError: 'Fehler', telegramLinked: 'Verknüpft', telegramNotPresent: 'Nicht vorhanden' }, swap: { succeeded: 'Erfolgreich', idle: 'Inaktiv', selectToken: 'Token auswählen', selectTokens: 'Swap-Token auswählen' }, withdraw: { asset: 'Asset', chooseBalance: 'Wähle ein Guthaben in diesem Netzwerk', noBalance: 'Kein Guthaben verfügbar', depositFunds: 'Zahle zuerst Geld in diesem Netzwerk ein.', checkingGasCoverage: 'Gas-Konto-Deckung wird geprüft...', approveInWallet: 'Bestätige die Transaktion in deiner Wallet...', fundingNetworkGas: 'Netzwerk-Gas wird vor dem Senden von {{asset}} aufgeladen...', waitingTransferConfirmation: 'Warte auf die Bestätigung der {{asset}}-Überweisung...', transferConfirmed: 'Überweisung onchain bestätigt.', transferFailed: 'Überweisung fehlgeschlagen.', preparingTransaction: 'Transaktion wird vorbereitet...', gasAccountHint: 'Verwendet vorhandenes Wallet-Gas; das Gas-Konto finanziert nur bei zu wenig nativem Gas.', nativeGasHint: 'Die Wallet bezahlt Gas direkt in {{symbol}}.', estimatedFee: 'Geschätzte Gebühr: ~{{amount}}' } },
  es: { common: { asset: 'activo' }, wallet: { embeddedWalletLabel: 'Embedded Wallet (Privy)', connectedWallet: 'Billetera conectada', telegramVerified: 'Verificado', telegramVerifying: 'Verificando', telegramError: 'Error', telegramLinked: 'Vinculado', telegramNotPresent: 'No disponible' }, swap: { succeeded: 'Correcto', idle: 'Inactivo', selectToken: 'Seleccionar token', selectTokens: 'Seleccionar tokens de swap' }, withdraw: { asset: 'Activo', chooseBalance: 'Elige un saldo en esta red', noBalance: 'No hay saldo disponible', depositFunds: 'Deposita fondos primero en esta red.', checkingGasCoverage: 'Comprobando cobertura de cuenta de gas...', approveInWallet: 'Aprueba la transacción en tu wallet...', fundingNetworkGas: 'Financiando gas de red antes de enviar {{asset}}...', waitingTransferConfirmation: 'Esperando la confirmación de la transferencia de {{asset}}...', transferConfirmed: 'Transferencia confirmada onchain.', transferFailed: 'La transferencia falló.', preparingTransaction: 'Preparando transacción...', gasAccountHint: 'Usa el gas de la wallet cuando está disponible; la cuenta de gas solo financia gas si falta gas nativo.', nativeGasHint: 'La wallet paga gas directamente en {{symbol}}.', estimatedFee: 'Comisión estimada: ~{{amount}}' } },
  hi: { common: { asset: 'एसेट' }, wallet: { embeddedWalletLabel: 'Embedded Wallet (Privy)', connectedWallet: 'कनेक्टेड वॉलेट', telegramVerified: 'सत्यापित', telegramVerifying: 'सत्यापन हो रहा है', telegramError: 'त्रुटि', telegramLinked: 'लिंक्ड', telegramNotPresent: 'मौजूद नहीं' }, swap: { succeeded: 'सफल', idle: 'निष्क्रिय', selectToken: 'टोकन चुनें', selectTokens: 'स्वैप टोकन चुनें' }, withdraw: { asset: 'एसेट', chooseBalance: 'इस नेटवर्क पर बैलेंस चुनें', noBalance: 'कोई बैलेंस उपलब्ध नहीं', depositFunds: 'पहले इस नेटवर्क पर फंड जमा करें।', checkingGasCoverage: 'गैस अकाउंट कवरेज जांचा जा रहा है...', approveInWallet: 'अपने वॉलेट में लेनदेन स्वीकृत करें...', fundingNetworkGas: '{{asset}} भेजने से पहले नेटवर्क गैस फंड की जा रही है...', waitingTransferConfirmation: '{{asset}} ट्रांसफर की पुष्टि का इंतजार है...', transferConfirmed: 'ट्रांसफर ऑनचेन कन्फर्म हुआ।', transferFailed: 'ट्रांसफर विफल हुआ।', preparingTransaction: 'लेनदेन तैयार हो रहा है...', gasAccountHint: 'उपलब्ध होने पर वॉलेट गैस का उपयोग होता है; नेटिव गैस कम होने पर गैस अकाउंट फंड करता है।', nativeGasHint: 'वॉलेट सीधे {{symbol}} में गैस देता है।', estimatedFee: 'अनुमानित शुल्क: ~{{amount}}' } },
  ru: { common: { asset: 'актив' }, wallet: { embeddedWalletLabel: 'Встроенный кошелёк (Privy)', connectedWallet: 'Подключённый кошелёк', telegramVerified: 'Подтверждён', telegramVerifying: 'Проверка', telegramError: 'Ошибка', telegramLinked: 'Подключён', telegramNotPresent: 'Не подключён' }, swap: { succeeded: 'Успешно', idle: 'Ожидание', selectToken: 'Выберите токен', selectTokens: 'Выберите токены для обмена' }, withdraw: { asset: 'Актив', chooseBalance: 'Выберите баланс в этой сети', noBalance: 'Нет доступного баланса', depositFunds: 'Сначала пополните средства в этой сети.', checkingGasCoverage: 'Проверяем покрытие Газового аккаунта...', approveInWallet: 'Подтвердите транзакцию в кошельке...', fundingNetworkGas: 'Пополняем газ сети перед отправкой {{asset}}...', waitingTransferConfirmation: 'Ожидаем подтверждение перевода {{asset}}...', transferConfirmed: 'Перевод подтверждён ончейн.', transferFailed: 'Перевод не выполнен.', preparingTransaction: 'Подготавливаем транзакцию...', gasAccountHint: 'Использует газ кошелька, когда он доступен; Газовый аккаунт пополняет газ только при недостатке нативного газа.', nativeGasHint: 'Кошелёк оплачивает газ напрямую в {{symbol}}.', estimatedFee: 'Расчётная комиссия: ~{{amount}}' } },
  zh: { common: { asset: '资产' }, wallet: { embeddedWalletLabel: '嵌入式钱包（Privy）', connectedWallet: '已连接钱包', telegramVerified: '已验证', telegramVerifying: '验证中', telegramError: '错误', telegramLinked: '已关联', telegramNotPresent: '未关联' }, swap: { succeeded: '成功', idle: '空闲', selectToken: '选择代币', selectTokens: '选择兑换代币' }, withdraw: { asset: '资产', chooseBalance: '选择此网络上的余额', noBalance: '没有可用余额', depositFunds: '请先在此网络上存入资金。', checkingGasCoverage: '正在检查 Gas Account 覆盖情况...', approveInWallet: '请在钱包中批准交易...', fundingNetworkGas: '发送 {{asset}} 前正在补充网络 Gas...', waitingTransferConfirmation: '正在等待 {{asset}} 转账确认...', transferConfirmed: '转账已在链上确认。', transferFailed: '转账失败。', preparingTransaction: '正在准备交易...', gasAccountHint: '有可用余额时使用钱包 Gas；仅在原生 Gas 不足时由 Gas Account 补充。', nativeGasHint: '钱包直接使用 {{symbol}} 支付 Gas。', estimatedFee: '预估费用：~{{amount}}' } }
}

const gasLayoutOverrides = {
  bn: { gas: { account: 'অ্যাকাউন্ট', balance: 'ব্যালেন্স', latestCheck: 'সর্বশেষ যোগ্যতা পরীক্ষা', copyDepositAddress: 'গ্যাস জমার ঠিকানা কপি করুন' } },
  de: { gas: { account: 'Konto', balance: 'Guthaben', latestCheck: 'Letzte Berechtigungsprüfung', copyDepositAddress: 'Gas-Einzahlungsadresse kopieren' } },
  es: { gas: { account: 'Cuenta', balance: 'Saldo', latestCheck: 'Última comprobación de elegibilidad', copyDepositAddress: 'Copiar dirección de depósito de gas' } },
  hi: { gas: { account: 'अकाउंट', balance: 'बैलेंस', latestCheck: 'नवीनतम पात्रता जांच', copyDepositAddress: 'गैस जमा पता कॉपी करें' } },
  ru: { gas: { account: 'Аккаунт', balance: 'Баланс', latestCheck: 'Последняя проверка доступности', copyDepositAddress: 'Копировать адрес пополнения газа' } },
  zh: { gas: { account: '账户', balance: '余额', latestCheck: '最近资格检查', copyDepositAddress: '复制 Gas 充值地址' } }
}

const swapNoticeOverrides = {
  bn: { swap: { customNotice: 'কাস্টম টোকেন সোয়াপ করার আগে, সেটি আপনার ওয়ালেটে যোগ করুন।' } },
  de: { swap: { customNotice: 'Füge einen benutzerdefinierten Token zuerst zu deiner Wallet hinzu.' } },
  es: { swap: { customNotice: 'Para intercambiar un token personalizado, añádelo primero a tu wallet.' } },
  hi: { swap: { customNotice: 'कस्टम टोकन स्वैप करने से पहले, उसे अपने वॉलेट में जोड़ें।' } },
  ru: { swap: { customNotice: 'Чтобы обменять пользовательский токен, сначала добавьте его в кошелёк.' } },
  zh: { swap: { customNotice: '兑换自定义代币前，请先将其添加到钱包。' } }
}

const p2pLimitOverrides = {
  ru: { p2p: { limit: 'От $50 до $150', amountRange: 'От $' + '{{minimum}} до $' + '{{maximum}}' } }
}

const p2pPayoutMethodOverrides = {
  bn: { p2p: { bankCard: 'ব্যাংক কার্ড', phone: 'ফোন', cardNumber: 'কার্ড নম্বর', phoneNumber: 'ফোন নম্বর' } },
  de: { p2p: { bankCard: 'Bankkarte', phone: 'Telefon', cardNumber: 'Kartennummer', phoneNumber: 'Telefonnummer' } },
  es: { p2p: { bankCard: 'Tarjeta bancaria', phone: 'Teléfono', cardNumber: 'Número de tarjeta', phoneNumber: 'Número de teléfono' } },
  hi: { p2p: { bankCard: 'बैंक कार्ड', phone: 'फ़ोन', cardNumber: 'कार्ड नंबर', phoneNumber: 'फ़ोन नंबर' } },
  ru: { p2p: { bankCard: 'Банковская карта', phone: 'Телефон', cardNumber: 'Номер карты', phoneNumber: 'Номер телефона для СБП' } },
  zh: { p2p: { bankCard: '银行卡', phone: '手机', cardNumber: '卡号', phoneNumber: '手机号码' } }
}

const p2pRateOverrides = {
  bn: { p2p: { approximateReceive: 'আনুমানিক প্রাপ্তি: {{amount}} RUB' } },
  de: { p2p: { approximateReceive: 'Voraussichtlich erhalten: {{amount}} RUB' } },
  es: { p2p: { approximateReceive: 'Recibirás aproximadamente: {{amount}} RUB' } },
  hi: { p2p: { approximateReceive: 'लगभग प्राप्त: {{amount}} RUB' } },
  ru: { p2p: { approximateReceive: 'Примерно получите: {{amount}} RUB' } },
  zh: { p2p: { approximateReceive: '预计收到：{{amount}} RUB' } }
}

const dialogTextOverrides = {
  bn: { withdraw: { subtitle: 'আপনার ওয়ালেট থেকে অ্যাসেট তুলুন' }, customToken: { subtitle: 'আপনার ওয়ালেটে একটি কাস্টম টোকেন যোগ করুন' }, risk: { close: 'ঝুঁকি ডায়ালগ বন্ধ করুন', title: 'লেনদেনের ঝুঁকি', subtitle: 'চালিয়ে যাওয়ার আগে ঝুঁকি পর্যালোচনা করুন', summary: 'এই লেনদেনে আপনার ফান্ড বা অ্যাসেটের ঝুঁকি থাকতে পারে। ঝুঁকি বুঝলে তবেই চালিয়ে যান।', whatCouldGoWrong: 'কী ভুল হতে পারে?', confirmation: 'আমি ঝুঁকি বুঝেছি এবং চালিয়ে যেতে চাই।', goBack: 'ফিরে যান', continueAnyway: 'তবুও চালিয়ে যান' } },
  de: { withdraw: { subtitle: 'Assets aus deiner Wallet auszahlen' }, customToken: { subtitle: 'Benutzerdefinierten Token zur Wallet hinzufügen' }, risk: { close: 'Risikodialog schließen', title: 'Transaktionsrisiko', subtitle: 'Prüfe die Risiken, bevor du fortfährst', summary: 'Diese Transaktion kann Risiken für deine Gelder oder Assets enthalten. Fahre nur fort, wenn du sie verstehst.', whatCouldGoWrong: 'Was kann schiefgehen?', confirmation: 'Ich verstehe die Risiken und möchte fortfahren.', goBack: 'Zurück', continueAnyway: 'Trotzdem fortfahren' } },
  es: { withdraw: { subtitle: 'Retira activos de tu wallet' }, customToken: { subtitle: 'Añade un token personalizado a tu wallet' }, risk: { close: 'Cerrar diálogo de riesgo', title: 'Riesgo de la transacción', subtitle: 'Revisa los riesgos antes de continuar', summary: 'Esta transacción puede implicar riesgos para tus fondos o activos. Continúa solo si los entiendes.', whatCouldGoWrong: '¿Qué podría salir mal?', confirmation: 'Entiendo los riesgos y quiero continuar.', goBack: 'Volver', continueAnyway: 'Continuar de todos modos' } },
  hi: { withdraw: { subtitle: 'अपने वॉलेट से एसेट निकालें' }, customToken: { subtitle: 'अपने वॉलेट में कस्टम टोकन जोड़ें' }, risk: { close: 'जोखिम संवाद बंद करें', title: 'लेनदेन का जोखिम', subtitle: 'जारी रखने से पहले जोखिम की समीक्षा करें', summary: 'इस लेनदेन में आपके फंड या एसेट के लिए जोखिम हो सकता है। जोखिम समझने पर ही जारी रखें।', whatCouldGoWrong: 'क्या गलत हो सकता है?', confirmation: 'मैं जोखिम समझता हूं और जारी रखना चाहता हूं।', goBack: 'वापस जाएं', continueAnyway: 'फिर भी जारी रखें' } },
  ru: { withdraw: { subtitle: 'Вывод средств из кошелька' }, customToken: { subtitle: 'Добавьте пользовательский токен в кошелёк' }, risk: { close: 'Закрыть окно риска', title: 'Риск транзакции', subtitle: 'Проверьте риски перед продолжением', summary: 'Эта транзакция может быть связана с риском для ваших средств или активов. Продолжайте, только если понимаете последствия.', whatCouldGoWrong: 'Что может пойти не так?', confirmation: 'Я понимаю риски и хочу продолжить.', goBack: 'Назад', continueAnyway: 'Всё равно продолжить' } },
  zh: { withdraw: { subtitle: '从钱包提取资产' }, customToken: { subtitle: '将自定义代币添加到钱包' }, risk: { close: '关闭风险对话框', title: '交易风险', subtitle: '继续之前请查看风险', summary: '此交易可能会给你的资金或资产带来风险。请在了解风险后继续。', whatCouldGoWrong: '可能出现什么问题？', confirmation: '我了解风险，并希望继续。', goBack: '返回', continueAnyway: '仍然继续' } }
}

const securityTextOverrides = {
  bn: { security: { twoFactorDescription: '2FA দিয়ে ওয়ালেট লেনদেন সুরক্ষিত করুন।', enabled: 'চালু', disabled: 'বন্ধ', enableTwoFactor: '2FA চালু করুন', manageTwoFactor: '2FA পরিচালনা করুন' } },
  de: { security: { twoFactorDescription: 'Schütze Wallet-Transaktionen mit 2FA.', enabled: 'Aktiviert', disabled: 'Deaktiviert', enableTwoFactor: '2FA aktivieren', manageTwoFactor: '2FA verwalten' } },
  es: { security: { twoFactorDescription: 'Protege las transacciones de tu wallet con 2FA.', enabled: 'Activado', disabled: 'Desactivado', enableTwoFactor: 'Activar 2FA', manageTwoFactor: 'Gestionar 2FA' } },
  hi: { security: { twoFactorDescription: '2FA से वॉलेट लेनदेन सुरक्षित करें।', enabled: 'चालू', disabled: 'बंद', enableTwoFactor: '2FA चालू करें', manageTwoFactor: '2FA प्रबंधित करें' } },
  ru: { security: { twoFactorDescription: 'Защитите транзакции кошелька с помощью 2FA.', enabled: 'Включена', disabled: 'Выключена', enableTwoFactor: 'Включить 2FA (МФА)', manageTwoFactor: '2FA (МФА)' } },
  zh: { security: { twoFactorDescription: '使用 2FA 保护钱包交易。', enabled: '已启用', disabled: '已停用', enableTwoFactor: '启用 2FA', manageTwoFactor: '管理 2FA' } }
}

const translations = Object.fromEntries(Object.entries(overrides).map(([locale, values]) => {
  const localeValues = mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(mergeMessages(values, tariTextOverrides[locale]), buttonOverrides[locale]), gasTextOverrides[locale]), flowTextOverrides[locale]), gasLayoutOverrides[locale]), swapNoticeOverrides[locale]), p2pLimitOverrides[locale]), p2pPayoutMethodOverrides[locale]), p2pRateOverrides[locale]), dialogTextOverrides[locale]), securityTextOverrides[locale])
  return [locale, mergeMessages(english, localeValues)]
}))
translations.en = english

function mergeMessages (base, override) {
  const output = { ...base }
  for (const [key, value] of Object.entries(override || {})) {
    output[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? { ...base[key], ...value }
      : value
  }
  return output
}

function normalizeLocale (value) {
  const code = String(value || '').trim().toLowerCase().replace('_', '-')
  const base = code.split('-')[0]
  return LANGUAGE_OPTIONS.some((item) => item.code === base) ? base : 'en'
}

function resolveMessage (definition, id, fields = {}) {
  const value = String(id || '').split('.').reduce((current, key) => current?.[key], definition)
  if (typeof value !== 'string') return id
  return value.replace(/{{\s*([\w]+)\s*}}/g, (match, key) => {
    return fields[key] === undefined || fields[key] === null ? match : String(fields[key])
  })
}

export function detectTelegramLocale () {
  const webApp = getTelegramWebApp()
  const telegramLanguage = webApp?.initDataUnsafe?.user?.language_code
  if (telegramLanguage) return normalizeLocale(telegramLanguage)
  if (typeof navigator !== 'undefined') return normalizeLocale(navigator.language)
  return 'en'
}

export const I18nContext = createContext({
  locale: 'en',
  isLocaleExplicit: false,
  setLocale: () => {},
  languageOptions: LANGUAGE_OPTIONS,
  t: (id) => id
})

export function I18nProvider ({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return detectTelegramLocale()
    return normalizeLocale(window.localStorage.getItem('outruna:language') || detectTelegramLocale())
  })
  const [isLocaleExplicit, setIsLocaleExplicit] = useState(() => {
    if (typeof window === 'undefined') return false
    return Boolean(window.localStorage.getItem('outruna:language'))
  })
  const setLocale = useCallback((nextLocale, options = {}) => {
    const normalized = normalizeLocale(nextLocale)
    setLocaleState(normalized)
    setIsLocaleExplicit(options.explicit !== false)
    if (options.persist === false) return
    try {
      window.localStorage.setItem('outruna:language', normalized)
    } catch {

    }
  }, [])
  const t = (id, fields) => resolveMessage(translations[locale], id, fields)
  const context = useMemo(
    () => ({ locale, isLocaleExplicit, setLocale, languageOptions: LANGUAGE_OPTIONS, t }),
    [isLocaleExplicit, locale, setLocale]
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return createElement(
    I18nContext.Provider,
    { value: context },
    createElement(IntlProvider, { definition: translations[locale] }, children)
  )
}

export function useI18n () {
  return useContext(I18nContext)
}

export function T ({ id, children, fields, plural }) {
  return createElement(Text, { id, fields, plural }, children)
}

const knownMessages = new Map([
  ['Invoice ready. Send the exact stablecoin amount to continue.', 'messages.invoiceReady'],
  ['Checking the exact stablecoin deposit...', 'messages.checkingDeposit'],
  ['Confirm deposit collection in your wallet.', 'messages.confirmCollection'],
  ['Settlement confirmed onchain. Notifying the payout operator...', 'messages.settlementConfirmed'],
  ['Deposit verified. The operator has received your payout instructions.', 'messages.depositVerified'],
  ['Verifying the invoice address...', 'messages.verifyingAddress'],
  ['Confirm the stablecoin transfer in your wallet.', 'messages.confirmTransfer'],
  ['Transfer confirmed onchain. Checking the invoice balance...', 'messages.transferConfirmed'],
  ['Unable to load P2P', 'messages.unableLoadP2p'],
  ['Unable to create P2P order', 'messages.unableCreateP2p'],
  ['Unable to verify the deposit', 'messages.unableVerifyDeposit'],
  ['Unable to send the stablecoin transfer', 'messages.unableSendTransfer'],
  ['Unable to verify the invoice', 'messages.unableVerifyInvoice']
])

export function LocalizedMessage ({ message }) {
  const value = String(message || '')
  const normalized = value.replace(/…/g, '...')
  const id = knownMessages.get(normalized) || knownMessages.get(normalized.replace(/[.!]$/, ''))
  return id ? <T id={id}>{value}</T> : value
}
