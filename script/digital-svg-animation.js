// SVG FLOAT ANIMATION FIXED

// SVG FLOAT ANIMATION
const slow = document.querySelector(".float-slow");
const medium = document.querySelector(".float-medium");
const fast = document.querySelector(".float-fast");

let t = 0;

function animate(){
    t += 0.01;

    if(slow){
        slow.style.transform = `translate(${Math.sin(t)*10}px, ${Math.cos(t)*6}px)`;
    }

    if(medium){
        medium.style.transform = `translate(${Math.cos(t)*12}px, ${Math.sin(t)*8}px)`;
    }

    if(fast){
        fast.style.transform = `translate(${Math.sin(t)*15}px, ${Math.cos(t)*10}px)`;
    }

    requestAnimationFrame(animate);
}

animate();

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

