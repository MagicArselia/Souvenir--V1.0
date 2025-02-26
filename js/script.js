document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".dynamic-section");
    const backToTopButton = document.getElementById("back-to-top");
    const contactForm = document.getElementById("contact-form");
    const testimonialForm = document.getElementById("testimonial-form");
    const testimonialsContainer = document.getElementById("testimonials-container");

    // Function: Show the target section
    function showSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (!targetSection) {
            console.error(`Section with id ${targetId} not found.`);
            alert("The requested section could not be found.");
            return;
        }
        sections.forEach(section => section.classList.remove("active"));
        targetSection.classList.add("active");
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }

    // Slide navigation and highlight active section
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            showSection(targetId);
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Back to Top Button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Handle Contact Form Submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        emailjs.send("Service_Souvenir", "template_Souvenir", {
            from_name: name,
            from_email: email,
            message: message
        }).then(() => {
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        }, (error) => {
            console.error("Failed to send message:", error);
            alert("Something went wrong. Please try again later.");
        });
    });

    // Handle Testimonial Form Submission
    testimonialForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("testimonial-name").value;
        const message = document.getElementById("testimonial-message").value;

        // Add testimonial to the page
        const testimonialBox = document.createElement("div");
        testimonialBox.classList.add("testimonial-box");
        testimonialBox.innerHTML = `
            <p>"${message}"</p>
            <span>- ${name}</span>
        `;
        testimonialsContainer.appendChild(testimonialBox);

        // Clear the form
        testimonialForm.reset();
        alert("Thank you for sharing your experience!");
    });

    // Hide Loading Animation
    window.addEventListener("load", () => {
        const loading = document.getElementById("loading");
        loading.style.display = "none";
    });
});