$(function(){
  
    // Create a new circle once.
    var circle=$('<div class="circle"></div>');
    var container=$('<div class="container"></div>');
    
    // Retrieve the body and add on click parameter.
    var body = $('body');
    body.append(circle);
    body.append(container);
    body.click(function(e){
    
          // Move circle here.
          circle.css('top', e.pageY - 15);
          circle.css('left', e.pageX - 15)
          if (circle.css('display') == 'none')
            circle.css('display', 'block');
          
          // Move container here.
          container.css('top', e.pageY + 20);
          container.css('left', e.pageX - 15);
          if (container.css('display') == 'none') {
            container.css('display', 'block');
            container.click(function(e) {
              e.stopPropagation(); // Prevents moving circle when clicking on the container.
            })
          }
    })
  })
html, body {
  width: 100%;
  height: 100%;
  background-color: grey;
}

.circle {
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: blue;
  border-radius: 20px;
}
.container {
  display: none;
  position: absolute;
  background: white;
  border: 1px solid black;
  height: 200px;
  width: 300px;
  border-radius: 20px;
}