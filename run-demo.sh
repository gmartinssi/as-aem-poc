#!/bin/bash
# Script to run both AEM CLI demo and UI server

echo "=========================================="
echo " AEM CLI and UI Demo Runner"
echo "=========================================="
echo ""

# First run the setup
./full-demo.sh

echo ""
echo "Press Enter to start the UI server, or Ctrl+C to exit..."
read

./start-ui.sh