"use strict";

define(["jquery", "context", "msghandler", "matchpartner", "widget/waiting/waiting"],
function ($, Context, MsgHandler, matchpartner, waiting) {

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
        if ($guess === $answer) {
            $.extend(msg, {
                "type": "success"
            });
            sendMessage(msg, waiting);
        } else {
            $.extend(msg, {
                "type": "fail",
                "content": {
                    "word": $guess
                }
            });
            sendMessage(msg, waiting);
        }
    };

});