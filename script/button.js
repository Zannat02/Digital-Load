 const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollBtn.classList.remove("opacity-0", "scale-0");
      scrollBtn.classList.add("opacity-100", "scale-100");
    } else {
      scrollBtn.classList.add("opacity-0", "scale-0");
      scrollBtn.classList.remove("opacity-100", "scale-100");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });