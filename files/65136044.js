var c = document.getElementById("mycanvas").getContext("2d");
c.fillStyle = "blue";
c.fillRect (0,0,500,350);

function square(x,y) {
    var leftX = (x - 10); // x = 30
    var leftY = (y - 10); // y = 10
    var width = (x + 10); // width = 50
    var height = (y + 10); // height = 30
    c.fillStyle = "red";
    c.fillRect (leftX,leftY,width,height);
}

square(40,20);
var c = document.getElementById("mycanvas").getContext("2d");
c.fillStyle = "blue";
c.fillRect (0,0,500,350);

function square(x,y) {
    var leftX = (x - 10); // x = 30
    var leftY = (y - 10); // y = 10
    c.fillStyle = "red";
    c.fillRect (leftX,leftY,20,20);
}

square(40,20);