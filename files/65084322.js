let socket = new WebSocket("wss://ws01.casinocoin.org:4443");

socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending to server");

  socket.send(`{"id": 1,"command": "tx","transaction": "165A993C454CE13201073DA4DA362A143B04EEFFDD9CC5CB44EB94E9CC165B46"}`);

  socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
    
    // this goes within socket.onmessage
    $.ajax({
        type: "POST",
        url: 'post.php',
        data: event.data, // event.data goes here
        success: function(data){
            alert(data);
        }
    });
  };

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died');
    }
  };

  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
  };
}
