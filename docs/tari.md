# Tari Mainnet wallet

Tari is a separate wallet family. The six numeric EVM network IDs and Privy provider remain unchanged. `src/tari/` owns the WASM, recovery, storage, scanner and transaction boundary. `src/components/TariWallet.jsx` uses Outruna's existing sheets, navigation styles, QR generator, icons and localization. English Tari messages inherit into all seven supported language dictionaries pending translation review.

## Recovery and local security

There is no Tari mnemonic UI, backend backup service, EVM-derived secret, Google Drive recovery or testnet UI. Authentication identifies which local record to open; it does not derive or recover its cryptographic key.

The portable file is `outruna-tari-mainnet-YYYY-MM-DD.backup`, MIME `application/vnd.outruna.tari-backup+json`. Its JSON envelope contains `format: outruna-tari-backup`, `version: 1`, `network: mainnet`, Base58 address, ISO creation time, exact scrypt parameters N=32768/r=8/p=1/dkLen=32, a 16-byte salt, AES-256-GCM, a 12-byte IV, and ciphertext including the authentication tag. Salt, IV and ciphertext use canonical padded Base64.

Authenticated additional data is UTF-8 `outruna-tari-backup|1|mainnet|ADDRESS`. The encrypted payload contains the internal recovery secret, mainnet, address, birthday timestamp and creation time. Import validates file size (256 KiB maximum), schema and fixed KDF costs before password derivation. After decryption it verifies both addresses against a newly restored WASM wallet. Wrong passwords and authentication failures produce the same message. Passwords are not trimmed or normalized.

IndexedDB `outruna-tari-v1` stores one record per stable Privy ID under `tari-wallet:<user-id>`. Each write generates a non-extractable AES-256-GCM key stored by structured clone and encrypts the entire recovery/state payload. Device AAD binds the format, user ID and address. Encryption completes before a single IndexedDB transaction replaces the prior record. File passwords and derived file keys are not stored. Web Locks prevent concurrent modification by two same-origin tabs where supported.

The encrypted file and its password alone restore the wallet on another device, without a UTXO cache or Outruna backend. The application/WASM software and Tari query service are still needed to discover blockchain funds. A backup is not proof of the current balance. Local outgoing history metadata is not part of recovery; rescanning recovers owned blockchain outputs, not historical recipients recorded only on the old device.

Export status records only that download generation was initiated. Keep the file somewhere durable and separate from its password. Clearing site data removes the local key and wallet. Logout releases wallet/output handles, workers and decrypted references, retaining encrypted storage. Removal deletes only the selected user's Tari record. In-memory JavaScript strings cannot be reliably zeroized. XSS, malicious extensions, a modified served application or a compromised browser can access an unlocked wallet; encryption is not hardware isolation.

## Scanning and sending

Local writes and removal use an IndexedDB revision comparison inside the same read-write transaction. A stale tab cannot overwrite another tab's recovery record or pending-input reservations, even when Web Locks are unavailable. Conflicts stop writes and require reload; they are not downgraded to session-only operation. Import loads an existing local wallet before deciding whether replacement confirmation is required. Cancellation during scan shutdown remains cancelled through backup derivation.

Worker replies must contain exactly one boolean per requested output; malformed replies fall back to local ownership detection. Before signing, the scanned header is checked again and a rolled-back tip is rejected. Missing, malformed or internal-error broadcast responses retain reservations because they do not prove the transaction was rejected.

Queries use `https://rpc.tari.com` directly. Birthday recovery starts two hours before the recorded creation timestamp to allow clock skew. A resumed scan overlaps ten blocks and checks an earlier header anchor; a detected deeper reorg restarts at the birthday. Batches contain up to 50 blocks, with serialized network reads to limit public endpoint pressure. Ownership testing uses up to four module workers and falls back to yielding main-thread detection. RPC timeouts are 30 seconds; read retries wait 2, 5, 15 and 30 seconds. Cancellation stops workers and pending reads.

