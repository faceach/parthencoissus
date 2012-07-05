"use strict";

define(["jquery", "doT", "jquery.textchange", "backbone", "context", "msghandler", "matchpartner", "compareword", "widget/waiting/waiting", "text!./template.html", "roundoff"],
function ($, doT, textchange, backbone, Context, MsgHandler, matchpartner, compareword, waiting, template, roundoff) {

    gwRouter.route("invited", "invited", function () {
        console.log("#init");
    });

    var $container = $("#gw-main"),
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
            $btnExit = $container.find(".gw-btn-exit"),
            msg = {
                "from": {
                    "username": context.username,
                    "userid": context.userid
                }
            };

        $btnSure.click(function (e) {
            e.preventDefault();
            var guess = getInputWord();
            if (guess && answer) {
                compareword(guess, answer);
            }
        });
        $btnRequire.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "help"
            });
            sendMessage(msg, waiting);
        });
        $btnGiveup.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "giveup"
            });
            sendMessage(msg, waiting);
        });
        $btnExit.click(function (e) {
            e.preventDefault();
            $.extend(msg, {
                "type": "exit"
            });
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
        var $html = $(template),
            doTemp = doT.template(template);

        $container.empty().html(doTemp(msg));
        answer = msg.content;
        btnClickHandler();
        autoSkip();
        roundoff();
    };
    return function () {
        msgHandler.listen("invite", handleInvited);
    };

});
