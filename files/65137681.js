function makeCircle(circle) {
  container = document.querySelector('#'+circle);

  for(i = 0; i < 30; i++){
    container.innerHTML += '<div class="item '+circle+' "></div>';
    if((i % 5) == 0){ 
      document.querySelectorAll('.item.'+circle)[i].style.setProperty("--width", 4+"px");
    }       
    document.querySelectorAll('.item.'+circle)[i].style.transform = "rotate(" + i * 6 + "deg)";     
  }
}

makeCircle('h');
makeCircle('m');
makeCircle('s');
