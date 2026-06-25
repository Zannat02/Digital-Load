const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 80;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;
        }
    };

    update();
};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.4
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});