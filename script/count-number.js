// COUNTER ANIMATION ON SCROLL
const counters = document.querySelectorAll(".counter");

let started = false; 

function startCounter() {
  if (started) return;

  const section = document.querySelector(".counter").closest("section");
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const speed = target / 100; // speed control

      const updateCount = () => {
        count += speed;

        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + " +";
        }
      };

      updateCount();
    });

    started = true;
  }
}


window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);