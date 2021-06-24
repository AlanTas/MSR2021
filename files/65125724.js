 const http = new XMLHttpRequest();
 http.open("post", "https://example.com/auth/login");
 http.setRequestHeader("Content-type", "application/json");
 http.onreadystatechange = function () {  // change this line
  if (http.readyState === 4 && http.status === 200) {
    console.log(http.responseText);
  }
  else {
    console.error("Error in submitting or receiving response.");
  }
};
http.send(JSON.stringify({ username, password }));
