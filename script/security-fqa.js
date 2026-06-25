document.querySelectorAll(".faq-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const item = btn.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});