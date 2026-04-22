// ===== DOM LOAD =====
document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.querySelector(".theme-toggle");
    const icon = themeToggle.querySelector("i");

    // ===== THEME TOGGLE =====
    const themes = ['light', 'dark', 'rainbow'];
    let currentThemeIndex = 0;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
        currentThemeIndex = themes.indexOf(savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener("click", () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];

        document.body.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);

        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'rainbow') {
            icon.className = 'fas fa-palette';
        } else if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // ===== MOBILE MENU =====
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // ===== TYPING EFFECT =====
    const text = "Hi, I'm Shivraj Aher";
    const typingElement = document.querySelector(".hero-title");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }

    typingElement.textContent = "";
    typeEffect();

    // ===== LOADER =====
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.style.display = "none";
    });

    // ===== PARTICLES =====
    createParticles();

});


// ===== PARTICLE FUNCTION =====
function createParticles() {
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.opacity = Math.random();

        document.body.appendChild(particle);
    }
}