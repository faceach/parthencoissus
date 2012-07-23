"use strict";

define(["socket.io", "underscore", "context"], function (sio, _, context) {

    var socket = io.connect();
    var key = "guessword",
        listeners = {};

    function handler(msg) {
        var callback = listeners[msg.type];
        if (msg && typeof callback === "function" && msg.to.username === context.get().username) {
            callback(msg);
        }
    };
    socket.on(key, handler);

    var MsgHandler = function (args) {
    };
    MsgHandler.prototype = {
        "send": function (msg, callback) {
            socket.emit(key, msg);
            callback();
        },
        "listen": function (type, callback) {
            listeners[type] = callback;
            return this;
        }
    };

    return MsgHandler;

});
