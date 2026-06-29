// Scroll Reveal

// const securityElements = document.querySelectorAll('.securityReveal');

// const securityObserver = new IntersectionObserver((entries) => {

//     entries.forEach((entry) => {

//         if (entry.isIntersecting) {

//             entry.target.classList.add('active');

//         }

//     });

// }, {
//     threshold: 0.2
// });

// securityElements.forEach((element) => {

//     securityObserver.observe(element);

// });


const securityElements = document.querySelectorAll('.securityReveal');

const securityObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('active');

        }

    });

}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

securityElements.forEach((element) => {

    securityObserver.observe(element);

});