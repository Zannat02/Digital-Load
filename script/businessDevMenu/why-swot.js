document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".why-item");

    items.forEach(item => {

        const header = item.querySelector(".why-item-header");

        header.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            items.forEach(i => i.classList.remove("active"));

            if(!isActive){

                item.classList.add("active");

            }

        });

    });

});