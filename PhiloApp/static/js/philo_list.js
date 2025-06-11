function Filtering() {
  const input = document.getElementById("hashtag-search");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("FilterUL");
  const li = ul.getElementsByTagName("li");

  if (input) {
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      hashtagText = a.innerText || a.textContent;
      if (hashtagText.toUpperCase().includes(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

function Searching() {
  const input = document.querySelector(".magnifier-input");
  const filter = input.value.trim().toUpperCase();
  const items = document.getElementsByClassName("grid-item");

  // Store original text if not already stored
  Array.from(items).forEach((item) => {
    const h2 = item.querySelector("h2");
    if (!h2.dataset.originalText) {
      h2.dataset.originalText = h2.textContent;
    }
  });

  if (!filter) {
    // Reset to original text
    Array.from(items).forEach((item) => {
      const h2 = item.querySelector("h2");
      h2.innerHTML = h2.dataset.originalText;
      item.style.display = "";
    });
    return;
  }

  // Apply temporary highlighting
  Array.from(items).forEach((item) => {
    const h2 = item.querySelector("h2");
    const originalText = h2.dataset.originalText;
    const upperText = originalText.toUpperCase();
    const matchIndex = upperText.indexOf(filter);

    if (matchIndex !== -1) {
      item.style.display = "";
      h2.innerHTML =
        originalText.substring(0, matchIndex) +
        `<span class="highlight">${originalText.substring(
          matchIndex,
          matchIndex + filter.length
        )}</span>` +
        originalText.substring(matchIndex + filter.length);
    } else {
      item.style.display = "none";
      h2.innerHTML = originalText; // Maintain original text
    }
  });
}

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