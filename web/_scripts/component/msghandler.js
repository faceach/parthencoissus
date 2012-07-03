"use strict";

define(["msglistener", "context"], function (msglistener, context) {

    var key = "guessword";

    var MsgHandler = function (args) {
    };

    MsgHandler.prototype = {
        "send": function (msg, callback) {

            localStorage.setItem(key, JSON.stringify(msg));

            console.log("msg[" + msg.type + "]:");
            console.log(msg);

            callback();
        },
        "listen": function (type, callback) {

            function handler() {
                var msg = JSON.parse(localStorage.getItem(key));
                if (msg.type === type && msg.to === context.get().userid) {
                    console.log("listen", msg);
                    callback();
                }
            };

            msglistener(handler);

        }
    };

    return MsgHandler;

});
