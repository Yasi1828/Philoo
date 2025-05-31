console.log("Script loaded!"); 
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




// dark mode

document.addEventListener('DOMContentLoaded', function() {


  const themeToggle = document.getElementById('theme-toggle');

  // Initialize theme (should happen ON PAGE LOAD, not on click)
  const currentTheme = localStorage.getItem('theme') || 
                      getCookie('theme') || 
                      'light';
  applyTheme(currentTheme);

  // SINGLE click handler
  themeToggle.addEventListener('click', function() {
 
    
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    
    fetch('/set-theme/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `theme=${encodeURIComponent(newTheme)}`
    }).then(r => r.json()).then(data => {
      console.log('Theme saved:', data);
    }).catch(err => {
      console.error('Error saving theme:', err);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'light' ? '🌓' : '☀️';
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
});