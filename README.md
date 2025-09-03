# AEM Content Package Structure

This repository contains the directory structure for the proof-of-concept (PoC) AEM content package for Author Services, as proposed by the Orion development team.

## Directory Tree

```
.
├── jcr_root/
│   └── content/
│       ├── dam/
│       │   └── wiley/
│       │       └── author-services/
│       │           ├── assets/
│       │           │   ├── images/
│       │           │   ├── pdfs/
│       │           │   └── videos/
│       │           └── content-fragments/
│       │               ├── dropdown-components/
│       │               ├── interactive-tools/
│       │               ├── pdf-resources/
│       │               ├── video-resources/
│       │               └── webinar-events/
│       └── wiley/
│           └── author-services/
│               └── wiley_aem.json
├── aem-cli/
│   ├── bin/
│   ├── lib/
│   ├── packages/
│   ├── config/
│   └── package.json
└── aem-ui/
    ├── css/
    ├── js/
    ├── assets/
    └── index.html
```

## AEM CLI Simulation

This repository has been enhanced with an AEM CLI simulation tool that allows you to interact with the content package through command-line commands.

### Features

- Install content packages
- List content in the repository
- Get specific content as JSON
- Export content to files
- View information about installed content

### Usage

Navigate to the `aem-cli` directory and run:

```bash
# Install dependencies
npm install

# Install the content package
node bin/aem-cli.js install

# List content
node bin/aem-cli.js list -p /content

# Get specific content
node bin/aem-cli.js get -p /content/wiley/author-services/wiley_aem.json

# Export content
node bin/aem-cli.js export -p /content/wiley/author-services -o output.json

# Show info
node bin/aem-cli.js info
```

See [AEM_CLI_CONVERSION.md](AEM_CLI_CONVERSION.md) for details on how this conversion was implemented.

## AEM UI Browser

A web-based user interface has been created to browse the content managed by the AEM CLI.

### Features

- Master-detail layout with sidebar navigation
- Content browsing for different categories
- Responsive design
- Package information display

### Usage

Open `aem-ui/index.html` in a web browser to use the interface.

## Support

For any questions or issues, please contact:

Gabriel Martins Silva - gmartinssi@wiley.com

## References

- [AEM Core WCM Components](https://github.com/adobe/aem-core-wcm-components)
- [Author Services Site](https://github.com/wiley/as-site)
- [Mistica Design System](https://mistica-web.vercel.app/?path=/story/layout-master-detail-layout--default)
