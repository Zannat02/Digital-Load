const tabButtons = document.querySelectorAll(".web-tab-btn");
const tabContents = document.querySelectorAll(".web-tab-content");

tabButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const tabId = button.dataset.tab;


        // remove active state
        tabButtons.forEach((btn) => {

            btn.classList.remove("bg-[#2EA4FF]");
            btn.classList.add("bg-[#13263F]");

        });


        // active button
        button.classList.remove("bg-[#13263F]");
        button.classList.add("bg-[#2EA4FF]");


        // hide all tabs
        tabContents.forEach((content) => {

            content.classList.add("hidden");

        });


        // show selected tab
        document
            .getElementById(tabId)
            .classList.remove("hidden");

    });

});