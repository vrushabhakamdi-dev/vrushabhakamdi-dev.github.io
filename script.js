document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll Active Link Highlighter
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav ul li a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            if (a.getAttribute('href') === `#${current}`) {
                a.style.color = '#58a6ff';
            } else {
                a.style.color = '#c9d1d9';
            }
        });
    });

    // 2. Scroll Reveal Animations via Intersection Observer
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Trigger animation once
            }
        });
    }, observerOptions);

    // Apply animation class to elements
    const elementsToAnimate = document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .contact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});
