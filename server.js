var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(betachat.herokuapp.com);

io.on('connection', function (socket) {
   for(var i in messages) {
     io.sockets.emit("display message", messages[i]);
   }
   socket.on("send message", function (data) {
       messages.push(data);
       io.sockets.emit("display message", data);
   })
});

/*io.on('connection', function (socket) {
  for(var i in messages) {
    io.sockets.emit("delete message", messages[i]);
  }
  socket.on("find message", function (data) {
      messages.splice(0,1);
      io.sockets.emit("delete message", data);
  })
});*/

