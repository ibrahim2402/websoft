const backToTop = document.querySelector("#back-to-top-btn");
let page = window.pageYOffset;
page = 0;
window.addEventListener("scroll", page, scrollFunction);
//backToTop.addEventListener("none");

function scrollFunction() {

  //using pageYOffSet for allow all browser
  if (window.pageYOffset > 2000) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener("click", toTop);

function toTop() {
  window.scrollTo(0, 0);
}
