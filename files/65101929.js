<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="reee">
      <h1 id = "dad"> Login </h1>
    </div>
 
      <div id = "action"> 
        <form>
          <label class ="u" for="fname">Username</label>
          <input type="text" id="uname" name="user" placeholder="Your username...">
          <label class = "p" for="lname">Password</label>
          <input type="text" id="pass" name="pass" placeholder="Your password...">
          <input type="submit" value="Submit" id = "loginto" onclick="reee()">
          <p class = "wrong" id = "status"></p> 
        </form>
    </div>
    
    <script src = "script.js"></script> // NOTE: ALways put the javascript file link in the bottom.
  </body>
</html>


var usernames = [ //This is the place to store usernames and passwords. In real world, you have to store it in database. In this case I store it in Javascript Object to improve readability
    {username: 'john', password: '123'},
    {username: 'albert', password: '234'},
    {username: 'tesla', password: '345'},
  ];

function reee() {
  var user = document.getElementById("uname").value; //Get user in put from form field
  var pass = document.getElementById("pass").value;
  
  for (var i = 0; i < usernames.length; i++){ // Looping. To check every single data in usernames array above
    if(user != usernames[i].username || pass != usernames[i].password) { // Check if input is not equal to the usernames list
      document.getElementById("status").innerHTML = "The password or username is incorrect"; //Display wrong message
    } else {
      document.getElementById("status").innerHTML = "Welcome " + user; //Display welcome message and username
      break; //To stop checking. Because username has already been found
    }
  }
}

