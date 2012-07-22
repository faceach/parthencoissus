"use strict";

define(["jquery", "wordinput", "playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, playbutton, template, roundoff) {

    gwRouter.route("giveup", "giveup", function () {
        console.log("#giveup");
    });

    return function ($container) {
        location.hash = "giveup";

        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        playbutton($btnContainer, $container);

        $container.empty().html($html);

    };

});
