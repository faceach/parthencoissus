"use strict";

define(["jquery", "doT", "context", "msghandler", "widget/wordinput/wordinput", "text!./template.html", "roundoff"],
function ($, doT, Context, MsgHandler, wordinput, template, roundoff) {

	gwRouter.route("invited", "invited", function () {
		console.log("#invited");
	});

	var $container = $("#gw-main"),
		partner,
		msgHandler = new MsgHandler,
		context = Context.get();

	function eventsHandler($html) {
		var $btnSure = $html.find(".gw-btn-sure"),
			$btnHint = $html.find(".gw-btn-hint"),
			$btnHelp = $html.find(".gw-btn-help"),
			$btnGiveup = $html.find(".gw-btn-giveup"),
			$btnExit = $html.find(".gw-btn-exit"),
			msg = {
				"from": {
					"username": context.username,
					"userid": context.userid
				},
				"to": partner
			};

		$btnSure.click(function (e) {
			e.preventDefault();
			var compareResult = wordinput.compare();
			if (typeof compareResult === "boolean") {
				if (compareResult) {
					$.extend(msg, { "type": "success" });
					msgHandler.send(msg, handleRight);
				}
				// Valid failed
				console.log("Valid failed!");
			}
			else {
				$.extend(msg, {
					"type": "fail",
					"content": {
						"word": compareResult
					}
				});
				var callback = function () {
					handleWrong(compareResult);
				};
				msgHandler.send(msg, callback);
			}
		});
		$btnHint.click(function (e) {
			e.preventDefault();
			wordinput.hint();
		});
		$btnHelp.click(function (e) {
			e.preventDefault();
			$.extend(msg, { "type": "help" });
			msgHandler.send(msg, handleHelp);
		});
		$btnGiveup.click(function (e) {
			e.preventDefault();
			$.extend(msg, { "type": "giveup" });
			msgHandler.send(msg, handleGiveup);
		});
		$btnExit.click(function (e) {
			e.preventDefault();
			$.extend(msg, { "type": "exit" });
			msgHandler.send(msg, handleExit);
		});
	};

	function handleRight() {
		require(["widget/right/right"], function (right) {
			right();
		});
	}
	function handleWrong(wrongWord) {
		require(["widget/wrong/wrong"], function (wrong) {
			wrong(wrongWord);
		});
	}
	function handleHelp() {
		require(["widget/help/help"], function (help) {
			help();
		});
	}
	function handleGiveup() {
		require(["widget/giveup/giveup"], function (giveup) {
			giveup();
		});
	}
	function handleExit() {
		require(["widget/exit/exit"], function (exit) {
			exit();
		});
	}
	function handleInvited(data) {
		var doTemp = doT.template(template),
			$html = $(doTemp(data)),
			$guess = $html.find(".gw-guess");

		partner = data.from;

		wordinput.init($guess, data.content);
		eventsHandler($html);

		$container.empty().append($html);
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
