document.addEventListener("DOMContentLoaded", () => {
    // Selectors
    const loginButton = document.querySelector(".button2");
    const joinUsButton = document.querySelector(".button4");
    const registerButton = document.querySelector(".button6");
    const donorRequestButtons = document.querySelectorAll(".button5");

    // Navigation actions
    document.querySelector(".home2").addEventListener("click", () => {
        window.location.href = "../Html/home.html";
    });

    document.querySelector(".about-us").addEventListener("click", () => {
        window.location.href = "../Html/aboutus.html";
    });

    document.querySelector(".admin").addEventListener("click", () => {
        window.location.href = "../Html/admin.html";
    });

    // Login button click handler
    loginButton.addEventListener("click", () => {
        alert("Login functionality to be implemented.");
    });

    // Join Us button click handler
    joinUsButton.addEventListener("click", () => {
        alert("Join Us functionality to be implemented.");
    });

    // Donor Request Buttons
    donorRequestButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Blood request submitted!");
        });
    });

    // Form validation and registration
    registerButton.addEventListener("click", () => {
        const name = document.querySelector(".label2").textContent.trim();
        const phoneNumber = document.querySelector(".label4 .label3").textContent.trim();
        const email = document.querySelector(".label5").textContent.trim();
        const bloodType = document.querySelector(".label5").textContent.trim();
        const message = document.querySelector(".enter-the-message").textContent.trim();

        if (!name || !phoneNumber || !email || !bloodType || !message) {
            alert("Please fill in all the fields.");
        } else {
            alert("Thank you for registering your blood details!");
            // Additional backend integration can go here
        }
    });

    // Placeholder interaction for Blood Type dropdown
    const bloodTypeDropdown = document.querySelector(".chevron");
    bloodTypeDropdown.addEventListener("click", () => {
        alert("Dropdown for selecting blood type. Implement as needed.");
    });
});
