$(document).ready(function(){

    // Hello World Animation
    function createHelloWorld() {
        const text = "['Hello World']";
        const container = $('#hello-world-container');
        
        text.split('').forEach(letter => {
            if (letter === ' ') {
                container.append($('<div>').addClass('space'));
            } else {
                container.append($('<button>')
                    .addClass('letter-btn')
                    .text(letter));
            }
        });

        $('.letter-btn').each(function(index) {
            setTimeout(() => {
                $(this).addClass('visible');
            }, index * 200);
        });
    }

    // Create and start animation
    createHelloWorld();

	$('a[href^="#container-2"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
$('a[href^="#container-3"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
$('a[href^="#container-4"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
  
});

  const navToggle = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector("#primary-navigation");

  navToggle.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible") === "true";
    nav.setAttribute("data-visible", !isVisible);
    navToggle.setAttribute("aria-expanded", !isVisible);
  });


document.addEventListener('DOMContentLoaded', function() {
    // Project Data - Update with your actual project details
    const projectData = {
        project1: {
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
        project2: {
            title: 'Project Two',
            description: 'Detailed description of project two.',
            technologies: ['React', 'Node.js'],
            features: ['Feature 1', 'Feature 2'],
            image: 'https://res.cloudinary.com/dt4qeehms/image/upload/q_100/v1470090147/Portfolio/wp1_eal3pl.png',
            githubLink: '#',
            demoLink: '#'
        }
    };

    // Create Modal HTML dynamically
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

    // Initialize modal
    createModal();

    // Modal Elements
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('project-title');
    const modalImage = document.getElementById('project-main-image');
    const modalDescription = document.getElementById('project-description');
    const modalTechnologies = document.getElementById('project-technologies');
    const modalFeatures = document.getElementById('project-features');
    const modalGithubLink = document.getElementById('project-github');
    const modalDemoLink = document.getElementById('project-demo');

    // Close Button
    const closeBtn = document.querySelector('.close-btn');
    
    // Project Triggers
    const projectTriggers = document.querySelectorAll('.gridCell');

    // Open Modal
    projectTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
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

// Modify the existing createHelloWorld function
let animationInitialized = false;

function createHelloWorld() {
    // Check if animation has already been initialized
    if (animationInitialized) {
        return;
    }
    
    animationInitialized = true;
    
    const text = "['Hello World']";
    const container = $('#hello-world-container');
    
    // Clear any existing content
    container.empty();
    
    // Create all letters but don't animate them yet
    text.split('').forEach((letter, index) => {
        if (letter === ' ') {
            container.append($('<div>').addClass('space'));
        } else {
            container.append($('<button>')
                .addClass('letter-btn')
                .text(letter));
        }
    });

    // Create the intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animation only when container is visible
                $('.letter-btn').each(function(index) {
                    setTimeout(() => {
                        $(this).addClass('visible');
                    }, index * 200);
                });

                // Fade in social buttons after Hello World animation
                setTimeout(() => {
                    $('.social-buttons').css('opacity', '0').show().animate({
                        opacity: 1
                    }, 500);
                }, text.length * 200 + 500);

                // Unobserve after animation starts to prevent re-running
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Start observing the hello-world container
    observer.observe(document.getElementById('hello-world-container'));
}

// Only initialize once when document is ready
$(document).ready(createHelloWorld);