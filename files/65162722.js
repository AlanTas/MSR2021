var mainColor = document.getElementById("main-color");
var secondColor = document.getElementById("second-color");

function color(cssVariable, inputValue) {
  return cssVariable + ":" + inputValue
}

mainColor.addEventListener('input', function() {
  document.documentElement.style.setProperty("--main-color", this.value);
})

secondColor.addEventListener('input', function() {
  document.documentElement.style.setProperty("--second-color", this.value)
})