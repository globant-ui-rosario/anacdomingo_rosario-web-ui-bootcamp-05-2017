let output = document.getElementById("output");
document.body.onload = document.getElementById('disconnect').disabled = true;

var websocket;

function wsConnect(event) {
  let wsUri = "ws://echo.websocket.org/";
  websocket = new WebSocket(wsUri);
  websocket.onopen = () => {
    writeToScreen('CONNECTED');
    document.getElementById('disconnect').disabled = false;
    document.getElementById('connect').disabled = true;
  };
  websocket.onerror = (evt) => {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  };
}

function wsDisconnect() {
  websocket.close();
  websocket.onclose = (evt) => {
    writeToScreen('DISCONNECTED');
    document.getElementById('connect').disabled = false;
    document.getElementById('disconnect').disabled = true;
  };
}

function wsMessage() {
  let msg = document.getElementById('msgBox').value;
  websocket.send(msg);
  writeToScreen("SENT: " + msg);
  websocket.onmessage = (evt) => {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  };
}

function writeToScreen(message) {
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}