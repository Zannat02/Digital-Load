const container = document.getElementById("testimonial-container");
const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function getCardsPerView() {

  if (window.innerWidth >= 1024) {
    return 3;
  }

  else if (window.innerWidth >= 768) {
    return 2;
  }

  else {
    return 1;
  }

}

function updateSlider() {

  const cardsPerView = getCardsPerView();
  const cardWidth = cards[0].getBoundingClientRect().width + 32;

  container.style.transform =
    `translateX(-${index * cardWidth * cardsPerView}px)`;

  dots.forEach(dot => dot.classList.remove("bg-white"));
  dots.forEach(dot => dot.classList.add("bg-gray-400"));

  if (dots[index]) {
    dots[index].classList.remove("bg-gray-400");
    dots[index].classList.add("bg-white");
  }
}


nextBtn.addEventListener("click", () => {

  const cardsPerView = getCardsPerView();
  const totalSlides = Math.ceil(cards.length / cardsPerView);

  if (index < totalSlides - 1) {
    index++;
  }

  updateSlider();

});

prevBtn.addEventListener("click", () => {

  if (index > 0) {
    index--;
  }

  updateSlider();

});

window.addEventListener("resize", () => {

  index = 0;
  updateSlider();

});

updateSlider();

dots.forEach((dot, i) => {

  dot.addEventListener("click", () => {

    index = i;
    updateSlider();

  });

});