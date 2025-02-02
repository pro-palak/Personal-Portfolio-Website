document.addEventListener('DOMContentLoaded', function() {
    // Project Details Modal
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');

    // If modal doesn't exist, create it
    if (!modal) {
        createModal();
    }

    if (window.location.hash) {
        // Get the element
        const element = document.querySelector(window.location.hash);
        if (element) {
            // Wait a brief moment for everything to load
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    
    // Modal Elements
    const modalTitle = document.getElementById('project-title');
    const modalImage = document.getElementById('project-main-image');
    const modalDescription = document.getElementById('project-description');
    const modalTechnologies = document.getElementById('project-technologies');
    const modalFeatures = document.getElementById('project-features');
    const modalGithubLink = document.getElementById('project-github');
    const modalDemoLink = document.getElementById('project-demo');
    const closeBtn = document.querySelector('.close-btn');

    // Project Data
    const projectData = {
        'taskaid': {
            title: 'TaskAid',
            description: 'A comprehensive task management application designed to enhance productivity and organization.',
            technologies: ['React.js', 'Node.js', 'MongoDB'],
            features: [
                'User authentication',
                'Task creation and tracking',
                'Priority and status management',
                'Responsive design'
            ],
            image: './Assets/TaskAid.png',
            githubLink: '#',
            demoLink: '#'
        },
        'registration-website': {
            title: 'Weather Forecast App',
            description: 'A real-time weather tracking application that provides detailed weather information for any location.',
            technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML5', 'CSS3'],
            features: [
                'Real-time weather data',
                'Location-based forecasting',
                'Detailed weather metrics',
                'Responsive design'
            ],
            image: './Assets/WeatherApp.png',
            githubLink: '#',
            demoLink: '#'
        },
        'portfolio-website': {
            title: 'Portfolio Website',
            description: 'A real-time weather tracking application that provides detailed weather information for any location.',
            technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML5', 'CSS3'],
            features: [
                'Real-time weather data',
                'Location-based forecasting',
                'Detailed weather metrics',
                'Responsive design'
            ],
            image: './Assets/WeatherApp.png',
            githubLink: '#',
            demoLink: '#'
        }
    };

    // Create Modal HTML (same as in previous script)
    function createModal() {
        const modalHTML = `
        <div id="project-modal" class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <div class="modal-project-details">
                    <h2 id="project-title">Project Title</h2>
                    <div class="project-info">
                        <div class="project-image">
                            <img src="" alt="Project Image" id="project-main-image">
                        </div>
                        <div class="project-description">
                            <h3>Project Overview</h3>
                            <p id="project-description">Detailed project description goes here.</p>
                            
                            <h3>Technologies Used</h3>
                            <ul id="project-technologies">
                                <!-- Technologies will be dynamically populated -->
                            </ul>
                            
                            <h3>Key Features</h3>
                            <ul id="project-features">
                                <!-- Features will be dynamically populated -->
                            </ul>
                            
                            <div class="project-links">
                                <a href="#" class="btn github-link" id="project-github">View on GitHub</a>
                                <a href="#" class="btn live-demo" id="project-demo">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        // Append modal to body if not already exists
        if (!document.getElementById('project-modal')) {
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHTML;
            document.body.appendChild(modalContainer.firstChild);
        }
    }

    // Add click event to project cards
    projectCards.forEach(card => {
        card.querySelector('.btn').addEventListener('click', function() {
            const projectId = card.id;
            const project = projectData[projectId];

            if (project) {
                // Populate Modal
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalDescription.textContent = project.description;

                // Technologies
                modalTechnologies.innerHTML = project.technologies
                    .map(tech => `<li>${tech}</li>`)
                    .join('');

                // Features
                modalFeatures.innerHTML = project.features
                    .map(feature => `<li>${feature}</li>`)
                    .join('');

                // Links
                modalGithubLink.href = project.githubLink;
                modalDemoLink.href = project.demoLink;

                // Show Modal
                modal.style.display = 'block';
            }
        });
    });

    // Close Modal when clicking close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close Modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const primaryNav = document.querySelector('.primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    
    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
        
        if (visibility === "false" || !visibility) {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
            document.body.classList.add('nav-open');
        } else {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            document.body.classList.remove('nav-open');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (primaryNav.getAttribute('data-visible') === "true" && 
            !primaryNav.contains(e.target) && 
            !navToggle.contains(e.target)) {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            document.body.classList.remove('nav-open');
        }
    });

    // Close menu when clicking on a link
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            document.body.classList.remove('nav-open');
        });
    });
});