"use strict";

define(function () {

    var key = "guessword";

    return {
        "send": function (msg, callback) {

            localStorage.setItem(key, JSON.stringify(msg));

            console.log("msg[" + msg.type + "]:");
            console.log(msg);

            callback();
        },
        "receive": function () {

            return JSON.parse(localStorage.getItem(key));

        }
    };

});
