var typeString = ['• I\'m Mr. Frits\n• and I love Pakistan...:)'];

var i = 0;
var count = 0
var selectedText = '';
var text = '';
(function type() {
  if (count == typeString.length) {
    count = 0;
  }
  selectedText = typeString[count];
  text = selectedText.slice(0, ++i);
  document.getElementById('typing').innerHTML = text.fontsize(6);
  document.getElementById('typing').style.fontFamily = "monospace";
  document.getElementById("typing").style.color = "black";
  document.getElementById("typing").style.fontWeight = "normal";

  if (text.length === selectedText.length) {
    count++;
    i = 0;

  }
  setTimeout(type, 300);
}());

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}