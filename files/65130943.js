  var ulList = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < ulList.length; i++) {
    var span = document.createElement("span");
    var xBtn = document.createTextNode("\u00D7");
    span.className = "Done";
    span.appendChild(xBtn);

    ulList[i].appendChild(span);
  }

//Adds li element with input from a textbox
function btnFunction() {
  var cLi = document.createElement("li");
  var inpList = document.getElementById("inputForList").value;
  var txtNode = document.createTextNode(inpList);
  cLi.appendChild(txtNode);

  //Check to see if anything is filled in, otherwise send message. And 'appends' it to the list item
  if (inpList === '') {
    alert("Voeg wat toe!");
  } else {
    document.getElementById("ulSection").appendChild(cLi);
    var ulList = document.getElementsByTagName("li");
      var span = document.createElement("span");
      var xBtn = document.createTextNode("\u00D7");
      span.className = "Done";
      span.appendChild(xBtn);
      ulList[ulList.length-1].appendChild(span);
    }
    // Reset value of Textbox to ""
    document.getElementById("inputForList").value = "";
  }

  //Sets a 'x' on every element.
  var ulList = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < ulList.length; i++) {
    var span = document.createElement("span");
    var xBtn = document.createTextNode("\u00D7");
    span.className = "Done";
    span.appendChild(xBtn);

    ulList[i].appendChild(span);
  }
<!DOCTYPE html>

<head>
  <title>To Do App!</title>
  <link rel="stylesheet" type="text/css" href="CSS/stylesheet.css">

</head>

<body>
  <div id="h1Div">
    <h1> To-do app! </h1>
    <input type="text" id="inputForList">
    <input type="button" id="btnInput" value="Add me!" onclick="btnFunction()">
  </div>

  <ul id="ulSection">
    <li>Test 1</li>
    <li>Test 2</li>
  </ul>
  <script src="Scripts/javascript.js"></script>
</body>