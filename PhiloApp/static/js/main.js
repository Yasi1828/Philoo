// Select all the elements with the class "album-card"
const albumCards = document.querySelectorAll(".album-card");

// Add a click event listener to each album card
albumCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Get the URL of the "ادامه مطلب" link
    const detailUrl = card.querySelector(".btn").getAttribute("href");

    // Redirect the user to the detail page
    window.location.href = detailUrl;
  });
});

// Select the "Back to Top" button
const backToTopBtn = document.getElementById("back-to-top");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Show the "Back to Top" button when the user scrolls down
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Add a click event listener to the "Back to Top" button
backToTopBtn.addEventListener("click", () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
