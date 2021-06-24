<!DOCTYPE html>
<html>

  <body>
    <button id="btn">Click Me!</button>

    <p id="i"><strong>this</strong> represents:</p>

    <p id="demo"></p>
    <script>
      function myFunction() {
        console.log(1)
        let i = 0;
        while (i < 5) {
          document.write(i + '<br/>');
          i++;
        }
      }

      var btn = document.getElementById("btn");
      btn.addEventListener("click", myFunction);

    </script>
  </body>
</html>