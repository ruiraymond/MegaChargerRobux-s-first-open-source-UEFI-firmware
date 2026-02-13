#!/usr/bin/env bash
set -euo pipefail

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required. Install Node.js LTS first." >&2
  exit 1
fi

npm install

echo "Dependencies installed."
echo "Run: npm run dev"
