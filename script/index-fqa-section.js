

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    const item = btn.parentElement;
    const content = item.querySelector(".faq-content");
    const question = item.querySelector(".question");
    const arrow = item.querySelector(".arrow svg");

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
      content.style.maxHeight = "0px";

      question.classList.remove("text-black");
      question.classList.add("text-white");

      arrow.classList.remove("rotate-180");

      arrow.parentElement.classList.remove("border-black");
      arrow.parentElement.classList.add("border-white");

    } else {
      content.style.maxHeight = content.scrollHeight + "px";

      question.classList.remove("text-white");
      question.classList.add("text-black");

      arrow.classList.add("rotate-180");

      arrow.parentElement.classList.remove("border-white");
      arrow.parentElement.classList.add("border-black");
    }

  });
});