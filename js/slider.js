var swiper = new Swiper('#slider-gallery', {
  speed: 1000,
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1366: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
    },
    577: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    },
    320: {
      speed: 300,
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper('#slider-publications', {
  speed: 800,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1165: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
  },
});

var swiper = new Swiper('#slider-projects', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1366: {
      speed: 1000,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      speed: 1000,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    420: {
      speed: 1000,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    320: {
      speed: 1000,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper('#slider-events', {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
});