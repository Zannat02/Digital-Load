document.addEventListener("DOMContentLoaded", function() {
  const text = document.getElementById("animated-text");
  const letters = text.textContent.split("");

  text.textContent = ""; // old text remove

  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    
    // handle spaces
    if (letter === " ") {
      span.style.width = "0.35em"; // gap between words
    } else {
      span.style.animationDelay = `${index * 0.05}s`;
    }

    text.appendChild(span);
  });
});