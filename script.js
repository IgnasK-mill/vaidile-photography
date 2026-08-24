document.addEventListener('DOMContentLoaded', function () {
  function setupCarousel(carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.carousel-slide'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('.carousel-dots button'));
    var counter = carousel.querySelector('.carousel-dots .counter');
    var i = 0;
    var paused = false;
    var timer;

    function render() {
      track.style.transform = 'translateX(-' + (i * 100) + '%)';
      dots.forEach(function (d, n) { d.classList.toggle('active', n === i); });
      if (counter) counter.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    }

    function goTo(n) {
      i = n;
      render();
      restart();
    }

    function tick() {
      if (paused) return;
      i = (i + 1) % slides.length;
      render();
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(tick, 4000);
    }

    dots.forEach(function (d, n) {
      d.addEventListener('click', function () { goTo(n); });
    });

    carousel.addEventListener('mouseenter', function () { paused = true; });
    carousel.addEventListener('mouseleave', function () { paused = false; });

    render();
    restart();
  }

  Array.prototype.slice.call(document.querySelectorAll('.carousel')).forEach(setupCarousel);
});
