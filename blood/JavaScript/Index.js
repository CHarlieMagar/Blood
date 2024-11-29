// JavaScript for Login Page Functionality

document.addEventListener("DOMContentLoaded", () => {
    // Toggle password visibility
    const passwordField = document.querySelector(".frame-4 .label3");
    const eyeIcon = document.querySelector(".eye");
    let passwordVisible = false;

    if (eyeIcon) {
        eyeIcon.addEventListener("click", () => {
            passwordVisible = !passwordVisible;
            passwordField.textContent = passwordVisible
                ? "yourpassword" // Replace with actual password value in a real app
                : "********************";
        });
    }

    // Login button click handler
    const loginButton = document.querySelector(".button2");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            const username = document.querySelector(".label2").value;
            const password = passwordField.textContent;

            // Example validation (replace with real validation or API calls)
            if (username === "admin" && password === "yourpassword") {
                alert("Login successful!");
                window.location.href = "../Html/admin.html"; // Redirect to admin page
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Forgot password functionality
    const forgotPassword = document.querySelector(".forgot-password");
    if (forgotPassword) {
        forgotPassword.addEventListener("click", () => {
            alert("Redirecting to password recovery...");
            window.location.href = "../Html/ForgotPassword.html"; // Replace with your recovery page
        });
    }

    // Redirect to create account page
    const createAccountLink = document.querySelector(".create a");
    if (createAccountLink) {
        createAccountLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "../Html/CreateAccount.html"; // Replace with actual create account page
        });
    }
});
