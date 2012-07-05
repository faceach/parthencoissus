"use strict";

<<<<<<< HEAD
define(["jquery", "doT", "context", "msghandler", "matchpartner", "compareword", "widget/wordinput/wordinput", "widget/waiting/waiting", "text!./template.html", "roundoff"],
function ($, doT, Context, MsgHandler, matchpartner, compareword, wordinput, waiting, template, roundoff) {
=======
define(["jquery", "doT", "jquery.textchange", "backbone", "context", "msghandler", "matchpartner", "compareword", "widget/waiting/waiting", "widget/giveup/giveup", "widget/right/right", "widget/wrong/wrong", "widget/help/help", "text!./template.html", "roundoff"],
function ($, doT, textchange, backbone, Context, MsgHandler, matchpartner, compareword, waiting, giveup, right, wrong, help, template, roundoff) {
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d

    gwRouter.route("invited", "invited", function () {
        console.log("#init");
    });

    var $container = $("#gw-main"),
<<<<<<< HEAD
=======
        partner,
        sendMsg,
        getMsg,
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
		answer = "",
		msgHandler = new MsgHandler,
		context = Context.get();

<<<<<<< HEAD
=======
    function autoSkip() {
        $container.find(".gw-input-letter-valid").each(function (i) {
            $(this).bind("textchange", function () {
                if ($(this).val()) {
                    $(this).next().focus();
                }
            });
        });
    };

>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
    function getInputWord() {
        var letter = "";
        $container.find(".gw-input-letter-valid").each(function (i) {
            if (!$(this).val()) {
                //TODO: warning this input to user
                //...
                return false;
            }
            letter += $(this).val();
        });
        return letter;
    }

    function btnClickHandler() {
        var $btnSure = $container.find(".gw-btn-sure"),
			$btnRequire = $container.find(".gw-btn-require"),
			$btnGiveup = $container.find(".gw-btn-giveup"),
<<<<<<< HEAD
			$btnExit = $container.find(".gw-btn-exit"),
			msg = {
			    "from": {
			        "username": context.username,
			        "userid": context.userid
			    }
			};
=======
			$btnExit = $container.find(".gw-btn-exit");


>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d

        $btnSure.click(function (e) {
            e.preventDefault();
            var guess = getInputWord();
<<<<<<< HEAD
            if (guess && answer) {
                compareword(guess, answer);
=======
            if (guess) {
                if (compareword(guess, getMsg.content.word)) {
                    $.extend(sendMsg, {
                        "type": "success"
                    });
                    msgHandler.send(msg, rightHandle);
                } else {
                    $.extend(sendMsg, {
                        "type": "fail",
                        "content": {
                            "explanation": "",
                            "word": $guess
                        },
                        "origin": {
                            "explanation": getMsg.content.explanation,
                            "word": getMsg.content.word
                        }
                    });
                    msgHandler.send(msg, wrongHandle);
                };
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
            }
        });
        $btnRequire.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "help"
            });
<<<<<<< HEAD
            sendMessage(msg, waiting);
=======
            msgHandler.send(msg, helpHandle);
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
        });
        $btnGiveup.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "giveup"
            });
<<<<<<< HEAD
            sendMessage(msg, waiting);
=======
            msgHandler.send(msg, giveupHandle);
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
        });
        $btnExit.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "exit"
            });
<<<<<<< HEAD
            sendMessage(msg, waiting);
        });
    }

    function sendMessage(msg, callback) {
        matchpartner(context.userid,
			{
			    "success": function (data) {
			        $.extend(msg, {
			            "to": {
			                "username": data.username,
			                "userid": data.userid
			            }
			        });
			        msgHandler.send(msg, callback);
			    }
			}
		);
    };

    function handleInvited(msg) {
        var doTemp = doT.template(template),
			$html = $(doTemp(msg)),
			$guess = $html.find(".gw-guess");

        wordinput.init($guess, msg.content);

        $container.empty().append($html);
        answer = msg.content;
        btnClickHandler();
        roundoff();
    };

    return function () {
        msgHandler.listen("invite", handleInvited);
=======
            msgHandler.send(msg, exitHandle);
        });
    }

    function rightHandle() {
        right(msg);
    }

    function wrongHandle() {
        wrong(msg);
    }

    function helpHandle() {
        help(msg);
    }

    function giveupHandle() {
        giveup(msg);
    }

    function exitHandle() {
        cosole.log("exitHandle fire");
    }

    function handleInvited(data) {
        var $html = $(template),
			doTemp = doT.template(template);

        getMsg = data;
        partner = {
            "username": data.from.username,
            "userid": data.from.userid
        };
        sendMsg = {
            "from": {
                "username": context.username,
                "userid": context.userid
            },
            "to": parent,
            "content": data.content
        };

        $container.empty().html(doTemp(data));

        btnClickHandler();
        autoSkip();
        roundoff();
    };
    return {
        init: function () {
            msgHandler.listen("invite", handleInvited);
        },
        getPartner: function () {
            return partner;
        }
>>>>>>> 6f78385f1b0f4f62a630f759442243f9e9722d7d
    };

});
