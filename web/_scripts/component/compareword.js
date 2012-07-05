"use strict";

define(["jquery", "context", "msghandler", "matchpartner", "widget/right/right", "widget/wrong/wrong"],
function ($, Context, MsgHandler, matchpartner, right, wrong) {

    var context = Context.get(),
        msgHandler = new MsgHandler,
        msg = {
            "from": {
                "username": context.username,
                "userid": context.userid
            }
        };

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

    return function ($guess, $answer) {
        if ($guess === $answer.word) {
            $.extend(msg, {
                "type": "success",
                "content": {
                    "explanation": $answer.explanation,
                    "word": $answer.word
                }
            });
            sendMessage(msg, right);
        } else {
            $.extend(msg, {
                "type": "fail",
                "content": {
                    "word": $guess
                }
            });
            sendMessage(msg, wrong);
        }
    };

});