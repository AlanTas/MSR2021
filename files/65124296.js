var boo = document.getElementById("boo");
function move() {
  boo.scrollLeft += 1;
  if(boo.scrollLeft >= (1600 - boo.offsetWidth)){
    clearInterval(interval);
    interval = setInterval(moveReverse,5);
  }
}
function moveReverse() {
  boo.scrollLeft -= 1;
  if(boo.scrollLeft <= 0){
    clearInterval(interval);
  }
}
interval = setInterval(move, 5)