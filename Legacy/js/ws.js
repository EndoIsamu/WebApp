require.paths.push('C:/Users/勇/.nodebrew/current/lib/node_modules');

var ws = require("websocket.io");
var server = ws.listen(8888,
  function () {
    console.log("ws start");
  }
);

server.on("connection",
  function(socket) {
    socket.on("message",
      function(data) {
        console.log("message " + data);
        server.clients.forEach(
          function(client) {
            client.send(data);
          }
        );
      }
    );
  }
);