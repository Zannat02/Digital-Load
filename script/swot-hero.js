document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".matrix-box");

    cards.forEach((card, index) => {

        const delay = Math.floor(index / 2) * 400;

        setTimeout(() => {
            card.classList.add("show");
        }, delay);

    });

});