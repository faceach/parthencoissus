define(["jquery", "jquery.textchange", "context", "doT", "takeword", "matchpartner", "msghandler", "gradehandler", "text!./template.html", "roundoff"],
function ($, textchange, Context, doT, takeword, matchpartner, MsgHandler, gradehandler, template, roundoff) {
    "use strict";

    gwRouter.route("takeword", "takeword", function () {
        console.log("#takeword");
    });

    var $container,
        word,
		input,
		partner,
		context = Context.get(),
		msgHandler = new MsgHandler,
		warningCssClass = "warning";

    function refreshWord($el, temp) {
        takeword(
			{
			    "success": function (data) {
			        var doTemp = doT.template(temp);
			        word = data.word;
                    $el.html(doTemp(data));
			    }
			}
		);
    };

    function sendExplanation(msg) {
        // TODO: userid instead of username
        matchpartner(context.username,
			{
			    "success": function (data) {
			        partner = {
			            "username": data.username
			        };
			        $.extend(msg, {
			            "to": partner
			        });
			        msgHandler.send(msg, function () {
			            require(["widget/waiting/waiting"], function (waiting) {
			                waiting($container);
			            });
			        });
			    }
			}
		);
    };

    function explanationGrade($input, $grade, $inputControl) {
        // Text input event
        $input.bind("textchange", function () {
            var strInput = this.value;
            $grade.width(gradehandler(strInput));
            $inputControl.removeClass(warningCssClass);
        });
    };

    return {
        load: function ($el) {
            $container = $el;
            location.hash = "takeword";

            // Clear storage
            word = "";
            input = "";
            partner = null;

            var $html = $(template),
				$btnTakeword = $html.find(".gw-btn-takeword"),
				$btnSend = $html.find(".gw-btn-send"),
				$word = $html.find("h1"),
				temp = $html.find(".gw-tmp-word").html(),
				$input = $html.find("textarea"),
				$inputControl = $html.find(".control-group"),
				$grade = $html.find(".gw-explanationgrade");

            refreshWord($word, temp);
            explanationGrade($input, $grade, $inputControl);

            $btnTakeword.click(function (e) {
                e.preventDefault();
                refreshWord($word, temp);
            });

            $btnSend.click(function (e) {
                e.preventDefault();

                input = $input.val();
                if (input === "" || input.length <= 0) {
                    $inputControl.addClass(warningCssClass);
                    return;
                }

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

        },
        getWord: function () {
            return word;
        },
        getMineExplanation: function () {
            return input;
        },
        getPartner: function () {
            return partner;
        }
    };

});


