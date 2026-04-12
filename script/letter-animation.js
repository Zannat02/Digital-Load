document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("animated-text");
  const letters = text.textContent.trim().split("");

  text.textContent = "";

  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.classList.add("letter");

    if (letter === " ") {
      span.innerHTML = "&nbsp;";
      span.style.width = "0.35em";
    } else {
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.05}s`;
    }

    text.appendChild(span);
  });
});