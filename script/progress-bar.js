

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".progress-item");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bars = entry.target.querySelectorAll(".progress-bar");

                bars.forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });

            }

        });

    }, {
        threshold: 0.5
    });

    items.forEach(item => observer.observe(item));

});