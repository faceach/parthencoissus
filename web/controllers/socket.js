var sio = require('socket.io');

/**
* Socket.IO server (single process only)
*/
exports.init = function (app) {
    var io = sio.listen(app),
        usernames = {},
        onlineUsers = [];

    io.sockets.on('connection', function (socket) {
        // chat

        socket.on('username', function (name, fn) {
            console.log("^.^:" + name);
            if (usernames[name]) {
                fn(true);
            }
            else {
                fn(false);
                socket.username = name;
                usernames[name] = name;
                onlineUsers.push({ "username": name, "userid": "0001" });
                io.sockets.emit('onlineusers', onlineUsers);
            }
        });

        socket.on('disconnect', function () {
            console.log("^.^ - disconnect:" + socket.username);
            if (!socket.username) {
                return;
            }

            delete usernames[socket.username];

            for (var i = 0, lens = onlineUsers.length; i < lens; i++) {
                if (onlineUsers[i].username === socket.username) {
                    onlineUsers.splice(i, 1);
                    break;
                }
            }
            socket.broadcast.emit('onlineusers', onlineUsers);
        });

        // guess word
        socket.on('guessword', function (msg) {
            socket.broadcast.emit('guessword', msg);
        });
    });
};
