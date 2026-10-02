# Tari faucet

The Tari Faucet tab allows logged-in users to request a random 0.5–1 XTM every 24 hours after Cloudflare Turnstile. Accepted requests stay pending until blockchain confirmation. Uncertain broadcasts must not be retried blindly.

The public faucet address and intentionally public private view key are in `src/tari/faucet.js`. A view-only wallet scans balance and funding locally. Known change outputs are excluded using backend records. The latest 100 public payouts show recipient, amount, and status, but not Outruna account IDs. The public view key cannot sign and is independent of users' own wallet keys.

Public funding outputs, spent status and the safe scan height/hash are cached in a separate `outruna-tari-faucet-v1` IndexedDB database, keyed by Mainnet address and birthday. Cached history appears while syncing; scans resume with a 10-block overlap after validating the saved block hash. A changed chain view triggers a rescan. Cache checkpoints are written every 50 heights and after successful or partially completed scans. Unavailable, corrupt or full storage falls back to in-memory scanning. This cache contains no user wallet keys, passwords or payout eligibility and is not a recovery backup.

Elliott's backend requires `TARI_FAUCET_BACKUP_HEX`, `TURNSTILE_SECRET_KEY`, and PostgreSQL. Neither secret is bundled in this frontend. Backend deployment and crash recovery instructions are in its `docs/tari-faucet.md`.

Cloudflare requires its live API script. The generated CSP allows the official script path and challenge connections/frames. Deploy generated headers alongside this build. Loading the faucet introduces an explicit Cloudflare script trust dependency on the wallet origin; the script is not hash-pinned.

To generate a dedicated Mainnet faucet wallet without writing a file:

```sh
sh scripts/generate-tari-faucet.sh
```

Output includes spending authority and may remain in terminal scrollback. Keep `TARI_FAUCET_BACKUP_HEX` server-only. `--check` validates generation and spending/view-only restore without printing secrets.
