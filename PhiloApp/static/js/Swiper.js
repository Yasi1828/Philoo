const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", // This will make the slides adjust based on their content
  spaceBetween: 20, // Adjust the spacing between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
