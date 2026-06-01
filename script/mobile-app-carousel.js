// const slides = document.querySelectorAll(".hero-slide");
// const dots = document.querySelectorAll(".dot");

// let current = 0;

// function showSlide(index) {

//     slides.forEach((slide, i) => {
//         slide.style.opacity = i === index ? "1" : "0";
//         slide.style.zIndex = i === index ? "10" : "0";
//     });

//     dots.forEach((dot, i) => {
//         dot.classList.toggle("bg-white", i === index);
//         dot.classList.toggle("bg-white/40", i !== index);
//     });

// }

// function nextSlide() {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// }

// setInterval(nextSlide, 5000);

// // dot click
// dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//         current = i;
//         showSlide(current);
//     });
// });

// // init
// showSlide(current);



// const slides = document.querySelectorAll(".hero-slide");
// const dots = document.querySelectorAll(".dot");

// let current = 0;

// function showSlide(index) {

//     slides.forEach((slide, i) => {

//         if (i === index) {
//             slide.style.opacity = "1";
//             slide.style.pointerEvents = "auto";
//             slide.style.zIndex = "10";
//         } else {
//             slide.style.opacity = "0";
//             slide.style.pointerEvents = "none";
//             slide.style.zIndex = "0";
//         }

//     });

//     dots.forEach((dot, i) => {
//         dot.classList.toggle("bg-white", i === index);
//         dot.classList.toggle("bg-white/40", i !== index);
//     });

// }

// function nextSlide() {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// }

// setInterval(nextSlide, 5000);

// // dots click
// dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//         current = i;
//         showSlide(current);
//     });
// });

// // INIT
// showSlide(current);


// const slides = document.querySelectorAll(".hero-slide");
// const dots = document.querySelectorAll(".dot");

// let current = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.classList.add("opacity-100");
//             slide.classList.remove("opacity-0", "pointer-events-none");
//             slide.style.zIndex = "10";
//         } else {
//             slide.classList.add("opacity-0", "pointer-events-none");
//             slide.classList.remove("opacity-100");
//             slide.style.zIndex = "0";
//         }
//     });

//     dots.forEach((dot, i) => {
//         dot.classList.toggle("bg-white", i === index);
//         dot.classList.toggle("bg-white/40", i !== index);
//     });
// }

// function nextSlide() {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// }

// setInterval(nextSlide, 5000);

// dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//         current = i;
//         showSlide(current);
//     });
// });

// showSlide(current);


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