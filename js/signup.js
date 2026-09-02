const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const check = document.querySelector("#check").checked;

    // Name Regex
    const nameRegex = /^[a-zA-Z]{3,15}$/;

    // Password Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Email Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Name validation
    if (!nameRegex.test(name)) {
        alert("Name must contain only letters and be between 3 and 15 characters.");
        return;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    // Email validation
    if (!emailRegex.test(email)) {
        alert(
            "Please enter a valid email address."
        );
        return;
    }

    // Password validation
    if (!passwordRegex.test(password)) {
        alert(
            "Password must be at least 8 characters and contain " +
            "an uppercase letter, a lowercase letter, and a number."
        );
        return;
    }

    // Terms validation
    if (!check) {
        alert("You must agree to the terms & policy.");
        return;
    }

    alert("Sign Up successful!");

    form.reset();
});

