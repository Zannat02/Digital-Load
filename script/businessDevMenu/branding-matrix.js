document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("brandingMatrixQuadrants");

    if(!quadrantsWrap) return;

    const quadrants = quadrantsWrap.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("brandingMatrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("brandingMatrixDetailTitle");

    const detailDesc = document.getElementById("brandingMatrixDetailDesc");

    const detailList = document.getElementById("brandingMatrixDetailList");

    const data = {

        strategy:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"BRAND STRATEGY",

            title:"Positioning & Foundation",

            desc:"Every strong brand starts with a clear strategy that defines who you are, who you serve and what makes you different.",

            items:["Brand Positioning","Target Audience","Core Messaging"]

        },

        visual:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"VISUAL IDENTITY",

            title:"Logo & Design System",

            desc:"We craft a distinctive visual identity, logo, color palette and typography, that makes your brand instantly recognizable.",

            items:["Logo Design","Color Palette","Typography"]

        },

        voice:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"BRAND VOICE",

            title:"Tone & Messaging",

            desc:"Your brand voice shapes how you communicate, giving your business a consistent, authentic personality everywhere.",

            items:["Tone of Voice","Messaging Style","Content Personality"]

        },

        guidelines:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"GUIDELINES",

            title:"Consistency Rules",

            desc:"We document your full brand system into clear guidelines, so your team can maintain consistency at every touchpoint.",

            items:["Style Guide","Usage Rules","Brand Assets"]

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

    const defaultQuadrant = quadrantsWrap.querySelector('.quadrant[data-quadrant="strategy"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});