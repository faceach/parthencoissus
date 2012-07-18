"use strict";

define(["jquery", "wordinput", "word", "playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, Word, playbutton, template, roundoff) {

    gwRouter.route("wrong", "wrong", function () {
        console.log("#wrong");
    });

    var $container = $("#gw-main"),
        word = new Word;

    return function (wrongWord) {
        location.hash = "wrong";

        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $mistakeword = $html.find(".gw-mistakeword"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        word.display($mistakeword, wrongWord, "mistake");
        playbutton($btnContainer);

        $container.empty().html($html);
        roundoff();
    };

});