document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Name
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // Email
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Message
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (message.value.trim() === "") {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});