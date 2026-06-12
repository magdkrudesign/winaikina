#!/bin/bash
export PATH="/Users/magdalenakruk/.nvm/versions/node/v20.20.2/bin:$PATH"
cd "$(dirname "$0")"
node node_modules/next/dist/bin/next dev
