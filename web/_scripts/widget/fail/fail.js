"use strict";

define(["jquery", "widget/takeword/takeword", "widget/word/word", "widget/playbutton/playbutton", "doT","text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, doT,template, roundoff) {

    var $container = $("#gw-main");

    return function (mistakeWord) {
        var doTemp = doT.template(template),
			$html = $(doTemp({"partnerName": takeword.getPartner()})),
			$word = $html.find(".gw-word"),
			$mistakeword = $html.find(".gw-mistakeword"),
			$btnContainer = $html.find(".gw-btn-container");

        var word = new Word();

        word.display($mistakeword, mistakeWord, true);
        word.display($word, takeword.getWord());
        playbutton($btnContainer);

        $container.empty().append($html);

        roundoff();

    };

});
