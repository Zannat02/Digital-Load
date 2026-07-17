document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("startupMatrixQuadrants");

    if(!quadrantsWrap) return;

    const quadrants = quadrantsWrap.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("startupMatrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("startupMatrixDetailTitle");

    const detailDesc = document.getElementById("startupMatrixDetailDesc");

    const detailList = document.getElementById("startupMatrixDetailList");

    const data = {

        planning:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"BUSINESS PLANNING",

            title:"Idea Validation",

            desc:"Before building anything, we help validate your idea and shape it into a clear, actionable business plan.",

            items:["Idea Validation","Business Roadmap","Feasibility Study"]

        },

        funding:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"FUNDING GUIDANCE",

            title:"Investor Readiness",

            desc:"We help you prepare financial plans and pitch materials that give investors confidence in your business.",

            items:["Investor Readiness","Pitch Support","Financial Planning"]

        },

        digital:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"DIGITAL SETUP",

            title:"Tech Infrastructure",

            desc:"We set up the website, tools and systems your business needs to operate smoothly from day one.",

            items:["Website Setup","Business Tools","Tech Infrastructure"]

        },

        growth:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"GROWTH SUPPORT",

            title:"Scaling Strategy",

            desc:"As your business grows, we provide ongoing mentorship and strategy to help you scale sustainably.",

            items:["Scaling Strategy","Mentorship","Operational Support"]

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

    const defaultQuadrant = quadrantsWrap.querySelector('.quadrant[data-quadrant="planning"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});