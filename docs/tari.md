# Tari Mainnet wallet

Tari is a separate wallet family. The six numeric EVM network IDs and Privy provider remain unchanged. `src/tari/` owns the WASM, recovery, storage, scanner and transaction boundary. `src/components/TariWallet.jsx` uses Outruna's existing sheets, navigation styles, QR generator, icons and localization. English Tari messages inherit into all seven supported language dictionaries pending translation review.

## Recovery and local security

There is no Tari mnemonic UI, backend backup service, EVM-derived secret, Google Drive recovery or testnet UI. Authentication identifies which local record to open; it does not derive or recover its cryptographic key.

The portable file is `outruna-tari-mainnet-YYYY-MM-DD.backup`, MIME `application/vnd.outruna.tari-backup+json`. Its JSON envelope contains `format: outruna-tari-backup`, `version: 1`, `network: mainnet`, Base58 address, ISO creation time, exact scrypt parameters N=32768/r=8/p=1/dkLen=32, a 16-byte salt, AES-256-GCM, a 12-byte IV, and ciphertext including the authentication tag. Salt, IV and ciphertext use canonical padded Base64.

Authenticated additional data is UTF-8 `outruna-tari-backup|1|mainnet|ADDRESS`. The encrypted payload contains the internal recovery secret, mainnet, address, birthday timestamp and creation time. Import validates file size (256 KiB maximum), schema and fixed KDF costs before password derivation. After decryption it verifies both addresses against a newly restored WASM wallet. Wrong passwords and authentication failures produce the same message. Passwords are not trimmed or normalized.

IndexedDB `outruna-tari-v1` stores one record per stable Privy ID under `tari-wallet:<user-id>`. Version 2 records split the private view key and scan cache from the spending recovery secret. The view record is encrypted with a non-extractable AES-256-GCM device key; it opens after authentication to scan balances. The spending secret is sealed separately with the user's Tari password using scrypt N=32768/r=8/p=1 and AES-256-GCM. A fresh salt and IV are generated for each seal. Authenticated data binds the user ID and address. Passwords and derived keys are not stored. A legacy version 1 record is migrated when the user sets a password and exports a backup; cached scan progress is not persisted until migration. Web Locks and revision checks prevent concurrent modification.

The encrypted file and its password alone restore the wallet on another device, without a UTXO cache or Outruna backend. The application/WASM software and Tari query service are still needed to discover blockchain funds. A backup is not proof of the current balance. Local outgoing history metadata is not part of recovery; rescanning recovers owned blockchain outputs, not historical recipients recorded only on the old device.

Export status records only that download generation was initiated. Keep the file somewhere durable and separate from its password. The export password also unlocks spending on this device. Withdraw asks for it after transaction review; signing authority expires after one minute and is released immediately after signing, closing the send dialog, or hiding the page. The private view key remains available for scanning while spending is locked. It reveals wallet output amounts and metadata, so it is encrypted locally and never sent to Outruna's backend. Clearing site data removes local access. Logout releases wallet/output handles, workers and decrypted references, retaining encrypted storage. Removal deletes only the selected user's Tari record. In-memory JavaScript strings cannot be reliably zeroized. XSS, malicious extensions, a modified served application or a compromised browser can capture passwords or access a currently unlocked wallet; encryption is not hardware isolation.

## Scanning and sending

Local writes and removal use an IndexedDB revision comparison inside the same read-write transaction. A stale tab cannot overwrite another tab's recovery record or pending-input reservations, even when Web Locks are unavailable. Conflicts stop writes and require reload; they are not downgraded to session-only operation. Import loads an existing local wallet before deciding whether replacement confirmation is required. Cancellation during scan shutdown remains cancelled through backup derivation.

Worker replies must contain exactly one boolean per requested output; malformed replies fall back to local ownership detection. Disposal immediately rejects new operations and aborts scanning, KDF workers and requests. It waits for existing work, including non-cancellable WebCrypto and synchronous WASM work, before freeing wallet/output handles and releasing the account lock. IndexedDB recovery remains intact. Missing, malformed or internal-error broadcast responses retain reservations because they do not prove the transaction was rejected.

Every tip must explicitly report `is_synced: true`, a block hash and a timestamp within 30 minutes of the device clock (at most five minutes ahead). Header heights, previous hashes and projection timestamps must agree throughout each scan batch. Sending requires the scanned tip and header to match the current public query service. A newer tip requires another scan. These are consistency checks, not browser verification of proof of work or output Merkle proofs; a compromised or stale public query service can still misrepresent chain data.

