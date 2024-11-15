// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded");

    // Form handling
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you for your message!");
            form.reset();
        } else {
            alert("Please fill in all fields!");
        }
    });

    // Smooth scroll for navigation
    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Simulate service data fetching
    const servicesSection = document.querySelector("#services");
    setTimeout(() => {
        const services = [
            "Web Development",
            "Graphic Design",
            "SEO Optimization",
            "Content Creation",
        ];
        const list = document.createElement("ul");
        services.forEach((service) => {
            const item = document.createElement("li");
            item.textContent = service;
            list.appendChild(item);
        });
        servicesSection.appendChild(list);
    }, 2000);

    console.log("Scripts initialized.");
});