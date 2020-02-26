const backToTop = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  //using pageYOffSet for allow all browser
  if (window.pageYOffset > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener("click", toTop);

function toTop() {
  window.scrollTo(0, 0);
}
