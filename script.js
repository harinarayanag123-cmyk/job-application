document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Name check
    if (name === "") {
        setError("name", "Name is required");
        isValid = false;
    }

    // Email check
    if (email === "") {
        setError("email", "Email is required");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        setError("email", "Enter a valid email");
        isValid = false;
    }

    // Phone check
    if (phone === "") {
        setError("phone", "Phone number is required");
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        setError("phone", "Enter a valid 10-digit phone number");
        isValid = false;
    }

    // Message check
    if (message === "") {
        setError("message", "Message cannot be empty");
        isValid = false;
    }

    // Submit success
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});

function setError(id, message) {
    const element = document.getElementById(id);
    element.nextElementSibling.textContent = message;
}


