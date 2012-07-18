var sio = require('socket.io');

/**
* Socket.IO server (single process only)
*/
exports.init = function (app) {
    var io = sio.listen(app)
          , nicknames = {};

    io.sockets.on('connection', function (socket) {
        // chat
        socket.on('user message', function (msg) {
            socket.broadcast.emit('user message', socket.nickname, msg);
        });

        socket.on('nickname', function (nick, fn) {
            if (nicknames[nick]) {
                fn(true);
            } else {
                fn(false);
                nicknames[nick] = socket.nickname = nick;
                socket.broadcast.emit('announcement', nick + ' connected');
                io.sockets.emit('nicknames', nicknames);
            }
        });

        socket.on('disconnect', function () {
            if (!socket.nickname) return;

            delete nicknames[socket.nickname];
            socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
            socket.broadcast.emit('nicknames', nicknames);
        });

        // guess word
        socket.on('guessword', function (msg) {
            console.log("guessword:" + msg);
            socket.broadcast.emit('guessword', msg);
        });
    });
};
