#!/bin/bash
# Integration script showing how the UI could connect to the AEM CLI

echo "=== AEM CLI Integration Demo ==="
echo ""

echo "1. Getting package information:"
cd aem-cli && node bin/aem-cli.js info
echo ""

echo "2. Listing root content:"
cd ../aem-cli && node bin/aem-cli.js list -p /
echo ""

echo "3. Getting specific content (first 10 lines):"
cd ../aem-cli && node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json | head -10
echo ""

echo "In a full implementation, the UI would make API calls to a backend service"
echo "that executes these AEM CLI commands and returns the JSON output for rendering."