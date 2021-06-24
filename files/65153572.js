    var colors = ["#2D2D2D"]; // dont know why you have an array of color but
    // i could get this to be much simpler without using array but i fallowed your example to make simpler for you
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");          
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        
        
        if (colors[colorIndex] == col.getAttribute("currentColor")){
            col.style.backgroundColor = null; // take the css color
            col.setAttribute("currentColor",col.style.backgroundColor);
          }
            else {
            col.style.backgroundColor = colors[colorIndex];
            col.setAttribute("currentColor",colors[colorIndex]);
          }
        
        colorIndex++;   
    } 