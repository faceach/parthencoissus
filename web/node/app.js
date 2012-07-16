var io = require('socket.io'),
    express = require('express');


var app = express.createServer()
  , io = io.listen(app);

app.listen(80);

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});