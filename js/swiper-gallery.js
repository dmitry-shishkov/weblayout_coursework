var swiper = new Swiper('.swiper-container', {
  speed: 1000,
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});