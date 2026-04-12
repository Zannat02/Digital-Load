document.addEventListener("DOMContentLoaded", function () {

  const config = {
    particles: {
      number: { value: 20 },
      color: {
        value: ["#e82323", "#030c12", "#ffffff","#4aaef0"]
      },
      size: { value: 3, random: true },
      move: { speed: 2.5 },
      line_linked: { enable: false },
      opacity: { value: 0.4 },
      shape: { type: "circle" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        resize: true
      }
    },
    retina_detect: true
  };

  // MULTI SECTION INIT
  const targets = [
    "particles-js",
     "particles-tech",
     "particles-contact"
    
   
  ];

  targets.forEach(id => {
    if (document.getElementById(id)) {
      particlesJS(id, config);
    }
  });

});