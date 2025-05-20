const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  noSwiping: true,
  // noSwipingClass: "philosopher-card",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
  navigation: {
    nextEl: "#custom-control .next",
    prevEl: "#custom-control .prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
});
