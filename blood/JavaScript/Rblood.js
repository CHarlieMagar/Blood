document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const nameField = document.querySelector(".frame-273 .label3");
    const phoneField = document.querySelector(".frame-273 .label3:nth-of-type(2)");
    const emailField = document.querySelector(".frame-274 .label5");
    const bloodTypeDropdown = document.querySelector(".frame-44");
    const bloodTypeField = document.querySelector(".frame-44 .label5");
    const messageField = document.querySelector(".frame-271 .enter-the-message");
    const sendRequestButton = document.querySelector(".button4");

    // Blood types for dropdown
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    
    // Populate blood type dropdown
    bloodTypeDropdown.addEventListener("click", () => {
        const dropdownMenu = document.createElement("div");
        dropdownMenu.classList.add("dropdown-menu");
        bloodTypes.forEach((type) => {
            const option = document.createElement("div");
            option.textContent = type;
            option.classList.add("dropdown-option");
            option.addEventListener("click", () => {
                bloodTypeField.textContent = type;
                document.body.removeChild(dropdownMenu);
            });
            dropdownMenu.appendChild(option);
        });
        dropdownMenu.style.position = "absolute";
        dropdownMenu.style.top = `${bloodTypeDropdown.getBoundingClientRect().bottom}px`;
        dropdownMenu.style.left = `${bloodTypeDropdown.getBoundingClientRect().left}px`;
        dropdownMenu.style.background = "#fff";
        dropdownMenu.style.border = "1px solid #ccc";
        dropdownMenu.style.zIndex = "1000";
        document.body.appendChild(dropdownMenu);
    });

    // Remove dropdown on click outside
    document.addEventListener("click", (e) => {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        if (dropdownMenu && !bloodTypeDropdown.contains(e.target)) {
            document.body.removeChild(dropdownMenu);
        }
    });

    // Form submission
    sendRequestButton.addEventListener("click", () => {
        const name = nameField.textContent.trim();
        const phone = phoneField.textContent.trim();
        const email = emailField.textContent.trim();
        const bloodType = bloodTypeField.textContent.trim();
        const message = messageField.textContent.trim();

        // Validation
        if (!name || name === "Please enter your name") {
            alert("Please enter a valid name.");
            return;
        }
        if (!phone || !/^\+977\d{9,10}$/.test(phone)) {
            alert("Please enter a valid phone number in the format +977XXXXXXXXXX.");
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!bloodTypes.includes(bloodType)) {
            alert("Please select a valid blood type.");
            return;
        }
        if (!message || message === "Enter the message") {
            alert("Please enter a message.");
            return;
        }

        // Simulate form submission
        alert("Blood request submitted successfully!\n" +
              `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n` +
              `Blood Type: ${bloodType}\nMessage: ${message}`);
    });
});
