# Converting AEM Content Package to CLI Simulation

This document explains how the AEM content package structure was converted into a CLI simulation tool.

## Original Structure

The original project had this structure:
```
.
└── jcr_root
    └── content
        ├── dam
        │   └── wiley
        │       └── author-services
        │           ├── assets
        │           │   ├── images
        │           │   ├── pdfs
        │           │   └── videos
        │           └── content-fragments
        │               ├── dropdown-components
        │               ├── interactive-tools
        │               ├── pdf-resources
        │               ├── video-resources
        │               └── webinar-events
        └── wiley
            └── author-services
                └── wiley_aem.json
```

## Conversion Process

### 1. Created CLI Structure

We created a new directory structure for our CLI simulation:
```
aem-cli/
├── bin/              # CLI executable scripts
├── lib/              # Library functions
├── packages/         # Content packages
├── config/           # Configuration files
├── node_modules/     # Dependencies
└── package.json      # Package manifest
```

### 2. Implemented Core Functionality

We implemented the following commands:
- `install`: Copies the content package to the simulation environment
- `list`: Shows content at a specified path
- `get`: Retrieves and displays content as JSON
- `export`: Exports content to a file
- `info`: Shows information about installed content

### 3. Content Handling

The content is handled through a custom `AemContentHandler` class that:
- Maps repository paths to file system paths
- Converts directory structures to AEM-like JSON representations
- Handles special file types (JSON files are parsed, others are represented by metadata)

### 4. Package Installation

When the `install` command is run, the content from `jcr_root` is copied to:
```
packages/
└── author-services-content/
    └── jcr_root/
```

This maintains the original AEM content structure while making it accessible through CLI commands.

## Usage

After installation, users can:
1. Install the content package with `node bin/aem-cli.js install`
2. List content with `node bin/aem-cli.js list -p /content/path`
3. Get content with `node bin/aem-cli.js get -p /content/path/file.json`
4. Export content with `node bin/aem-cli.js export -p /content/path -o output.json`

## Benefits of This Approach

1. **Preserves Original Structure**: The original AEM content structure is maintained
2. **CLI Access**: Content can be accessed and managed through command line
3. **Extensible**: Additional commands can be easily added
4. **Portable**: The entire simulation can be packaged and distributed
5. **Educational**: Helps understand AEM content structures and operations

This simulation provides a simplified but functional representation of how AEM content packages work and how they can be managed through CLI tools.