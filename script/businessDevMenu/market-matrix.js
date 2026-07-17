document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("marketMatrixQuadrants");

    if(!quadrantsWrap) return;

    const quadrants = quadrantsWrap.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("marketMatrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("marketMatrixDetailTitle");

    const detailDesc = document.getElementById("marketMatrixDetailDesc");

    const detailList = document.getElementById("marketMatrixDetailList");

    const data = {

        research:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"MARKET RESEARCH",

            title:"Customer Insights",

            desc:"Understanding who your customers are and what drives their decisions is the foundation of any successful business strategy.",

            items:["Customer Insights","Competitor Analysis","Industry Trends"]

        },

        analysis:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"DATA ANALYSIS",

            title:"Statistical Insight",

            desc:"We turn raw numbers into clear, meaningful patterns that reveal exactly where your business opportunities lie.",

            items:["Statistical Insight","Market Trends","Data Visualization"]

        },

        strategy:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"STRATEGY",

            title:"Actionable Roadmap",

            desc:"Every insight is translated into a clear, practical strategy your team can execute with confidence.",

            items:["Actionable Roadmap","Goal Alignment","Resource Planning"]

        },

        performance:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"PERFORMANCE",

            title:"KPI Monitoring",

            desc:"We track the metrics that matter, so your strategy keeps improving based on real, measurable results.",

            items:["KPI Monitoring","Performance Reporting","Continuous Improvement"]

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

    const defaultQuadrant = quadrantsWrap.querySelector('.quadrant[data-quadrant="research"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});