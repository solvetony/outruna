#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="${1:-$ROOT_DIR/dist}"
PUBLIC_KEY="${RELEASE_PUBLIC_KEY:-$ROOT_DIR/release-public.pem}"

if [[ ! -f "$PUBLIC_KEY" ]]; then
  echo "Missing release public key: $PUBLIC_KEY" >&2
  echo "Set RELEASE_PUBLIC_KEY to the trusted public key." >&2
  exit 1
fi

for required in SHA256SUMS SHA256SUMS.sig; do
  if [[ ! -f "$DIST_DIR/$required" ]]; then
    echo "Missing $DIST_DIR/$required" >&2
    exit 1
  fi
done

openssl pkeyutl \
  -verify \
  -rawin \
  -pubin \
  -inkey "$PUBLIC_KEY" \
  -sigfile "$DIST_DIR/SHA256SUMS.sig" \
  -in "$DIST_DIR/SHA256SUMS"

(cd "$DIST_DIR" && sha256sum -c SHA256SUMS)
echo "Verified $DIST_DIR"
