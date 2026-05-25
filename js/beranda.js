const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav_menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
    });
});