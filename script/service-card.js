

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

  const button = card.querySelector(".learn-more-btn");

  // Card click (mobile)
  card.addEventListener("click", function (e) {

    if (e.target.closest(".learn-more-btn")) return;

    if (window.innerWidth < 1024) {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    }
  });

  // Button click (ROUTE FIX)
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    const link = card.getAttribute("data-link");
    window.location.href = link;
  });

});