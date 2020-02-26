/*var xhr = new XMLHttpRequest();
xhr.open(
  "get",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js",
  true
);
xhr.onload = function() {
  //instead of onreadystatechange
  //do something

  var Animat = 
};
xhr.send(null);*/

new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "img/bird2.jpeg",
  image2: "img/bird.png",
  angle: Math.PI / 4,
  displacementImage: "img/trans.png"
});
