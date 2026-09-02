const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    // Email Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Password Regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Email validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
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

    alert("Sign In successful!");

    form.reset();
});