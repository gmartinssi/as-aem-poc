#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const AemContentHandler = require('../lib/aem-content-handler');

// Get the root directory of our CLI tool
const cliRoot = path.join(__dirname, '..');

// Load our content package
const contentPackagePath = path.join(cliRoot, 'packages', 'author-services-content');
if (!fs.existsSync(contentPackagePath)) {
  fs.mkdirSync(contentPackagePath, { recursive: true });
}

// Initialize content handler
const contentHandler = new AemContentHandler(path.join(contentPackagePath, 'jcr_root'));

program
  .name('aem-cli')
  .description('AEM CLI Simulation Tool')
  .version('1.0.0');

program
  .command('install')
  .description('Install content package')
  .option('-p, --package <path>', 'Path to content package')
  .action((options) => {
    console.log('Installing content package...');
    
    // For simulation, we'll copy our jcr_root content to the packages directory
    const sourcePath = path.join(cliRoot, '..', 'jcr_root');
    const destPath = path.join(contentPackagePath, 'jcr_root');
    
    if (fs.existsSync(sourcePath)) {
      copyDirectory(sourcePath, destPath);
      console.log('Package installed successfully!');
    } else {
      console.error('Source content not found!');
      process.exit(1);
    }
  });

program
  .command('list')
  .description('List content in repository')
  .option('-p, --path <path>', 'Repository path to list', '/')
  .action((options) => {
    console.log(`Listing content at path: ${options.path}`);
    
    try {
      const children = contentHandler.listChildren(options.path);
      if (children.length > 0) {
        console.log('Content structure:');
        children.forEach(item => {
          console.log(`  ${item}`);
        });
      } else {
        console.log('No content found at this path');
      }
    } catch (error) {
      console.error('Error listing content:', error.message);
    }
  });

program
  .command('export')
  .description('Export content from repository')
  .option('-p, --path <path>', 'Repository path to export')
  .option('-o, --output <path>', 'Output file path')
  .action((options) => {
    if (!options.path || !options.output) {
      console.error('Both --path and --output options are required');
      process.exit(1);
    }
    
    console.log(`Exporting content from path: ${options.path}`);
    
    try {
      const content = contentHandler.getContentAtPath(options.path);
      if (content) {
        fs.writeFileSync(options.output, JSON.stringify(content, null, 2));
        console.log(`Content exported to: ${options.output}`);
      } else {
        console.error('Path not found');
        process.exit(1);
      }
    } catch (error) {
      console.error('Error exporting content:', error.message);
      process.exit(1);
    }
  });

program
  .command('info')
  .description('Show information about installed content')
  .action(() => {
    console.log('AEM CLI Simulation Tool');
    console.log('======================');
    console.log('Content Package: author-services-content');
    console.log('Installed: ', fs.existsSync(path.join(contentPackagePath, 'jcr_root')) ? 'Yes' : 'No');
    
    if (fs.existsSync(path.join(contentPackagePath, 'jcr_root'))) {
      const contentPath = path.join(contentPackagePath, 'jcr_root');
      const stats = getDirectoryStats(contentPath);
      console.log('\nContent Summary:');
      console.log(`  Directories: ${stats.directories}`);
      console.log(`  Files: ${stats.files}`);
    }
  });

program
  .command('get')
  .description('Get content at specific path')
  .option('-p, --path <path>', 'Repository path to get')
  .action((options) => {
    if (!options.path) {
      console.error('--path option is required');
      process.exit(1);
    }
    
    try {
      const content = contentHandler.getContentAtPath(options.path);
      if (content) {
        console.log(JSON.stringify(content, null, 2));
      } else {
        console.error('Path not found');
        process.exit(1);
      }
    } catch (error) {
      console.error('Error getting content:', error.message);
      process.exit(1);
    }
  });

// Helper function to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stats = fs.statSync(srcPath);
    
    if (stats.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Helper function to get directory statistics
function getDirectoryStats(dir) {
  let directories = 0;
  let files = 0;
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    items.forEach(item => {
      const itemPath = path.join(currentDir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        directories++;
        traverse(itemPath);
      } else {
        files++;
      }
    });
  }
  
  traverse(dir);
  return { directories, files };
}

program.parse();