body {
  display: inline;
  font-family: "Bradley's Hand", cursive
}

#left {
  float: left;
  width: 40%;
  line-height: 450px;
  box-sizing: border-box;
}

#right {
  float: right;
  width: 40%;
  line-height: 450px;
  box-sizing: border-box;
}

#input {
  display: flex;
  flex-direction: column;
  width: 18%;
  box-sizing: border-box;
}
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>repl.it</title>
  <link href="html.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <br>
  <div style="position: relative">
  <fieldset id="left">
    <p id="output">TEST</p>
  </fieldset>
  <fieldset id="right">
    <p id="lesson">TEST</p>
  </fieldset>
  <div id="input">
    <input type="button" id="doctype" value="<!DOCTYPE html>">
    <input type="button" id="html" value="<html>">
    <input type="button" id="head" value="<head>">
    <input type="button" id="title" value="<title>">
    <input type="button" id="css" value="<link rel='stylesheet'>">
  </div>
  </div>
  
  <script src="html.js"></script>
</body>

</html>
body {
  display: inline;
  font-family: "Bradley's Hand", cursive
}

#columns {
  display: flex;
}

#left {
  flex: 1;
  min-width: 40%;
  line-height: 450px;
}

#right {
  flex: 1;
  min-width: 40%;
  line-height: 450px;
}

#input {
  flex: 1;
  flex-direction: column;
  width: 18%;
  box-sizing: border-box;
}

#input input {
flex: 1;
width: 100%;
}
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>repl.it</title>
  <link href="html.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <br>
  <div id="columns">
  <fieldset id="left">
    <p id="output">TEST</p>
  </fieldset>
  <div id="input">
    <input type="button" id="doctype" value="<!DOCTYPE html>">
    <input type="button" id="html" value="<html>">
    <input type="button" id="head" value="<head>">
    <input type="button" id="title" value="<title>">
    <input type="button" id="css" value="<link rel='stylesheet'>">
  </div>
  <fieldset id="right">
    <p id="lesson">TEST</p>
  </fieldset>
  </div>
  <script src="html.js"></script>
</body>

</html>