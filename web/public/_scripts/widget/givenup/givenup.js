define(["jquery", "widget/takeword/takeword", "word", "playbutton","doT", "text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, doT, template, roundoff) {
    "use strict";

    gwRouter.route("givenup", "givenup", function () {
        console.log("#givenup");
    });

    return function ($container) {
        location.hash = "givenup";

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
