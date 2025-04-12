const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loopedSlides: 3,
  // centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // Enable dynamic bullets
    dynamicMainBullets: 5,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
