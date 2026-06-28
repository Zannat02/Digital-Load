



(function () {
  var slides = document.querySelectorAll('#bd-slides .bd-slide');
  var pagiWrap = document.getElementById('bd-pagination');
  var total = slides.length;
  var current = 0;
  var DURATION = 5000;
  var timer = null;
  var RADIUS = 9;
  var CIRC = 2 * Math.PI * RADIUS;
 
  slides.forEach(function (slide, i) {
    slide.style.transition = 'transform 0.9s cubic-bezier(0.6,0,0.3,1), opacity 0.5s ease';
    slide.style.zIndex = i === 0 ? '2' : '1';
    slide.style.opacity = i === 0 ? '1' : '0';
    slide.style.transform = i === 0 ? 'translateY(0)' : 'translateY(100%)';
 
    var dot = document.createElement('button');
    dot.setAttribute('aria-label', 'go to slide ' + (i + 1));
    dot.setAttribute('type', 'button');
    dot.className = 'bd-dot';
    var dotSize = window.innerWidth < 640 ? 18 :
              window.innerWidth < 1024 ? 20 : 22;

dot.style.width = dotSize + 'px';
dot.style.height = dotSize + 'px';
dot.style.minWidth = dotSize + 'px';
    dot.style.flexShrink = '0';
    dot.style.padding = '0';
    dot.style.margin = '0';
    dot.style.border = 'none';
    dot.style.outline = 'none';
    dot.style.boxShadow = 'none';
    dot.style.borderRadius = '0';
    dot.style.background = 'none';
    dot.style.backgroundColor = 'transparent';
    dot.style.appearance = 'none';
    dot.style.webkitAppearance = 'none';
    dot.style.cursor = 'pointer';
    dot.style.display = 'flex';
    dot.style.alignItems = 'center';
    dot.style.justifyContent = 'center';
    dot.style.lineHeight = '0';
 
  dot.innerHTML =
      '<svg width="'+dotSize+'" height="'+dotSize+'" viewBox="0 0 22 22" style="transform:rotate(-90deg)">' +
        '<circle cx="11" cy="11" r="' + RADIUS + '" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"></circle>' +
        '<circle class="bd-prog" cx="11" cy="11" r="' + RADIUS + '" fill="none" stroke="#2EA4FF" stroke-width="2" stroke-dasharray="' + CIRC + '" stroke-dashoffset="' + CIRC + '"></circle>' +
        '<circle class="bd-center" cx="11" cy="11" r="3" fill="' + (i === 0 ? '#2EA4FF' : '#ffffff') + '"></circle>' +
      '</svg>';
 
    dot.addEventListener('click', function () {
      goTo(i);
      resetTimer();
    });
    pagiWrap.appendChild(dot);
  });
 
  var dots = pagiWrap.querySelectorAll('.bd-dot');


  window.addEventListener('resize', function () {
    dots.forEach(function (dot) {

        var size = window.innerWidth < 640 ? 18 :
                   window.innerWidth < 1024 ? 20 : 22;

        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.minWidth = size + 'px';

        var svg = dot.querySelector('svg');
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
    });
});
 
  function render() {
    slides.forEach(function (slide, i) {
      if (i === current) {
        slide.style.zIndex = '2';
        slide.style.opacity = '1';
        slide.style.transform = 'translateY(0)';
      } else if (i === (current - 1 + total) % total) {
        slide.style.zIndex = '1';
        slide.style.opacity = '0';
        slide.style.transform = 'translateY(-100%)';
      } else {
        slide.style.zIndex = '1';
        slide.style.opacity = '0';
        slide.style.transform = 'translateY(100%)';
      }
    });
 
    dots.forEach(function (dot, i) {
      var prog = dot.querySelector('.bd-prog');
      var center = dot.querySelector('.bd-center');
      if (i === current) {
        prog.style.transition = 'none';
        prog.style.strokeDashoffset = String(CIRC);
        center.setAttribute('fill', '#2EA4FF');
        void prog.getBBox();
        prog.style.transition = 'stroke-dashoffset ' + DURATION + 'ms linear';
        prog.style.strokeDashoffset = '0';
      } else {
        prog.style.transition = 'none';
        prog.style.strokeDashoffset = String(CIRC);
        center.setAttribute('fill', '#ffffff');
      }
    });
  }
 
  function goTo(i) {
    current = ((i % total) + total) % total;
    render();
  }
 
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
 
  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, DURATION);
  }
 
  document.getElementById('bd-next').addEventListener('click', function () { next(); resetTimer(); });
  document.getElementById('bd-prev').addEventListener('click', function () { prev(); resetTimer(); });
 
  render();
  resetTimer();
})();


window.addEventListener('resize', function () {
    dots.forEach(function (dot) {

        var size = window.innerWidth < 640 ? 18 :
                   window.innerWidth < 1024 ? 20 : 22;

        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.minWidth = size + 'px';

        var svg = dot.querySelector('svg');
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
    });
});