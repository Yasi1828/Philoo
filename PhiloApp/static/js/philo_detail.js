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