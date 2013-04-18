define(["jquery", "widget/takeword/takeword", "word", "playbutton", "doT","text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, doT,template, roundoff) {
	"use strict";

    gwRouter.route("fail", "fail", function () {
        console.log("#fail");
    });

	return function ($container,mistakeWord) {
	    location.hash = "fail";

	    var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$word = $html.find(".gw-word"),
			$mistakeword = $html.find(".gw-mistakeword"),
			$btnContainer = $html.find(".gw-btn-container");

		var word = new Word();

		word.display($mistakeword, mistakeWord, "mistake");
		word.display($word, takeword.getWord());
		playbutton($btnContainer, $container);

		$container.empty().append($html);

		roundoff();

	};

});
