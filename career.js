document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation on scroll
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1.5)';
            this.querySelector('.timeline-content').style.transform = 'scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1)';
            this.querySelector('.timeline-content').style.transform = 'scale(1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const primaryNav = document.querySelector('.primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    
    // Hamburger menu toggle functionality
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

    // Handle navigation links
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Close the mobile menu
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            document.body.classList.remove('nav-open');

            // Check if the link is to the current page
            const href = link.getAttribute('href');
            if (href.includes('#') && href.split('#')[0] === '' || 
                href.split('#')[0] === 'index.html' && window.location.pathname.includes('index.html') ||
                window.location.pathname === '/' || 
                window.location.pathname.endsWith('/index.html')) {
                
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});