document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function () {
        // Basculer la classe 'active' sur les liens de navigation
        navLinks.classList.toggle('active');

        // Basculer la classe 'open' sur le menu burger
        mobileMenu.classList.toggle('open');
    });
});