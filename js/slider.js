var swiper = new Swiper('#slider-gallery', {
  speed: 1000,
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
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    320: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
  },
});

var swiper = new Swiper('#slider-publications', {
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 50,
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
    1200: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper('#slider-projects', {
  speed: 1000,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1366: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});