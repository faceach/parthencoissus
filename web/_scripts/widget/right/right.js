"use strict";

define(["jquery", "widget/wordinput/wordinput", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, Word, playbutton, template, roundoff) {

    var $container = $("#gw-main"),
		word = new Word();

    return function () {

        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $expMain = $html.find("#gw-explanation-main"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        word.display($expMain, wordinput.getWord());
        playbutton($btnContainer);

        $container.empty().append($html);
        roundoff();

    };

});
