"use strict";

define(["jquery", "widget/takeword/takeword", "widget/word/word", "widget/playbutton/playbutton", "doT","text!./template.html", "roundoff"],
function ($, takeword, Word, playbutton, doT,template, roundoff) {

    var $container = $("#gw-main");

    return function () {
        var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$word = $html.find(".gw-word"),
			$btnContainer = $html.find(".gw-btn-container");

        var word = new Word();

        word.display($word, takeword.getWord());
        playbutton($btnContainer);

        $container.empty().append($html);

        roundoff();

    };

});
