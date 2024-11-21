// Toggle Navigation Menu
function toggleMenu() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

// Toggle Dark Mode
document.getElementById("toggle-switch").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Typing Effect
new Typed(".typedText", {
    strings: ["Hashir Abdullah", "Software-Engineer", "Web-Developer"],
    loop: true,
    backSpeed: 80,
    backDelay: 1000,
    typeSpeed: 100,
});

// ScrollReveal Configuration
const scrollRevealConfig = {
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true,
};
ScrollReveal(scrollRevealConfig).reveal(".featured-name", { delay: 100 });
ScrollReveal(scrollRevealConfig).reveal(".text-info", { delay: 200 });
ScrollReveal(scrollRevealConfig).reveal(".text-btn", { delay: 200 });
ScrollReveal(scrollRevealConfig).reveal(".social-icons", { delay: 200 });
ScrollReveal(scrollRevealConfig).reveal(".featured-image", { delay: 320 });
ScrollReveal(scrollRevealConfig).reveal(".project-box", { interval: 200 });
ScrollReveal(scrollRevealConfig).reveal(".top-header");

ScrollReveal({ ...scrollRevealConfig, origin: 'left', duration: 2000 }).reveal(".about-info", { delay: 100 });
ScrollReveal({ ...scrollRevealConfig, origin: 'left', duration: 2000 }).reveal(".contact-info", { delay: 100 });

ScrollReveal({ ...scrollRevealConfig, origin: 'right', duration: 2000 }).reveal(".skill", { delay: 100 });
ScrollReveal({ ...scrollRevealConfig, origin: 'right', duration: 2000 }).reveal(".skill-box", { delay: 100 });

// Highlight Active Navigation Link on Scroll
const sections = document.querySelectorAll(".section[id]");

function highlightActiveLink() {
    const scrollY = window.scrollY + 50; // Adjusted for better alignment
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", highlightActiveLink);
