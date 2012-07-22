"use strict";

define(["jquery", "widget/takeword/takeword", "word", "playbutton", "doT","text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, doT,template, roundoff) {

	gwRouter.route("success", "success", function () {
		console.log("#success");
	});

	return function ($container) {
		location.hash = "success";

		var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$word = $html.find(".gw-word"),
			$btnContainer = $html.find(".gw-btn-container");

		var word = new Word();

		word.display($word, takeword.getWord());
		playbutton($btnContainer, $container);

		$container.empty().append($html);

		roundoff();

	};

});
