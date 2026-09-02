document.addEventListener("DOMContentLoaded", function () {
    let stepCards = document.querySelectorAll(".denticsStepItem");
    let searchContainer = document.getElementById("searchContainer");
    let slideSearchForm = document.getElementById("slideSearchForm");

    // Show Search Bar when clicking ANY card
    stepCards.forEach(function (card) {
        card.style.cursor = "pointer";
        card.addEventListener("click", function () {
            searchContainer.classList.remove("d-none");
            searchContainer.scrollIntoView({ behavior: "smooth" });
        });
    });

    slideSearchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let phone = document.getElementById("slidePhone").value.trim();
        let date = document.getElementById("slideDate").value;
        let time = document.getElementById("slideTime").value;

        let phoneRegex = /^01[0125][0-9]{8}$/;

        if (!phoneRegex.test(phone)) {
            alert("Invalid Egyptian phone number!");
            return;
        }

        if (!date || !time) {
            alert("Please complete date and time fields.");
            return;
        }

        alert("Your appointment has been booked successfully!");
    });
});