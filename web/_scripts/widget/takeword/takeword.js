"use strict";

define(["jquery", "jquery.textchange", "context", "mustache", "takeword", "widget/waiting/waiting", "matchpartner", "msghandler", "text!./template.html", "roundoff"],
function ($, textchange, Context, mustache, takeword, waiting, matchpartner, MsgHandler, template, roundoff) {

    gwRouter.route("takeword", "takeword", function () {
        console.log("#takeword");
    });

    var $container = $("#gw-main"),
        word = "",
        context = Context.get(),
        msgHandler = new MsgHandler;

    function refreshWord($el, tmp) {
        takeword(
			{
			    "success": function (data) {
			        $el.html(mustache.render(tmp, data));
			    }
			}
		);
    };

    function sendExplanation(msg) {
        matchpartner(context.userid,
			{
			    "success": function (data) {
			        $.extend(msg, {
			            "to": {
			                "username": data.username,
			                "userid": data.userid
			            }
			        });
			        msgHandler.send(msg, waiting);
			    }
			}
		);
    };

    function gradehandler(input) {
        var wordNum = input.trim().split(" ").length,
            commaNum = input.trim().split(",").length,
            points;
        commaNum = commaNum >= wordNum ? wordNum - 1 : commaNum;
        points = (wordNum * 0.04) + ((commaNum + 1) * 0.06);
        return points > 1 ? 1 : points;
    };

    function explanationGrade($input, $grade) {
        // Text input event
        $input.bind("textchange", function () {
            var strInput = this.value;
            $grade.width(gradehandler(strInput) * 100 + "%");
        });
    };

    return {
        load: function () {

            var $html = $(template),
				$btnTakeword = $html.find(".gw-btn-takeword"),
				$btnSend = $html.find(".gw-btn-send"),
				$word = $html.find("h1"),
                musTmp = $html.find(".gw-tmp-word").html(),
				$input = $html.find("textarea"),
                $grade = $html.find(".gw-explanationgrade");

            refreshWord($word, musTmp);
            explanationGrade($input, $grade);

            $btnTakeword.click(function (e) {
                e.preventDefault();
                refreshWord($word, musTmp);
            });

            $btnSend.click(function (e) {
                e.preventDefault();

                var input = $input.val();
                var msg = {
                    "from": {
                        "username": context.username,
                        "userid": context.userid
                    },
                    "type": "invite",
                    "content": {
                        "word": word,
                        "explanation": input
                    }
                };

                sendExplanation(msg);
            });

            $container.empty().append($html);
            roundoff();

        }
    }

});


