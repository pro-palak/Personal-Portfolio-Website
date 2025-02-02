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