const securityReveal = document.querySelectorAll('.securityReveal');

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }

    });

},{ threshold:0.15 });

securityReveal.forEach(item => {

    revealObserver.observe(item);

});