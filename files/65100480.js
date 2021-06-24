//I just set an interval for every second to check the time again
var s=setInterval(()=>{
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dayLight = 0900;
  var lightMode = 1700;


  if (time >= dayLight && time <= lightMode) {
      document.body.style.backgroundColor = "white";
      document.querySelector("h1.example").style.color = "black";
      //console.log(time + " " + "=" + " " + "Light Mode!");
  } else {
      document.body.style.backgroundColor = "black";
      document.querySelector("h1.example").style.color = "white";
      //console.log(time + " " + "=" + " " + "Dark Mode!");
  }
},1000)
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Dark Mode Example</title>
    </head>

    <body>
       
        <h1 class="example">Dark Mode Example</h1>
   
        <p>Test Paragraph</p>
    </body>
    <script src="script.js"></script>

</html>