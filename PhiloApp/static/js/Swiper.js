const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  loopedSlides: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
