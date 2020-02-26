const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".option");
const slides = document.querySelectorAll(".webdev");

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

function update() {
  slider.style.transform = "translateX(" + size * index + " px)";

  options.forEach(op => op.classList.remove("colored"));
  options[op_index].classList.add("colored");
}

function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  slider.style.transform = "translateX(" + size * index + " px)";

  update();
}

function buttonCheck() {
  if (this.id === "prev") {
    index--;

    console.log("Click");

    if (op_index == 0) {
      op_index = 2;
    } else {
      op_index--;
    }
  } else if (this.id === "next") {
    index++;
    if (op_index == 2) {
      op_index = 0;
    } else {
      op_index++;
    }
  }
  slide();
}

function optionFunction() {
  let i = Number(this.getAttribute("option-index"));
  index = i + 1;
  op_index = i;
  slide();
}
slider.addEventListener("transitioned", () => {
  if (slides[index].id === "last") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = "translateX(" + -size * index + " px)";
  } else if (slides[index].id === "first") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + " px)";
  }
});

buttons.forEach(btn => btn.addEventListener("click", buttonCheck));
options.forEach(option => option.addEventListener("click", optionFunction));

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("option");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

*/
