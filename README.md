# AEM Content Package with CLI Simulation and UI Browser

This repository contains an AEM content package structure enhanced with a CLI simulation tool and a web-based UI browser.

## Quick Start

### Option 1: Automated Setup and Run
```bash
./run-demo.sh
```

This will:
1. Set up the AEM CLI with all dependencies
2. Install the content package
3. Prompt you to start the web UI

### Option 2: Setup Only
```bash
./full-demo.sh
```

This will:
1. Set up the AEM CLI with all dependencies
2. Install the content package
3. Provide instructions for starting the UI manually

### Option 3: Manual Setup

#### AEM CLI

1. Navigate to the AEM CLI directory:
   ```bash
   cd aem-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install the content package:
   ```bash
   node bin/aem-cli.js install
   ```

4. Verify installation:
   ```bash
   node bin/aem-cli.js info
   ```

#### Web UI

1. Start the UI server:
   ```bash
   ./start-ui.sh
   ```
   
   Or manually:
   ```bash
   cd aem-ui
   python3 -m http.server 8000
   ```

2. Open your browser and navigate to http://localhost:8000

## AEM CLI Commands

```bash
# Install content package
node bin/aem-cli.js install

# List content in repository
node bin/aem-cli.js list -p /content

# Get specific content
node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json

# Export content
node bin/aem-cli.js export -p /content/wiley/author-services -o output.json

# Show package information
node bin/aem-cli.js info
```

## Available Scripts

- `./run-demo.sh` - Complete automated setup and run
- `./full-demo.sh` - Setup only, with instructions
- `./start-ui.sh` - Start the web UI server
- `./aem-cli-integration-demo.sh` - Show integration between UI and CLI

## Project Structure

```
├── aem-cli/              # AEM CLI simulation tool
│   ├── bin/              # Executable scripts
│   ├── lib/              # Library functions
│   ├── packages/         # Content packages
│   └── config/           # Configuration files
├── aem-ui/               # Web-based UI browser
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── index.html        # Main HTML file
├── jcr_root/             # Original AEM content structure
└── README.md             # Project documentation
```

## Requirements

- Node.js (for AEM CLI)
- Python 3 (for UI server)
- npm (Node package manager)

## Features

### AEM CLI Simulation
- Install content packages
- List content in the repository
- Get specific content as JSON
- Export content to files
- View information about installed content

### Web UI Browser
- Master-detail layout with sidebar navigation
- Responsive design that works on desktop and mobile
- Interactive content browsing
- Package information display
- Loading states and user feedback