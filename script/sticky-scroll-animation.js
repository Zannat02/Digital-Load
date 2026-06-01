


gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".project-card");

cards.forEach((card, i) => {

    gsap.set(card, {
        zIndex: cards.length - i,
        transformOrigin: "center top"
    });

    if (i !== cards.length - 1) {

        const nextCard = cards[i + 1];

        const tl = gsap.timeline({
           

            scrollTrigger: {
                trigger: card,

                start: () => window.innerWidth < 768
                    ? "top top-=40"
                    : "top top-=130",

                end: () => window.innerWidth < 768
                    ? "+=140%"
                    : "+=80%",

                scrub: true,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1
            }
        });

        // Current card blur
        tl.to(card, {
            scale: 0.9,
            y: -40,
            opacity: 0,
            filter: "blur(10px)",
            ease: "power1.out"
        });

        // Next card appear
        tl.fromTo(nextCard,
            {
                scale: 0.96,
                y: 60,
                opacity: 0,
                filter: "blur(8px)"
            },
            {
                scale: 1,
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out"
            },
            "<"
        );
    }
});