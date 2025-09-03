// Main JavaScript for AEM UI
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navList = document.getElementById('nav-list');
    const contentArea = document.getElementById('content-area');
    const contentTitle = document.getElementById('content-title');
    const loadingElement = document.getElementById('loading');
    const refreshBtn = document.getElementById('refresh-btn');
    const infoBtn = document.getElementById('info-btn');
    const statusMessage = document.getElementById('status-message');
    
    // Current state
    let currentContent = null;
    
    // Initialize the UI
    initializeUI();
    
    // Event Listeners
    refreshBtn.addEventListener('click', refreshContent);
    infoBtn.addEventListener('click', showPackageInfo);
    
    // Initialize UI
    function initializeUI() {
        updateStatus('Initializing UI...');
        loadNavigation();
        updateStatus('Ready');
    }
    
    // Load navigation from the AEM content
    function loadNavigation() {
        showLoading();
        
        // Simulate fetching content from AEM CLI
        // In a real implementation, this would call the AEM CLI
        setTimeout(() => {
            try {
                // Mock data based on the AEM content structure
                const navigationData = [
                    {
                        title: "Journal Authors",
                        path: "/content/wiley/author-services/journal-authors",
                        description: "Your research is driving a brighter future by providing answers to the challenges of today."
                    },
                    {
                        title: "Reviewers",
                        path: "/content/wiley/author-services/reviewers",
                        description: "Resources and guidelines for journal and book reviewers"
                    },
                    {
                        title: "Ethics Guidelines",
                        path: "/content/wiley/author-services/ethics-guidelines",
                        description: "Best Practice Guidelines on Research Integrity and Publishing Ethics"
                    },
                    {
                        title: "Webinars and Events",
                        path: "/content/wiley/author-services/webinars-events",
                        description: "Engaging webinars and events tailored to the needs of researchers, authors, and librarians."
                    }
                ];
                
                renderNavigation(navigationData);
                
                // Load default content (first item)
                if (navigationData.length > 0) {
                    loadContent(navigationData[0]);
                }
                
                hideLoading();
            } catch (error) {
                console.error('Error loading navigation:', error);
                updateStatus('Error loading navigation');
                hideLoading();
            }
        }, 500);
    }
    
    // Render navigation items
    function renderNavigation(navItems) {
        navList.innerHTML = '';
        
        navItems.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item.title;
            a.dataset.path = item.path;
            a.dataset.index = index;
            
            // Set first item as active by default
            if (index === 0) {
                a.classList.add('active');
            }
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                // Remove active class from all items
                navList.querySelectorAll('a').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to clicked item
                a.classList.add('active');
                // Load content
                loadContent(item);
            });
            
            li.appendChild(a);
            navList.appendChild(li);
        });
    }
    
    // Load content for a specific navigation item
    function loadContent(navItem) {
        showLoading();
        updateStatus(`Loading content for ${navItem.title}...`);
        
        // Store current content
        currentContent = navItem;
        contentTitle.textContent = navItem.title;
        
        // Simulate fetching content from AEM CLI
        // In a real implementation, this would call the AEM CLI
        setTimeout(() => {
            try {
                // Render content based on the navigation item
                renderContent(navItem);
                updateStatus(`Loaded content for ${navItem.title}`);
                hideLoading();
            } catch (error) {
                console.error('Error loading content:', error);
                updateStatus(`Error loading content for ${navItem.title}`);
                hideLoading();
            }
        }, 300);
    }
    
    // Render content based on navigation item
    function renderContent(navItem) {
        // In a real implementation, this would render actual content from AEM
        // For now, we'll render mock content based on the navigation item
        
        let contentHTML = '';
        
        switch (navItem.title) {
            case 'Journal Authors':
                contentHTML = `
                    <div class="content-section">
                        <p>${navItem.description}</p>
                        
                        <div class="table-of-contents">
                            <h3>Publication Journey</h3>
                            <ul class="toc-list">
                                <li><a href="#find-a-journal">Find a Journal</a></li>
                                <li><a href="#prepare">Prepare</a></li>
                                <li><a href="#submission-peer-review">Submission & Peer Review</a></li>
                                <li><a href="#licensing">Licensing</a></li>
                                <li><a href="#open-access">Open Access</a></li>
                                <li><a href="#publication">Publication</a></li>
                                <li><a href="#promote">Promote</a></li>
                            </ul>
                        </div>
                        
                        <div class="content-section">
                            <h3 id="find-a-journal">Find a Journal</h3>
                            <div class="paragraph">
                                <p>Working on your next manuscript? Use one of the options below to find the perfect journal for your work.</p>
                            </div>
                            
                            <div class="tool-card">
                                <h4>Journal Finder</h4>
                                <p>The Journal Finder is a powerful tool that lets you filter based on subject and topic areas to compare journal metrics side-by-side. Search directly across 1800+ journals published by Wiley.</p>
                                <a href="https://www.wiley.com/publish/journal-finder" target="_blank">Visit Journal Finder</a>
                            </div>
                            
                            <div class="tool-card">
                                <h4>Journal Matching Tool</h4>
                                <p>If you already have a title and abstract for your article, you can use our journal matching tool to find journals that match your manuscript content.</p>
                                <a href="https://authorservices.wiley.com/journal-match/index.html" target="_blank">Visit Journal Matching Tool</a>
                            </div>
                            
                            <div class="tool-card">
                                <h4>Journal Recommendation Service</h4>
                                <p>If you are looking for more formal support with finding the right journal, try our Journal Recommendation service. You will receive 3-5 curated recommendations.</p>
                                <a href="https://wileyeditingservices.com/en/journal-recommendation" target="_blank">Visit Journal Recommendation Service</a>
                            </div>
                        </div>
                        
                        <div class="content-section">
                            <h3 id="prepare">Prepare</h3>
                            <div class="paragraph">
                                <p>We're here to support you throughout manuscript preparation, from writing to submission. For the best chance of acceptance, follow your journal's author guidelines and review our preparation resources before you start.</p>
                            </div>
                            
                            <div class="tool-card">
                                <h4>Manuscript Language Checker</h4>
                                <p>Receive a free language quality score and recommendation for the best service to get your manuscript ready for submission with our Manuscript Language Checker!</p>
                                <a href="https://wileyeditingservices.com/en/manuscript-language-checker" target="_blank">Visit Manuscript Language Checker</a>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'Reviewers':
                contentHTML = `
                    <div class="content-section">
                        <p>${navItem.description}</p>
                        
                        <div class="paragraph">
                            <p>At Wiley we believe that peer review is the foundation for safeguarding the quality and integrity of scientific and scholarly research. We want to do everything we can to support reviewers and to recognize their contribution.</p>
                        </div>
                    </div>
                `;
                break;
                
            case 'Ethics Guidelines':
                contentHTML = `
                    <div class="content-section">
                        <p>${navItem.description}</p>
                        
                        <div class="paragraph">
                            <p>These guidelines present a further update to the Wiley publishing ethics guidelines first published in 2006 and revised in 2014. Our aim for these guidelines remains to support all those involved in scholarly publishing with a summary of best practice guidance.</p>
                        </div>
                        
                        <div class="table-of-contents">
                            <h3>Topics</h3>
                            <ul class="toc-list">
                                <li>Academic debate</li>
                                <li>Appeals</li>
                                <li>Artificial Intelligence</li>
                                <li>Authorship</li>
                                <li>Citations</li>
                                <li>Commercial considerations and editorial independence</li>
                                <li>Conflicts of interest</li>
                                <li>Copyright and intellectual property</li>
                                <li>Corrections, expressions of concern, retractions, and withdrawals</li>
                                <li>Data and reporting guidelines</li>
                                <li>Diversity, Equity and Inclusion</li>
                                <li>Fabrication, falsification, and image manipulation</li>
                                <li>Hazardous materials, risks, and biosecurity</li>
                                <li>Investigation of questionable research practices</li>
                                <li>Peer review</li>
                                <li>Plagiarism, duplicate/redundant publication, text recycling, and translations</li>
                                <li>Preprints</li>
                                <li>Research ethics</li>
                                <li>Research funding</li>
                                <li>Sanctions</li>
                                <li>Systemic manipulation of the publication process</li>
                            </ul>
                        </div>
                    </div>
                `;
                break;
                
            case 'Webinars and Events':
                contentHTML = `
                    <div class="content-section">
                        <p>${navItem.description}</p>
                        
                        <div class="drawer">
                            <div class="drawer-header" onclick="toggleDrawer(this)">
                                <h4>Open Access Events</h4>
                                <span>▼</span>
                            </div>
                            <div class="drawer-content">
                                <div class="event-item">
                                    <h5>Online panel discussion - Hear from your peers on how to manage open access complexity</h5>
                                    <p>Date: September 15, 2025</p>
                                </div>
                                <div class="event-item">
                                    <h5>The role and impact of public policies - OSTP and other open research mandates</h5>
                                    <p>Date: October 22, 2025</p>
                                </div>
                                <div class="event-item">
                                    <h5>The open access advantage - How open access improves your impact</h5>
                                    <p>Date: November 18, 2025</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="drawer">
                            <div class="drawer-header" onclick="toggleDrawer(this)">
                                <h4>Events for Librarians</h4>
                                <span>▼</span>
                            </div>
                            <div class="drawer-content">
                                <div class="event-item">
                                    <h5>How to improve open access management across different publishers</h5>
                                    <p>Date: September 28, 2025</p>
                                </div>
                                <div class="event-item">
                                    <h5>Understanding the OA output of your institution</h5>
                                    <p>Date: October 19, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                contentHTML = `
                    <div class="content-section">
                        <p>${navItem.description || 'No description available.'}</p>
                    </div>
                `;
        }
        
        contentArea.innerHTML = contentHTML;
    }
    
    // Refresh content
    function refreshContent() {
        updateStatus('Refreshing content...');
        if (currentContent) {
            loadContent(currentContent);
        } else {
            loadNavigation();
        }
    }
    
    // Show package info
    function showPackageInfo() {
        showLoading();
        updateStatus('Loading package information...');
        
        // Simulate fetching package info from AEM CLI
        setTimeout(() => {
            try {
                contentTitle.textContent = 'Package Information';
                contentArea.innerHTML = `
                    <div class="content-section">
                        <h3>AEM Content Package</h3>
                        <p><strong>Name:</strong> author-services-content</p>
                        <p><strong>Description:</strong> Wiley Author Services Content Package</p>
                        <p><strong>Version:</strong> 1.0.0</p>
                        <p><strong>Status:</strong> Installed</p>
                        
                        <h3>Content Summary</h3>
                        <p><strong>Directories:</strong> 16</p>
                        <p><strong>Files:</strong> 37</p>
                        
                        <h3>CLI Information</h3>
                        <p><strong>CLI Name:</strong> aem-cli</p>
                        <p><strong>CLI Version:</strong> 1.0.0</p>
                        
                        <h3>Repository Information</h3>
                        <p><strong>Repository Name:</strong> AEM Content Package Simulation</p>
                        <p><strong>Repository Version:</strong> 1.0.0</p>
                    </div>
                `;
                updateStatus('Package information loaded');
                hideLoading();
            } catch (error) {
                console.error('Error loading package info:', error);
                updateStatus('Error loading package information');
                hideLoading();
            }
        }, 300);
    }
    
    // Show loading indicator
    function showLoading() {
        loadingElement.style.display = 'block';
        contentArea.style.opacity = '0.5';
    }
    
    // Hide loading indicator
    function hideLoading() {
        loadingElement.style.display = 'none';
        contentArea.style.opacity = '1';
    }
    
    // Update status message
    function updateStatus(message) {
        statusMessage.textContent = message;
    }
});

// Toggle drawer function (global)
function toggleDrawer(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('span');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        arrow.textContent = '▼';
    } else {
        content.classList.add('active');
        arrow.textContent = '▲';
    }
}