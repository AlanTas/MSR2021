document.getElementById("div").addEventListener("mousemove", function() {
  myFunction(event);
});

var mouse;
var cursor = document.getElementById("cursor");
function myFunction(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = (mouseX - 55) + "px";
  cursor.style.top = (mouseY - 55) + "px";


}
body {
  background: #FFFDFA;
}

#cursor {
  height: 100px;
  width: 100px;
  position: absolute;
  backface-visibility: hidden;
  z-index: 9999999;
  pointer-events: none; /* pointer-events: none is needed */
  cursor: none;
}

div {
  background: black;
  width: 200px;
  height: 100px;
  margin: 30px;
  cursor: none;
}
document.getElementById("div").addEventListener("mousemove", function() {
  myFunction(event);
});

var mouse;
var cursor = document.getElementById("cursor");
function myFunction(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = (mouseX - 55) + "px";
  cursor.style.top = (mouseY - 55) + "px";
}
body {
  background: #FFFDFA;
}

#cursor {
  height: 100px;
  width: 100px;
  position: absolute;
  backface-visibility: hidden;
  z-index: 9999999;
  pointer-events: none; /* pointer-events: none is needed */
  cursor: none;
}

div {
  background: black;
  width: 200px;
  height: 100px;
  margin: 30px;
  cursor: none;
}