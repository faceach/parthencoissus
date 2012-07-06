"use strict";

define(["jquery", "widget/wordinput/wordinput", "widget/playbutton/playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, playbutton, template, roundoff) {

    var $container = $("#gw-main");

    return function () {

        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        playbutton($btnContainer);

        $container.empty().append($html);
        roundoff();

    };

});
