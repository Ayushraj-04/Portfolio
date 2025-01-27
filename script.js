// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        contactForm.reset(); 
    });
});
