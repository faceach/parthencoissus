"use strict";

var onlineUsers = [];

define(["jquery", "socket.io", "context", "text!./template.html", "roundoff"],
function ($, sio, Context, template, roundoff) {

    var loggedCallback;

    var $container = $(".gw-container");
    var socket = io.connect();

    // TODO: set route for all steps
    gwRouter.route("login", "login", function () {
        onlineUsers = [];
        var $html = $(template);

        var emitMe = function (userName) {
            socket.emit('username', userName, function (set) {
                if (!set) {
                    Context.set({
                        "username": userName,
                        "userid": "0001"
                    });
                    loggedCallback($container);
                    return;
                }
                $html.find(".login-name-err").show();
            });
        };

        var storageUsername = localStorage.getItem("guessword.username");
        if (storageUsername) {
            emitMe(storageUsername);
        }

        $html.submit(function (ev) {
            var userName = $html.find(".login-name").val();
            if (userName) {
                localStorage.setItem("guessword.username", userName);
                emitMe(userName);
            }
            else {
                $html.find(".control-group").addClass("warning");
            }
            return false;
        });

        socket.on('onlineusers', function (onlineusers) {
            onlineUsers = onlineusers;
        });

        $container.html($html);
        roundoff();
    });

    return function (callback) {

        loggedCallback = typeof callback === "function" ? callback : function () { return false; };
        location.hash = "login";

    };

});