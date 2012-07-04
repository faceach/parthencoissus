"use strict";

define(["jquery", "widget/takeword/takeword", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, template, roundoff) {

    var $container = $("#gw-main");

    return function (mistakeWord) {
        var $html = $(template),
			$word = $html.find(".gw-word"),
			$mistakeword = $html.find(".gw-mistakeword"),
			$btnContainer = $html.find(".gw-btn-container");

        var word = new Word();

        word.display($mistakeword, mistakeWord, true);
        word.display($word, takeword.get());
        playbutton($btnContainer);

        $container.empty().append($html);

        roundoff();

    };

});
