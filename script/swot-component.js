

document.addEventListener("DOMContentLoaded", () => {

    const panels = document.querySelectorAll(".swot-panel");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.20

    });

    panels.forEach(panel => {

        observer.observe(panel);

    });

});