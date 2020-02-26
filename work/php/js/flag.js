document.getElementById("germany-flag").onclick = function() {
  makeFlagDisapear();

  createFlag("black", "red", "gold");
};

document.getElementById("france-flag").onclick = function() {
  makeFlagDisapear();

  createFlag("blue", "white", "red");
};

document.getElementById("estonia-flag").onclick = function() {
  makeFlagDisapear();
  createFlag("blue", "black", "white");
};
document.getElementById("austria-flag").onclick = function() {
  makeFlagDisapear();
  createFlag("red", "white", "red");
};
document.getElementById("nigeria-flag").onclick = function() {
  makeFlagDisapear();
  createFlag("green", "white", "green");
};

document.getElementById("image").onclick = function() {
  makeFlagDisapear();
};

function createFlag(color1, color2, color3) {
  document.getElementById("image").style.opacity = "1";
  document.getElementById("image").style.visibility = "visible";
  document.getElementById("color1").style.backgroundColor = color1;
  document.getElementById("color2").style.backgroundColor = color2;
  document.getElementById("color3").style.backgroundColor = color3;
}

function makeFlagDisapear() {
  document.getElementById("image").style.opacity = "0";
  document.getElementById("image").style.visibility = "hidden";
}
