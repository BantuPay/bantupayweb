#!/usr/bin/env bash
# Regenerate the design-sync cssEntry (.design-sync/ds-styles.css) from the
# app's globals.css. Run before package-build.mjs on a fresh clone / re-sync.
# Output is gitignored (derived from src/app/globals.css + tailwind.config.mjs).
set -euo pipefail
cd "$(dirname "$0")/.."
node_modules/.bin/tailwindcss -i src/app/globals.css -o .design-sync/ds-compiled.css --config tailwind.config.mjs
cat .design-sync/ds-css-header.css .design-sync/ds-compiled.css > .design-sync/ds-styles.css
echo "wrote .design-sync/ds-styles.css"
