"use strict";

define(["jquery", "jquery.textchange", "context", "doT", "takeword", "widget/waiting/waiting", "matchpartner", "msghandler", "gradehandler", "text!./template.html", "roundoff"],
function ($, textchange, Context, doT, takeword, waiting, matchpartner, MsgHandler, gradehandler, template, roundoff) {

	gwRouter.route("takeword", "takeword", function () {
		console.log("#takeword");
	});

	var $container = $("#gw-main"),
		word = "",
		context = Context.get(),
		msgHandler = new MsgHandler;

	function refreshWord($el, temp) {
		takeword(
			{
				"success": function (data) {
					var doTemp = doT.template(temp);
					$el.html(doTemp(data));
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

	function explanationGrade($input, $grade, $inputControl) {
		// Text input event
		$input.bind("textchange", function () {
			var strInput = this.value;
			$grade.width(gradehandler(strInput) * 100 + "%");
			$inputControl.removeClass("warning");
		});
	};

	return {
		load: function () {

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

				var word = $word.text().trim(),
					input = $input.val();
				if (input === "" || input.length <= 0) {
					$inputControl.addClass("warning");
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

		}
	}

});


