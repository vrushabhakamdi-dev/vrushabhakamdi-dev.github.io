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