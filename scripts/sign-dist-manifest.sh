#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="${1:-$ROOT_DIR/dist}"
PRIVATE_KEY="${RELEASE_PRIVATE_KEY:-$ROOT_DIR/release-private.pem}"

if [[ ! -f "$PRIVATE_KEY" ]]; then
  echo "Missing release private key: $PRIVATE_KEY" >&2
  echo "Set RELEASE_PRIVATE_KEY to an offline signing key." >&2
  exit 1
fi

if [[ ! -f "$DIST_DIR/SHA256SUMS" ]]; then
  echo "Missing manifest: $DIST_DIR/SHA256SUMS" >&2
  echo "Run npm run integrity:manifest first." >&2
  exit 1
fi

openssl pkeyutl \
  -sign \
  -rawin \
  -inkey "$PRIVATE_KEY" \
  -out "$DIST_DIR/SHA256SUMS.sig" \
  -in "$DIST_DIR/SHA256SUMS"

echo "Wrote $DIST_DIR/SHA256SUMS.sig"
