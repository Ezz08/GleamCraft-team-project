const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = this.parentElement.nextElementSibling;
        const icon = this.querySelector(".faq-icon");

        if (answer.classList.contains("show")) {

            answer.classList.remove("show");
            icon.textContent = "+";

        } else {

            answer.classList.add("show");
            icon.textContent = "−";

        }

    });

});