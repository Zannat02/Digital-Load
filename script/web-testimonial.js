const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This is a testimonial card. Smooth UI, clean design and responsive layout across all devices.",
    name: "Michael Terry",
    position: "Developer"
  },

  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amazing service and beautiful UI design. Everything works perfectly on every device.",
    name: "Emilia Clarke",
    position: "UI Designer"
  },

  {
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "Their development quality is outstanding. Fast performance and modern experience.",
    name: "Cristian Torres",
    position: "Manager"
  }
];

let currentIndex = 0;

const clientImage = document.getElementById("clientImage");
const clientText = document.getElementById("clientText");
const clientName = document.getElementById("clientName");
const clientPosition = document.getElementById("clientPosition");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateTestimonial(index) {

  clientImage.style.opacity = 0;
  clientText.style.opacity = 0;
  clientName.style.opacity = 0;
  clientPosition.style.opacity = 0;

  setTimeout(() => {

    clientImage.src = testimonials[index].image;
    clientText.textContent = testimonials[index].text;
    clientName.textContent = testimonials[index].name;
    clientPosition.textContent = testimonials[index].position;

    clientImage.style.opacity = 1;
    clientText.style.opacity = 1;
    clientName.style.opacity = 1;
    clientPosition.style.opacity = 1;

  }, 200);
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }

  updateTestimonial(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }

  updateTestimonial(currentIndex);
});