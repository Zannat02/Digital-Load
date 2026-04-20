// sponsor.js
document.addEventListener("DOMContentLoaded", function () {

  const logos = document.querySelectorAll(".sponsor-logo");

  const isMobile = () => window.innerWidth < 1024;

  logos.forEach((logo) => {

    logo.addEventListener("click", function (e) {

   
      if (!isMobile()) return;

     
      e.stopPropagation();

   
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        logos.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
      }

    });

  });

 
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      logos.forEach(item => item.classList.remove("active"));
    }
  });

});

