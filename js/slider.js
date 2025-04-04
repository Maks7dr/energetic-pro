var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
