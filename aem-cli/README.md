# AEM CLI Simulation Tool

This is a simulation of Adobe Experience Manager (AEM) CLI tools for managing content packages. It provides functionality to install, list, and export AEM content packages.

## Installation

```bash
# Navigate to the aem-cli directory
cd aem-cli

# Install dependencies
npm install
```

## Usage

```bash
# Install a content package
node bin/aem-cli.js install

# List content in repository
node bin/aem-cli.js list -p /content

# Get specific content
node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json

# Export content from repository
node bin/aem-cli.js export -p /content/wiley/author-services -o output.json

# Show information about installed content
node bin/aem-cli.js info
```

## Commands

### install
Installs a content package into the simulated AEM repository.

```bash
node bin/aem-cli.js install
```

### list
Lists content in the repository at a specified path.

```bash
# List root content
node bin/aem-cli.js list -p /

# List content in a specific path
node bin/aem-cli.js list -p /content/dam/wiley
```

### get
Gets and displays the content at a specific repository path.

```bash
# Get content as JSON
node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json
```

### export
Exports content from the repository to a file.

```bash
# Export a directory as JSON
node bin/aem-cli.js export -p /content/wiley/author-services -o output.json

# Export a file
node bin/aem-cli.js export -p /content/wiley/author-services/wiley_aem.json -o wiley_aem.json
```

### info
Shows information about installed content.

```bash
node bin/aem-cli.js info
```

## Project Structure

```
aem-cli/
├── bin/              # CLI executable scripts
├── lib/              # Library functions
├── packages/         # Content packages
├── config/           # Configuration files
├── node_modules/     # Dependencies
└── package.json      # Package manifest
```

## Content Package Structure

The content package follows the standard AEM structure with a `jcr_root` directory containing all the content:

```
packages/
└── author-services-content/
    └── jcr_root/
        └── content/
            ├── dam/
            │   └── wiley/
            │       └── author-services/
            │           ├── assets/
            │           └── content-fragments/
            └── wiley/
                └── author-services/
                    └── wiley_aem.json
```

## Making the CLI globally available

To make the CLI globally available, you can link it:

```bash
cd aem-cli
npm link
```

Then you can use it from anywhere:

```bash
aem-cli --help
```

## Example Content

This simulation includes content for Wiley Author Services with:
- Navigation views for Journal Authors, Reviewers, Ethics Guidelines, and Webinars
- Content fragments for various author resources
- Tools and resources organized by category
- PDFs, videos, and other assets