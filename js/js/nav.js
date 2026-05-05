// Burger menu (mobile)
document.querySelector('.burger')?.addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav a');

function setActiveNav() {
    const scrollY = window.scrollY;
    let currentId = null;
    sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            currentId = id;
        }
    });
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.startsWith('#') && href.slice(1) === currentId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Smooth scroll
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Fermer le menu mobile après clic
        document.querySelector('.burger')?.classList.remove('active');
        document.querySelector('.nav')?.classList.remove('active');
    });
});
