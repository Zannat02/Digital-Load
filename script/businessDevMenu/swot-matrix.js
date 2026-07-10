document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("matrixQuadrants");

    const quadrants = document.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("matrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("matrixDetailTitle");

    const detailDesc = document.getElementById("matrixDetailDesc");

    const detailList = document.getElementById("matrixDetailList");

    const data = {

        strength:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"STRENGTH",

            title:"Skilled Team",

            desc:"A capable, experienced team is one of the strongest assets a business can have, driving quality and consistent results.",

            items:["Skilled Team","Strong Brand","Loyal Customers"]

        },

        weakness:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"WEAKNESS",

            title:"Limited Budget",

            desc:"Internal limitations such as budget or resource constraints can slow growth if they are not identified and addressed early.",

            items:["Limited Budget","Small Team","Weak Marketing"]

        },

        opportunity:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"OPPORTUNITY",

            title:"Emerging Markets",

            desc:"New markets and shifting customer needs open doors for expansion, innovation and long-term competitive advantage.",

            items:["Emerging Markets","Digital Growth","Strategic Partnerships"]

        },

        threat:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"THREAT",

            title:"Rising Competition",

            desc:"External risks like increasing competition and market shifts can impact business stability if not planned for in advance.",

            items:["Rising Competition","Market Shifts","Economic Uncertainty"]

        }

    };

    function updateDetail(key){

        const info = data[key];

        if(!info) return;

        detailPanel.style.setProperty("--q-color", info.color);

        detailPanel.style.setProperty("--q-color-rgb", info.colorRgb);

        detailPanel.classList.remove("matrix-fade");

        void detailPanel.offsetWidth;

        detailPanel.classList.add("matrix-fade");

        detailTag.textContent = info.tag;

        detailTitle.textContent = info.title;

        detailDesc.textContent = info.desc;

        detailList.innerHTML = info.items

            .map(item => `<li><i class="fas fa-check"></i> ${item}</li>`)

            .join("");

    }

    function setActive(quadrant){

        quadrants.forEach(q => q.classList.remove("is-active"));

        quadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

        updateDetail(quadrant.dataset.quadrant);

    }

    quadrants.forEach(quadrant => {

        quadrant.addEventListener("mouseenter", () => {

            if(window.matchMedia("(hover: hover)").matches){

                setActive(quadrant);

            }

        });

        quadrant.addEventListener("click", () => {

            setActive(quadrant);

        });

    });

    const defaultQuadrant = document.querySelector('.quadrant[data-quadrant="strength"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});