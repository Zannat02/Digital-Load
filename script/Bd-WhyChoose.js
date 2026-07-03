

// document.addEventListener("DOMContentLoaded", () => {

//     const faqItems = document.querySelectorAll(".faq-item");

//     faqItems.forEach((item) => {

//         const button = item.querySelector(".faq-btn");

//         button.addEventListener("click", () => {

       
//             const isActive = item.classList.contains("active");

          
//             faqItems.forEach((faq) => {
//                 faq.classList.remove("active");
//             });

        
//             if (!isActive) {
//                 item.classList.add("active");
//             }

//         });

//     });

// });


document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-content");

        button.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                faq.querySelector(".faq-content").style.maxHeight = null;

            });

            if (!isOpen) {

                item.classList.add("active");

                content.style.maxHeight = content.scrollHeight + "px";

            }

        });

    });

});