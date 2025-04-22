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
