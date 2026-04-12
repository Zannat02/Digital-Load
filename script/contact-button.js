document.addEventListener("DOMContentLoaded", function () {
  const helpBtn = document.getElementById("helpBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");

  
  if (!helpBtn || !whatsappBtn) return;

  let isOpen = false;

 
  function openWhatsApp() {
    whatsappBtn.classList.remove(
      "opacity-0",
      "scale-75",
      "translate-y-4",
      "pointer-events-none"
    );

    whatsappBtn.classList.add(
      "opacity-100",
      "scale-100",
      "-translate-y-2",
      "pointer-events-auto"
    );

    isOpen = true;
  }

  function closeWhatsApp() {
    whatsappBtn.classList.remove(
      "opacity-100",
      "scale-100",
      "-translate-y-2",
      "pointer-events-auto"
    );

    whatsappBtn.classList.add(
      "opacity-0",
      "scale-75",
      "translate-y-4",
      "pointer-events-none"
    );

    isOpen = false;
  }

  
  helpBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    if (isOpen) {
      closeWhatsApp();
    } else {
      openWhatsApp();
    }
  });

 
  whatsappBtn.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  
  document.addEventListener("click", function (e) {
    if (
      isOpen &&
      !helpBtn.contains(e.target) &&
      !whatsappBtn.contains(e.target)
    ) {
      closeWhatsApp();
    }
  });

  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen) {
      closeWhatsApp();
    }
  });

 
  window.addEventListener("resize", function () {
    if (window.innerWidth < 320 && isOpen) {
      closeWhatsApp();
    }
  });
});