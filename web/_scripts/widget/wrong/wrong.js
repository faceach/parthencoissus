"use strict";

define(["jquery", "widget/wordinput/wordinput", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, Word, playbutton, template, roundoff) {

    var $container = $("#gw-main"),
        word = new Word;

    return function (wrong) {
        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $mistakeword = $html.find(".gw-mistakeword"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        word.display($mistakeword, wrong, "mistake");
        playbutton($btnContainer);

        $container.empty().html($html);
        roundoff();
    };

});