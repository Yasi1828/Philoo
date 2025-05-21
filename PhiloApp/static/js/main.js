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

// Select all the elements with the class "album-card"
const albumCardsPhilosophers = document.querySelectorAll(
  ".philosophers-section .album-card"
);
const albumCardsSchools = document.querySelectorAll(
  ".schools-section .album-card"
);

let currentIndexPhilosophers = 0;
let currentIndexSchools = 0;

function updateVisibility() {
  albumCardsPhilosophers.forEach((card, index) => {
    card.style.display = index === currentIndexPhilosophers ? "block" : "none";
  });

  albumCardsSchools.forEach((card, index) => {
    card.style.display = index === currentIndexSchools ? "block" : "none";
  });
}

// Initial visibility
updateVisibility();

// Navigation for Philosophers
document.getElementById("prev-philosopher").addEventListener("click", () => {
  if (currentIndexPhilosophers > 0) {
    currentIndexPhilosophers--;
    updateVisibility();
  }
});

document.getElementById("next-philosopher").addEventListener("click", () => {
  if (currentIndexPhilosophers < albumCardsPhilosophers.length - 1) {
    currentIndexPhilosophers++;
    updateVisibility();
  }
});

// Navigation for Schools
document.getElementById("prev-school").addEventListener("click", () => {
  if (currentIndexSchools > 0) {
    currentIndexSchools--;
    updateVisibility();
  }
});

document.getElementById("next-school").addEventListener("click", () => {
  if (currentIndexSchools < albumCardsSchools.length - 1) {
    currentIndexSchools++;
    updateVisibility();
  }
});


// dark mode

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonIcon(currentTheme);

  // Toggle theme on button click
themeToggle.addEventListener('click', function() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Apply theme locally
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonIcon(newTheme);

  // Send theme preference to Django backend
  fetch('/set-theme/', {
    method: 'POST',
    headers: { 
      'X-CSRFToken': getCookie('csrftoken'),  // CSRF token for Django
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ theme: newTheme })
  })
  .then(response => response.json())
  .then(data => console.log('Theme saved:', data))
  .catch(error => console.error('Error:', error));
});

  function updateButtonIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌓' : '☀️';
  }
});