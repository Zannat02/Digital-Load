
//  animation

document.addEventListener("DOMContentLoaded", () => {

    const badge = document.querySelector(".analysis-badge");

    if (!badge) return;

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                badge.classList.add("show");

                obs.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.35

    });

    observer.observe(badge);

});




//tooltipes

document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('.swot-icon-tip').forEach(function(icon){

        icon.addEventListener('click', function(e){

            e.stopPropagation();

            var isActive = icon.classList.contains('active');

            document.querySelectorAll('.swot-icon-tip.active').forEach(function(other){

                other.classList.remove('active');

            });

            if(!isActive){

                icon.classList.add('active');

            }

        });

    });

    document.addEventListener('click', function(){

        document.querySelectorAll('.swot-icon-tip.active').forEach(function(icon){

            icon.classList.remove('active');

        });

    });

});