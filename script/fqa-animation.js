import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

new DotLottie({
  canvas: document.getElementById("faq-canvas"),
  autoplay: true,
  loop: true,
  src: "lottie-file/FAQs.lottie",
  renderConfig: {
    autoResize: true,
    devicePixelRatio: 2
  }

});