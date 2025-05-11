document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('active'); // Toggles CSS class to show/hide
        });
    }

    // --- Dynamic Year for Footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scrolling for Anchor Links (Optional) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is to the current page to avoid breaking other links
            if (this.pathname === window.location.pathname && this.hash) {
                const targetElement = document.querySelector(this.hash);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Basic Form Validation (Example for a contact form - more robust validation needed for production) ---
    // const contactForm = document.getElementById('contactForm'); // Assuming your form has this ID
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(event) {
    //         const emailField = document.getElementById('email'); // Assuming an email field
    //         if (emailField && !isValidEmail(emailField.value)) {
    //             event.preventDefault(); // Stop form submission
    //             alert('Please enter a valid email address.');
    //             // You would typically show an error message next to the field
    //         }
    //         // Add more validation rules
    //     });
    // }

    // function isValidEmail(email) {
    //     // Basic email validation regex (consider a more robust one)
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    // }

    // --- Testimonial Slider (Conceptual - you'd use a library like Swiper.js or implement custom logic) ---
    // Initialize Swiper or your slider logic here if you have one.
    // Example:
    // if (document.querySelector('.testimonial-slider')) {
    //     const swiper = new Swiper('.testimonial-slider', {
    //         loop: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         autoplay: {
    //             delay: 5000,
    //         },
    //     });
    // }


    // Update current date in the footer
    const currentDateElements = document.querySelectorAll('.current-date');
    if (currentDateElements.length > 0) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
        currentDateElements.forEach(el => {
            el.textContent = `Current Date: ${formattedDate}`;
        });
    }

});