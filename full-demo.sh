#!/bin/bash
# Comprehensive Demo Script for AEM CLI and UI

echo "=========================================="
echo " AEM CLI and UI Demo Setup"
echo "=========================================="
echo ""

# Check if required tools are installed
echo "Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js to run this demo."
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed. Please install Python 3 to run this demo."
    exit 1
fi

echo "✓ Node.js is installed"
echo "✓ Python 3 is installed"
echo ""

# Setup AEM CLI
echo "Setting up AEM CLI..."
echo "---------------------"
cd aem-cli

echo "Installing dependencies..."
if ! npm install; then
    echo "Error: Failed to install AEM CLI dependencies"
    exit 1
fi

echo ""
echo "Installing content package..."
if ! node bin/aem-cli.js install; then
    echo "Error: Failed to install content package"
    exit 1
fi

echo ""
echo "Verifying installation..."
if ! node bin/aem-cli.js info; then
    echo "Error: Failed to verify installation"
    exit 1
fi

cd ..
echo ""

echo "=========================================="
echo " SETUP COMPLETE"
echo "=========================================="
echo "✓ AEM CLI is set up and ready to use"
echo ""
echo "To start the UI, run:"
echo "  ./start-ui.sh"
echo ""
echo "Or manually:"
echo "  cd aem-ui"
echo "  python3 -m http.server 8000"
echo ""
echo "Then open your browser to http://localhost:8000"
echo ""
echo "AEM CLI commands you can try:"
echo "  cd aem-cli"
echo "  node bin/aem-cli.js list -p /content"
echo "  node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json"
echo "  node bin/aem-cli.js info"
echo ""