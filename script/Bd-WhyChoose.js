

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const button = item.querySelector(".faq-btn");

        button.addEventListener("click", () => {

            // যদি এটিই already open থাকে
            const isActive = item.classList.contains("active");

            // সব close
            faqItems.forEach((faq) => {
                faq.classList.remove("active");
            });

            // যদি আগে close থাকে তাহলে open হবে
            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

});