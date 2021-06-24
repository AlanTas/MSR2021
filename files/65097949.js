var h = window.innerHeight;
var w = window.innerWidth;

function create() {
  var boxPosition = {
    left: Math.random() * w,
    top: Math.random() * h
  };
  
  box = document.querySelector("#box")
  
  if(box)box.remove();

  document.write(
    '<div id="box" style="width: 64px; height:64px;background-color:blue; left: ' +
      boxPosition.left +
      "px; top: " +
      boxPosition.top +
      'px;position: absolute"></div>'
  );
}

create();
setInterval(create, 5000);