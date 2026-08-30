document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Menu Toggle
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // 2. Active Section Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // 3. Smooth Close Menu on Mobile Link Selection
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });
});
