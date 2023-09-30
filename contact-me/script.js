document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Here, you can add code to handle the form submission, for example, sending data to a server.
        
        // After a successful form submission (replace this with your actual success condition):
        successMessage.style.display = 'block'; // Show the success message
        contactForm.reset(); // Optionally, reset the form fields
    });
});
