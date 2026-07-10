document.addEventListener("DOMContentLoaded", () => {

    const quadrantsWrap = document.getElementById("pestelMatrixQuadrants");

    if(!quadrantsWrap) return;

    const quadrants = quadrantsWrap.querySelectorAll(".quadrant");

    const detailPanel = document.getElementById("pestelMatrixDetail");

    const detailTag = detailPanel.querySelector(".matrix-detail-tag");

    const detailTitle = document.getElementById("pestelMatrixDetailTitle");

    const detailDesc = document.getElementById("pestelMatrixDetailDesc");

    const detailList = document.getElementById("pestelMatrixDetailList");

    const data = {

        political:{

            color:"#293681",

            colorRgb:"41,54,129",

            tag:"POLITICAL",

            title:"Government Policies",

            desc:"Political decisions and government policies can directly influence how a business operates, from taxation to trade regulations.",

            items:["Government Policies","Trade Regulations","Political Stability"]

        },

        economic:{

            color:"#EC6530",

            colorRgb:"236,101,48",

            tag:"ECONOMIC",

            title:"Inflation & Interest Rates",

            desc:"Economic conditions such as inflation, interest rates and exchange rates directly affect purchasing power and business costs.",

            items:["Inflation Rates","Interest Rates","Exchange Rates"]

        },

        social:{

            color:"#8FDDDF",

            colorRgb:"143,221,223",

            tag:"SOCIAL",

            title:"Consumer Behavior",

            desc:"Cultural trends, demographics and lifestyle shifts shape how customers perceive and engage with your brand.",

            items:["Consumer Behavior","Cultural Trends","Demographics"]

        },

        technological:{

            color:"#E05454",

            colorRgb:"224,84,84",

            tag:"TECHNOLOGICAL",

            title:"Emerging Technology",

            desc:"New technologies and automation can disrupt industries, creating both opportunities and competitive threats.",

            items:["Emerging Technology","Automation","Digital Innovation"]

        },

        environmental:{

            color:"#4CAF7D",

            colorRgb:"76,175,125",

            tag:"ENVIRONMENTAL",

            title:"Sustainability Standards",

            desc:"Environmental regulations and sustainability expectations increasingly influence business operations and reputation.",

            items:["Sustainability Standards","Climate Regulations","Resource Availability"]

        },

        legal:{

            color:"#A855F7",

            colorRgb:"168,85,247",

            tag:"LEGAL",

            title:"Compliance Requirements",

            desc:"Employment law, industry regulations and compliance requirements must be navigated carefully to avoid legal risk.",

            items:["Compliance Requirements","Employment Law","Industry Regulations"]

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

    const defaultQuadrant = quadrantsWrap.querySelector('.quadrant[data-quadrant="political"]');

    if(defaultQuadrant){

        defaultQuadrant.classList.add("is-active");

        quadrantsWrap.classList.add("has-active");

    }

});