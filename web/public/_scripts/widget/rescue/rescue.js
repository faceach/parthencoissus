"use strict";

define(["jquery", "context", "widget/takeword/takeword", "word", "playbutton", "doT", "text!./template.html", "msghandler","gradehandler","roundoff"],
function ($, Context, takeword, Word, playbutton, doT, template, MsgHandler, gradehandler,roundoff) {

    gwRouter.route("rescue", "rescue", function () {
        console.log("#rescue");
    });

	var $container = $("#gw-main"),
		context = Context.get(),
		msgHandler = new MsgHandler,
		warningCssClass = "warning";

	function explanationGrade($input, $grade, $inputControl) {
		// Text input event
		$input.bind("textchange", function () {
			var strInput = this.value;
			$grade.width(gradehandler(strInput));
			$inputControl.removeClass(warningCssClass);
		});
	};

	return function () {
	    location.hash = "rescue";

	    var doTemp = doT.template(template),
			partner = takeword.getPartner(),
			word = takeword.getWord(),
			explanation = takeword.getMineExplanation(),
			$html = $(doTemp({
				"partnerName": partner.username,
				"word": word,
				"explanation": explanation
			})),
			$btnRescue = $html.find(".gw-btn-rescue"),
			$input = $html.find("textarea"),
			$inputControl = $html.find(".control-group"),
			$grade = $html.find(".gw-explanationgrade");

		explanationGrade($input, $grade, $inputControl);

		$btnRescue.click(function (e) {
			e.preventDefault();

			var input = $input.val();
			if (input === "" || input.length <= 0) {
				$inputControl.addClass(warningCssClass);
				return;
			}

			var msg = {
				"from": {
					"username": context.username,
					"userid": context.userid
				},
				"to": partner,
				"type": "rescue",
				"content": {
					"word": word,
					"explanation": input
				}
			};

			msgHandler.send(msg, function () {
				require(["widget/waiting/waiting"], function (waiting) {
					waiting();
				});
			});
		});

		$container.empty().append($html);

		roundoff();

	};

});
