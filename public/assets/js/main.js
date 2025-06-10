// Add shadow to navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// Add animation class to elements when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.services-section .card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (navbar.classList.contains('show') &&
        !navbar.contains(e.target) &&
        !toggleButton.contains(e.target)) {
        navbar.classList.remove('show');
    }
}); 