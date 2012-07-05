"use strict";

define(["jquery", "doT", "jquery.textchange", "backbone", "context", "msghandler", "matchpartner", "compareword", "widget/waiting/waiting", "widget/giveup/giveup", "widget/right/right", "widget/wrong/wrong", "widget/help/help", "text!./template.html", "roundoff"],
function ($, doT, textchange, backbone, Context, MsgHandler, matchpartner, compareword, waiting, giveup, right, wrong, help, template, roundoff) {

    gwRouter.route("invited", "invited", function () {
        console.log("#init");
    });

    var $container = $("#gw-main"),
        partner,
        sendMsg,
        getMsg,
		answer = "",
		msgHandler = new MsgHandler,
		context = Context.get();

    function autoSkip() {
        $container.find(".gw-input-letter-valid").each(function (i) {
            $(this).bind("textchange", function () {
                if ($(this).val()) {
                    $(this).next().focus();
                }
            });
        });
    };

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
			$btnExit = $container.find(".gw-btn-exit");



        $btnSure.click(function (e) {
            e.preventDefault();
            var guess = getInputWord();
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
            }
        });
        $btnRequire.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "help"
            });
            msgHandler.send(msg, helpHandle);
        });
        $btnGiveup.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "giveup"
            });
            msgHandler.send(msg, giveupHandle);
        });
        $btnExit.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "exit"
            });
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
    };

});