Queries use `https://rpc.tari.com` directly. Birthday recovery starts two hours before the recorded creation timestamp to allow clock skew. A resumed scan overlaps ten blocks and checks an earlier header anchor; a detected deeper reorg restarts at the birthday. Batches contain up to 50 blocks, with serialized network reads to limit public endpoint pressure. Ownership testing uses up to four module workers and falls back to yielding main-thread detection. RPC timeouts are 30 seconds; read retries wait 2, 5, 15 and 30 seconds. Cancellation stops workers and pending reads.

Projection responses are checked for contiguous block heights and linked headers. Tari's query service emits all output and input chunks for a block in one response, including when the final cursor repeats that block's hash. The scanner combines those chunks and continues at the next verified height. It does not use `page` as an output offset: upstream defines it as a block-height offset. Missing hydration, malformed fields or failed import stop progress without advancing the safe cursor past that block. View-only output recovery supplies balances while locked; full public output records reconstruct signing handles only during unlock. Maturity, missing handles, spent hashes and pending reservations exclude unsafe inputs. Local amounts use BigInt micro-Minotari (1 XTM = 1,000,000 micro-Minotari).

Amounts are capped at 32 UTF-8 bytes, addresses at 512 and passwords at 1024 before BigInt, WASM or scrypt work. Passwords still require at least 12 characters and preserve exact whitespace and Unicode. RPC bodies are streamed with a 16 MiB limit even without Content-Length; decoded byte fields are capped at 64 KiB. Backup files remain limited to 256 KiB. RPC and backup JSON, including decrypted backup plaintext, are limited to 16 nesting levels before JSON parsing. A response exceeding these limits stops synchronization safely and requires operator investigation.

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

The build emits `dist/security-headers.conf` for Nginx and `dist/_headers` for hosts supporting that format. The generated Nginx file contains the complete security header set, including CSP, Permissions-Policy, nosniff, Referrer-Policy and HSTS. Include it once inside the HTTPS server and remove duplicate manual `add_header` security directives. Ensure locations with their own `add_header` directives include it too, because Nginx header inheritance otherwise replaces the server directives. Vite development and preview enforce the same policy (development also permits local HMR WebSockets). A generated HTML meta policy enforces the compatible subset when hosting headers are accidentally omitted; `frame-ancestors` still requires the HTTP header.

The CSP allows same-origin scripts/workers, hash-pinned Telegram JavaScript, WASM compilation, explicit RPC/API connections and the required Privy/Telegram frames. Inline executable scripts, event attributes, remote workers, objects and base-URL changes are blocked. HTTPS images remain allowed for custom-token icons; inline styles support Preact/Privy and mobile layouts. Source permissions do not prevent already trusted scripts from accessing secrets or using allowed destinations. Serve `.wasm` as `application/wasm`.

The Telegram script is pinned by SHA-384 SRI and CSP hash in `index.html`, fetched from `https://telegram.org/js/telegram-web-app.js?62` on 2026-09-27. An upstream change fails closed. Review the changed script before updating the pin; the query suffix is not an immutable release identifier. Privy's custom Telegram OAuth flow uses its allowed frame, not a second unpinned Telegram widget script. CAPTCHA that injects a parent-page remote script is not allowed by this policy and needs a separately reviewed integration.

Trusted Types is report-only while existing EVM QR and third-party SDK HTML sinks remain. There is no permissive default Trusted Types policy. The Tari QR renders SVG nodes and numeric path commands without raw HTML. CoinGecko proxy fallbacks use only Outruna-controlled infrastructure. Review reports locally before enabling Trusted Types enforcement; do not transmit wallet HTML or secrets in reports.

Include `deploy/nginx-tari.conf` inside the HTTPS server for the fixed broadcast route. Query reads call `https://rpc.tari.com` directly; no separate Mainnet query service is required. The fixed route is only needed because the browser cannot submit JSON-RPC cross-origin to `rpc.tari.com`. No generic URL proxy is added. No wallet storage route is added to the Outruna backend.

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
- [Signing WASM provenance](../vendor/tari-l1-wasm/SOURCE.md), independently licensed BSD package.
- [View WASM provenance](../vendor/tari-view-wasm/SOURCE.md), reconstructed companion against Tari v5.6.0.
- [noble-hashes](https://github.com/paulmillr/noble-hashes), browser-compatible scrypt.
- [Nginx proxy_pass documentation](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass), URI replacement semantics.
- [Privy CSP requirements](https://docs.privy.io/security/implementation-guide/content-security-policy), authentication frames and RPC connections.

No reference wallet application code, styling, Ootle integration or application state was copied.
