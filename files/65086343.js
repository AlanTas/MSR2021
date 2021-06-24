let btn_click = false;

document.getElementById("btn").onclick = function() {
  btn_click = true;
}

function func1(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked || btn_click == true) {
    event.stopPropagation();
  }
}

function func2() {
  alert("DIV 2");
}