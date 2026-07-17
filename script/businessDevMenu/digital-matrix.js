document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("digitalMatrixQuadrants");

    if(!quadrantsWrap) return;

    const quadrants = quadrantsWrap.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("digitalMatrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("digitalMatrixDetailTitle");

    const detailDesc = document.getElementById("digitalMatrixDetailDesc");

    const detailList = document.getElementById("digitalMatrixDetailList");

    const data = {

        automation:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"PROCESS AUTOMATION",

            title:"Workflow Automation",

            desc:"We identify repetitive manual tasks and automate them, saving time and reducing errors across your business.",

            items:["Workflow Automation","Task Scheduling","Error Reduction"]

        },

        cloud:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"CLOUD MIGRATION",

            title:"Secure Cloud Access",

            desc:"We move your systems and data to the cloud, giving your team secure, flexible access from anywhere.",

            items:["Secure Cloud Access","Scalable Infrastructure","Remote Collaboration"]

        },

        integration:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"SYSTEM INTEGRATION",

            title:"Connected Systems",

            desc:"We connect the tools and platforms you already use, so data flows smoothly across your business.",

            items:["Connected Systems","API Integration","Unified Data Flow"]

        },

        data:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"DATA STRATEGY",

            title:"Actionable Insight",

            desc:"We help you collect, organize and use data securely, turning scattered information into actionable insight.",

            items:["Data Organization","Secure Storage","Actionable Insight"]

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

    const defaultQuadrant = quadrantsWrap.querySelector('.quadrant[data-quadrant="automation"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});