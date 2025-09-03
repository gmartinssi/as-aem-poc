#!/bin/bash

# AEM CLI Simulation Demo Script

echo "=== AEM CLI Simulation Demo ==="
echo ""

echo "1. Showing CLI help:"
node bin/aem-cli.js --help
echo ""

echo "2. Installing content package:"
node bin/aem-cli.js install
echo ""

echo "3. Showing content info:"
node bin/aem-cli.js info
echo ""

echo "4. Listing root content:"
node bin/aem-cli.js list -p /
echo ""

echo "5. Listing content in /content/wiley/author-services:"
node bin/aem-cli.js list -p /content/wiley/author-services
echo ""

echo "6. Getting specific content (first 20 lines):"
node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json | head -20
echo ""

echo "7. Exporting content:"
node bin/aem-cli.js export -p /content/wiley/author-services -o exported-content.json
echo "Exported content to exported-content.json"
echo ""

echo "Demo complete!"