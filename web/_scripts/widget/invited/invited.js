"use strict";

define(["jquery", "doT", "context", "widget/bullistword/bullistword",  "msghandler", "widget/wordinput/wordinput", "text!./template.html", "roundoff"],
function ($, doT, Context, bullistword,MsgHandler, wordinput, template, roundoff) {

	gwRouter.route("invited", "invited", function () {
		console.log("#invited");
	});

	var $container = $("#gw-main"),
		partner,
		msgHandler = new MsgHandler,
		context = Context.get();

	function eventsHandler($html) {
		var $btnSure = $html.find(".gw-btn-sure"),
			$study = $html.find(".gw-study"),
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
			$(this).remove();
		});
		$btnHelp.click(function (e) {
			e.preventDefault();
			$.extend(msg, { "type": "help" });
			var callback = function () {
				handleHelp($study);
			};
			msgHandler.send(msg, callback);
			$(this).remove();
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
	};
	function handleWrong(wrongWord) {
		require(["widget/wrong/wrong"], function (wrong) {
			wrong(wrongWord);
		});
	};
	function handleHelp($study) {
		bullistword($study);
		msgHandler.listen("rescue", function(msg){
	        wordinput.help(msg.content);
		});
	};
	function handleGiveup() {
		require(["widget/giveup/giveup"], function (giveup) {
			giveup();
		});
	};
	function handleExit() {
		require(["widget/exit/exit"], function (exit) {
			exit();
		});
	};
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
