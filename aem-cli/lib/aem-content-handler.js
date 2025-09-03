/**
 * AEM Content Handler
 * Provides utilities for handling AEM content structures
 */

const fs = require('fs');
const path = require('path');

class AemContentHandler {
  constructor(contentRoot) {
    this.contentRoot = contentRoot;
  }

  /**
   * Get content at a specific path
   */
  getContentAtPath(repoPath) {
    const filePath = this.mapRepoPathToFileSystemPath(repoPath);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      return this.getDirectoryContent(filePath);
    } else {
      return this.getFileContent(filePath);
    }
  }

  /**
   * Map repository path to file system path
   */
  mapRepoPathToFileSystemPath(repoPath) {
    // Remove leading slash if present
    const cleanPath = repoPath.startsWith('/') ? repoPath.substring(1) : repoPath;
    return path.join(this.contentRoot, cleanPath);
  }

  /**
   * Get directory content as structured object
   */
  getDirectoryContent(dirPath) {
    const result = {
      jcr: {
        primaryType: 'nt:folder'
      },
      children: {}
    };
    
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        result.children[item] = this.getDirectoryContent(itemPath);
      } else {
        result.children[item] = this.getFileContent(itemPath);
      }
    });
    
    return result;
  }

  /**
   * Get file content
   */
  getFileContent(filePath) {
    const stats = fs.statSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    // Special handling for JSON files (AEM content)
    if (ext === '.json') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        return {
          jcr: {
            primaryType: 'nt:file'
          },
          content: JSON.parse(content)
        };
      } catch (e) {
        return {
          jcr: {
            primaryType: 'nt:file'
          },
          content: null,
          error: 'Could not parse JSON file'
        };
      }
    } else {
      // For other files, return metadata
      return {
        jcr: {
          primaryType: 'nt:file'
        },
        metadata: {
          size: stats.size,
          modified: stats.mtime,
          extension: ext
        }
      };
    }
  }

  /**
   * List children at a specific path
   */
  listChildren(repoPath) {
    const dirPath = this.mapRepoPathToFileSystemPath(repoPath);
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      return [];
    }
    
    return fs.readdirSync(dirPath);
  }
}

module.exports = AemContentHandler;