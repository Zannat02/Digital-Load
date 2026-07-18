


const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {

    slides.forEach((slide, i) => {

        if (i === index) {

            slide.classList.remove("opacity-0");
            slide.classList.add("opacity-100");

            slide.style.zIndex = "1";

        } else {

            slide.classList.remove("opacity-100");
            slide.classList.add("opacity-0");

            slide.style.zIndex = "0";
        }

    });

    dots.forEach((dot, i) => {

        if (i === index) {

            dot.classList.add("bg-white");

            dot.classList.remove("bg-white/40");

        } else {

            dot.classList.remove("bg-white");

            dot.classList.add("bg-white/40");

        }

    });

}

function nextSlide() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);

}

setInterval(nextSlide, 5000);

dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        current = i;

        showSlide(current);

    });

});

showSlide(current);