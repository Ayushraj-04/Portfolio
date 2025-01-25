// script.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // Smooth scroll functionality for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            const targetId = link.getAttribute("href").slice(1); // Get the target section ID (without #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth", // Smooth scroll effect
                    block: "start"
                });
            }
        });
    });

    // Example: Show a message when the form is submitted
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert("Thank you for reaching out! I will get back to you soon.");
        contactForm.reset(); // Reset the form after submission
    });
});