Projection responses are checked for contiguous block heights and complete pagination. Oversized blocks retry with larger bounded response limits. An unresolved partial block, missing hydration, malformed field or failed import stops progress without advancing the safe cursor past that block. Full public output records reconstruct WASM handles after reload. Maturity, missing handles, spent hashes and pending reservations exclude unsafe inputs. Local amounts use BigInt micro-Minotari (1 XTM = 1,000,000 micro-Minotari).

The pinned WASM builder uses a two-output fee reserve, even for an exact no-change spend. Its standard one-sided output size assumption is 264 feature/script bytes. Tests compare the 5 micro-Minotari/gram estimate to actual signed fees. Largest-first selection is deterministic; Max excludes uneconomic additional inputs. Signing occurs only after confirmation. A fee mismatch aborts before broadcast and requires another review.

Only serialized signed transactions leave the browser, via the fixed endpoint below. Inputs are reserved before broadcast to survive crashes or ambiguous timeouts. Explicit rejection releases the reservation; acceptance remains pending until all selected inputs are observed spent in the same block. Expected change is pending until the real output is scanned. An ambiguous broadcast timeout keeps inputs reserved; do not assume it failed. Unmined transactions have no automatic expiry or replacement in this version.

## Production proxy and CSP

Configure this **exact** same-origin location. Nginx replaces the matching URI with `/json_rpc`; no caller supplies an upstream URL. Do not log request bodies or attach account cookies/authorization to upstream traffic.

```nginx
location = /rpc/tari/mainnet/json_rpc {
    limit_except POST { deny all; }
    client_max_body_size 2m;
    proxy_pass https://rpc.tari.com/json_rpc;
    proxy_ssl_server_name on;
    proxy_ssl_name rpc.tari.com;
    proxy_set_header Host rpc.tari.com;
    proxy_set_header Cookie "";
    proxy_set_header Authorization "";
    proxy_set_header Referer "";
    proxy_connect_timeout 10s;
    proxy_read_timeout 30s;
}
```

The Vite development server implements the same fixed destination. Production and preview hosting must supply their own reverse proxy. No generic URL proxy is added. No wallet storage route is added to the Outruna backend.

Merge `https://rpc.tari.com` into the existing CSP `connect-src` allowlist and allow same-origin workers (`worker-src 'self'`). WASM needs `'wasm-unsafe-eval'` in `script-src` on CSP-enforcing browsers. Preserve the other existing policy entries. Do not add wildcard connections or general `'unsafe-eval'`. Serve `.wasm` as `application/wasm` and allow it through deployment asset handling.

All emitted files, including WASM and both workers, enter the existing SHA-256 manifest. The normal release signing and verification scripts are unchanged. Manifest verification validates the release files; it is not a replacement for runtime TLS/CSP or a browser security boundary.

## Verification

```sh
npm test
npm run build
npm run verify
```

Node 24 supports the package's WebAssembly module import; older compatible Node versions may require `NODE_OPTIONS=--experimental-wasm-modules` for tests. The repository must have its normal release signing key configured for the signed build. Do not commit private keys or generated release files.

With the development server running on port 5175, run `node scripts/check-tari-browser.mjs`. It uses system Chrome (`CHROME_BIN` may override its executable) at 390×740, an isolated temporary browser profile and mocked public chain responses. It checks create, QR, address copy argument, encrypted download, remove, restore, worker scanning, balance, Max, review and local signing. Its test page refuses transaction broadcast. It never uses real funds. The test harness is outside the production HTML entry point.

Physical Telegram/Android and iOS WebView checks, actual downloaded-file retention, physical QR scanning and a deliberately funded end-to-end Mainnet transaction still require release acceptance testing. Live Privy MFA, swaps, Gas Account and P2P require an authenticated account and their external services. Obtain an independent security review before holding material funds.

## Sources

- [Tari query service](https://github.com/tari-project/tari/blob/development/base_layer/core/src/base_node/rpc/query_service.rs), protocol behavior only.
- [WASM provenance](../vendor/tari-l1-wasm/SOURCE.md), independently licensed BSD package.
- [noble-hashes](https://github.com/paulmillr/noble-hashes), browser-compatible scrypt.
- [Nginx proxy_pass documentation](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass), URI replacement semantics.

No reference wallet application code, styling, Ootle integration or application state was copied.
