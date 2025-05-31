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
  
  // Initialize theme - check localStorage first, then cookie, then default to light
  let currentTheme = localStorage.getItem('theme') || 
                    getCookie('theme') || 
                    'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonIcon(currentTheme);

  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply theme immediately for better UX
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);

    // Send to server
    fetch('/set-theme/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `theme=${encodeURIComponent(newTheme)}`
    }).catch(error => console.error('Error:', error));
  });

  function updateButtonIcon(theme) {
    themeToggle.innerHTML = theme === 'light' ? '🌓' : '☀️';
  }

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
});