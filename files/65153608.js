var x = 10;
var y = 7;
var destX = 5;
var destY = 5;
function simulate() {
    while (x !== destX && y !== destY) {
        move();
    }
    console.log("arrived")
}
function move() {
        if (x !== destX) {
            if (destY > y) {
                y = y + 1;
            } else {
                y = y - 1;
            }
        } else {
            if (destX > x) {
                x = x + 1;
            } else {
                x = x - 1;
            }
        }
}
simulate();
