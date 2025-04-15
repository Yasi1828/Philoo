function Filtering() {
  var input = document.getElementById("hashtag-search");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("FilterUL");
  var li = ul.getElementsByTagName("li");

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
