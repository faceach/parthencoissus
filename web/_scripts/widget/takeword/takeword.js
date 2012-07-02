"use strict";

define(["jquery", "jquery.textchange", "context", "mustache", "takeword", "widget/waiting/waiting", "matchpartner", "msghandler", "text!./template.html", "roundoff"],
function ($, textchange, context, mustache, takeword, waiting, matchpartner, msghandler, template, roundoff) {

    gwRouter.route("takeword", "takeword", function () {
        console.log("#takeword");
    });

    var $container = $("#gw-main");
    var word = "";

    function refreshWord($el) {
        takeword(
			{
			    "success": function (data) {
			        word = data.word;
			        $el.text(word);
			    }
			}
		);
    };

    function sendExplanation(msg) {

        matchpartner(
			{
			    "success": function (data) {
			        $.extend(msg, { "to": data.userid });
			        msghandler.send(msg, waiting);
			    }
			}
		);

    };

    function explanationGrade($input, $grade) {
        // Text input event
        $input.bind("textchange", function () {
            var strInput = this.value;
            $grade.text(strInput.length);
        });
    };

    return {
        load: function () {

            var $html = $(template),
				$btnTakeword = $html.find(".gw-btn-takeword"),
				$btnSend = $html.find(".gw-btn-send"),
				$word = $html.find("h1"),
				$input = $html.find("textarea"),
                $grade = $html.find(".gw-explanationgrade");

            refreshWord($word);
            explanationGrade($input, $grade);

            $btnTakeword.click(function (e) {
                e.preventDefault();
                refreshWord($word);
            });

            $btnSend.click(function (e) {
                e.preventDefault();

                var input = $input.val();
                var msg = {
                    "from": context.get().userid,
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


