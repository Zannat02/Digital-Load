

// const forms = document.querySelectorAll("#contactForm, #homeContactForm");

// forms.forEach((form) => {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         let isValid = true;

//         // Name
//         const name = form.querySelector("#name");
//         const nameError = form.querySelector("#nameError");

//         if (name.value.trim() === "") {
//             nameError.classList.remove("hidden");
//             isValid = false;
//         } else {
//             nameError.classList.add("hidden");
//         }

//         // Email
//         const email = form.querySelector("#email");
//         const emailError = form.querySelector("#emailError");

//         const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//         if (!email.value.match(emailPattern)) {
//             emailError.classList.remove("hidden");
//             isValid = false;
//         } else {
//             emailError.classList.add("hidden");
//         }

//         // Message
//         const message = form.querySelector("#message");
//         const messageError = form.querySelector("#messageError");

//         if (message.value.trim() === "") {
//             messageError.classList.remove("hidden");
//             isValid = false;
//         } else {
//             messageError.classList.add("hidden");
//         }

//         if (isValid) {

//             alert("Form submitted successfully!");

//             form.reset();

//         }

//     });

// });


const forms = document.querySelectorAll("#contactForm, #homeContactForm");

forms.forEach((form) => {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let isValid = true;

        // Name
        const name = form.querySelector("#name");
        const nameError = form.querySelector("#nameError");

        if (name.value.trim() === "") {
            nameError.classList.remove("hidden");
            isValid = false;
        } else {
            nameError.classList.add("hidden");
        }

        // Email
        const email = form.querySelector("#email");
        const emailError = form.querySelector("#emailError");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.value.match(emailPattern)) {
            emailError.classList.remove("hidden");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Message
        const message = form.querySelector("#message");
        const messageError = form.querySelector("#messageError");

        if (message.value.trim() === "") {
            messageError.classList.remove("hidden");
            isValid = false;
        } else {
            messageError.classList.add("hidden");
        }

        if (!isValid) return;

        // Optional Fields
        const phone = form.querySelector("#phone");
        const company = form.querySelector("#company");

        const templateParams = {
            name: name.value,
            email: email.value,
            phone: phone ? phone.value : "",
            company: company ? company.value : "",
            message: message.value
        };

        emailjs.send(
            "service_w38t6p1",
            "template_0bwl5ql",
            templateParams
        )
        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("Failed to send message!");

        });

    });

});