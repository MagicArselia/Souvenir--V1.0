document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // All navigation links
    const sections = document.querySelectorAll(".dynamic-section"); // Dynamic sections
    const menuBtn = document.getElementById("open-menu"); // Open menu button
    const closeMenuBtn = document.getElementById("close-menu"); // Close menu button
    const sideMenu = document.getElementById("side-menu"); // Side menu container

    // Function: Show the target section
    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove("active"); // Hide all sections
        });

        const targetSection = document.getElementById(targetId); // Find target section
        if (targetSection) {
            targetSection.classList.add("active"); // Show target section
            targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
        }
    }

    // Slide navigation and highlight active section
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href").substring(1); // Remove '#'

            // Show target section
            showSection(targetId);

            // Highlight active navigation link
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Open Side Menu
    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });

    // Close Side Menu
    closeMenuBtn.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });
});
