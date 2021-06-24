$(document).ready(function(){
    $("#normal").keyup(function(){

        var r = $("#normal").val();
      let d= "";
          let c = 'bcdfghjklmnpqrstvwxz';
          for(let letter of r){
            let smallLetter = letter.toLowerCase();
            d = d + letter;
            if(c.includes(smallLetter)){

              d = d + 'o' + smallLetter;  
           }
          }

        $("#pirate").val(d);

    });
});
<!-- Av Karwan Maryame Azar.-->


<html lang="en">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>
  
  <h2>Normal</h2>
<textarea id="normal"></textarea>

<h2>Pirates</h2>
<textarea id="pirate"></textarea>

<p>
  
<input type='button' value=' Talk like a pirate' />
  

</body>
</html>