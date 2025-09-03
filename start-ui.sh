#!/bin/bash
# Script to start the AEM UI server

echo "Starting AEM UI server..."
echo "Open your browser and navigate to http://localhost:8000"
echo "Press Ctrl+C to stop the server"

cd aem-ui && python3 -m http.server 8000