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

const navToggle = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector("#primary-navigation");

  navToggle.addEventListener("click", () => {
    const isVisible = nav.getAttribute("data-visible") === "true";
    nav.setAttribute("data-visible", !isVisible);
    navToggle.setAttribute("aria-expanded", !isVisible);
  });

  const navLinks = document.querySelectorAll(".ul-0 a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  });
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