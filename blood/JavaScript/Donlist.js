// JavaScript for donor-list.html

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll(".frame-3 a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default navigation for now
            const href = link.getAttribute("href");
            if (href) {
                window.location.href = href; // Redirect to the appropriate page
            }
        });
    });

    // Add interactivity to the "Request" buttons for donors
    const requestButtons = document.querySelectorAll(".button4");
    requestButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Blood request sent! Thank you.");
        });
    });

    // Handle the form submission for blood requests
    const sendRequestButton = document.querySelector(".frame-437 .button4");
    if (sendRequestButton) {
        sendRequestButton.addEventListener("click", () => {
            const name = document.querySelector('.frame-273 .label3').textContent.trim();
            const phone = document.querySelector('.frame-273 .label:nth-child(2) .label3').textContent.trim();
            const email = document.querySelector('.frame-274 .label4 .label5').textContent.trim();
            const bloodType = document.querySelector('.frame-44 .label5').textContent.trim();

            if (name && phone && email && bloodType) {
                alert(`Blood request submitted successfully!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nBlood Type: ${bloodType}`);
            } else {
                alert("Please fill in all the required fields before submitting.");
            }
        });
    }

    // Handle the form submission for donor registration
    const reDonateButton = document.querySelector(".frame-437 .button6 .button4");
    if (reDonateButton) {
        reDonateButton.addEventListener("click", () => {
            const name = document.querySelector('.frame-2752 .label3').textContent.trim();
            const phone = document.querySelector('.frame-273 .label:nth-child(2) .label3').textContent.trim();
            const email = document.querySelector('.frame-274 .label4 .label5').textContent.trim();
            const location = document.querySelector('.frame-2752 .frame-43 .label5').textContent.trim();

            if (name && phone && email && location) {
                alert(`Donor information submitted successfully!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}`);
            } else {
                alert("Please fill in all the required fields before submitting.");
            }
        });
    }

    // Add functionality for dropdowns (e.g., blood type selection)
    const dropdown = document.querySelector(".frame-44");
    if (dropdown) {
        dropdown.addEventListener("click", () => {
            const dropdownMenu = document.createElement("div");
            dropdownMenu.classList.add("dropdown-menu");
            dropdownMenu.innerHTML = `
                <div>A+</div>
                <div>B+</div>
                <div>O+</div>
                <div>O-</div>
                <div>AB+</div>
                <div>AB-</div>
            `;
            dropdownMenu.style.position = "absolute";
            dropdownMenu.style.backgroundColor = "#fff";
            dropdownMenu.style.border = "1px solid #ccc";
            dropdownMenu.style.padding = "10px";
            document.body.appendChild(dropdownMenu);

            // Position the dropdown under the current field
            const rect = dropdown.getBoundingClientRect();
            dropdownMenu.style.left = `${rect.left}px`;
            dropdownMenu.style.top = `${rect.bottom}px`;

            // Handle option selection
            dropdownMenu.addEventListener("click", (event) => {
                const selectedValue = event.target.textContent.trim();
                if (selectedValue) {
                    document.querySelector('.frame-44 .label5').textContent = selectedValue;
                }
                document.body.removeChild(dropdownMenu);
            });

            // Close the dropdown when clicking outside
            document.addEventListener("click", (event) => {
                if (!dropdownMenu.contains(event.target)) {
                    document.body.removeChild(dropdownMenu);
                }
            }, { once: true });
        });
    }
});
