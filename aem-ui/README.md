# AEM CLI Content Browser UI

This is a web-based user interface for browsing content managed by the AEM CLI simulation tool.

## Features

- Master-detail layout with sidebar navigation
- Content browsing for different categories
- Responsive design that works on desktop and mobile
- Package information display
- Content refresh capability

## Structure

```
aem-ui/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling for the UI
├── js/
│   └── main.js         # JavaScript functionality
└── assets/             # Images and other assets (currently empty)
```

## How to Use

1. Open `index.html` in a web browser
2. Navigate through the content using the sidebar
3. Click "Refresh Content" to reload the current view
4. Click "Package Info" to see information about the content package

## Integration with AEM CLI

This UI is designed to work with the AEM CLI simulation tool. In a full implementation, the JavaScript would make calls to the AEM CLI to fetch content dynamically. Currently, the UI uses mock data based on the actual content structure.

To fully integrate with the AEM CLI, you would need to:

1. Set up a backend service that can execute AEM CLI commands
2. Modify the JavaScript to make API calls to that service
3. Parse the JSON output from the AEM CLI and render it appropriately

## Customization

You can customize the UI by modifying:

- `css/styles.css` - Change colors, fonts, spacing, etc.
- `js/main.js` - Modify functionality and data handling
- `index.html` - Change layout structure

## Responsive Design

The UI is responsive and will adapt to different screen sizes:
- On desktop: Sidebar and main content are side-by-side
- On mobile: Sidebar becomes top navigation

## Components

The UI includes several reusable components:
- Navigation sidebar with active state management
- Content sections with different types (paragraphs, tools, downloads, etc.)
- Expandable drawers for nested content
- Status bar for user feedback
- Loading indicators