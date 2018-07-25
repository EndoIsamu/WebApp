//NODE_PATH="C:\\Users\\勇\\AppData\\Roaming\\npm\\node_modules\\";

var WebSocketServer = require('C:\\Users\\勇\\AppData\\Roaming\\npm\\node_modules\\ws').Server;
var port = 3001;
var wsServer = new WebSocketServer({ port: port });
console.log('websocket server start. port=' + port);
 
wsServer.on('connection', function(ws) {
  console.log('-- websocket connected --');
  ws.on('message', function(message) {
    wsServer.clients.forEach(function each(client) {
      if (isSame(ws, client)) {
        console.log('- skip sender -');
      }
      else {
        client.send(message);
      }
    });
  });
});
 
function isSame(ws1, ws2) {
  // -- compare object --
  return (ws1 === ws2);     
}