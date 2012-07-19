var sio = require('socket.io');

/**
* Socket.IO server (single process only)
*/
exports.init = function (app) {
    var io = sio.listen(app)
          , usernames = {};

    io.sockets.on('connection', function (socket) {
        // chat

        socket.on('username', function (name, fn) {
            if (usernames[name]) {
                fn(true);
            } else {
                fn(false);
                usernames[name] = socket.username = name;
                io.sockets.emit('usernames', usernames);
            }
        });

        socket.on('disconnect', function () {
            if (!socket.username) return;

            delete usernames[socket.username];
            socket.broadcast.emit('usernames', usernames);
        });

        // guess word
        socket.on('guessword', function (msg) {
            socket.broadcast.emit('guessword', msg);
        });
    });
};
