document.addEventListener('DOMContentLoaded', () => {
    // Handle form interactions
    const passwordField = document.querySelector('.label3:nth-of-type(2)');
    const confirmPasswordField = document.querySelector('.label3:nth-of-type(3)');
    const emailField = document.querySelector('.label3:nth-of-type(4)');
    const phoneField = document.querySelector('.label3:nth-of-type(5)');
    const createAccountButton = document.querySelector('.button2');
    
    // Toggle password visibility
    const togglePasswordVisibility = (eyeIcon, passwordField) => {
        eyeIcon.addEventListener('click', () => {
            if (passwordField.textContent === '************************') {
                passwordField.textContent = 'password'; // Replace with actual password in a real scenario
            } else {
                passwordField.textContent = '************************';
            }
        });
    };

    const eyeIcons = document.querySelectorAll('.eye, .eye2');
    eyeIcons.forEach((eyeIcon, index) => {
        const passwordField = document.querySelectorAll('.label3')[index + 1]; // Adjust index as needed
        togglePasswordVisibility(eyeIcon, passwordField);
    });

    // Validate form fields
    const validateForm = () => {
        const username = document.querySelector('.label3:nth-of-type(1)').textContent.trim();
        const password = passwordField.textContent.trim();
        const confirmPassword = confirmPasswordField.textContent.trim();
        const email = emailField.textContent.trim();
        const phone = phoneField.textContent.trim();

        if (!username || !password || !confirmPassword || !email || !phone) {
            alert('Please fill in all the fields.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        // Additional validation can be added here

        return true;
    };

    // Handle Create Account button click
    createAccountButton.addEventListener('click', () => {
        if (validateForm()) {
            alert('Account created successfully!');
            // Additional account creation logic can be added here
        }
    });

    // Handle checkbox toggle
    const checkbox = document.querySelector('.checkbox');
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checked'); // Add logic to mark checkbox as checked or unchecked
    });
});
