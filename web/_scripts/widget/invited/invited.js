"use strict";

define(["jquery", "doT", "context", "msghandler", "matchpartner", "compareword", "widget/wordinput/wordinput", "widget/waiting/waiting", "text!./template.html", "roundoff"],
function ($, doT, Context, MsgHandler, matchpartner, compareword, wordinput, waiting, template, roundoff) {

    gwRouter.route("invited", "invited", function () {
        console.log("#init");
    });

    var $container = $("#gw-main"),
		answer = "",
		msgHandler = new MsgHandler,
		context = Context.get();

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
    };

});
