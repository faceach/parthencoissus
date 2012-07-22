"use strict";

define(["jquery", "wordinput", "playbutton", "text!./template.html", "roundoff"],
function ($, wordinput, playbutton, template, roundoff) {

    gwRouter.route("right", "right", function () {
        console.log("#right");
    });

    return function ($container) {
        location.hash = "right";

        var $html = $(template),
            $guess = $html.find(".gw-guess"),
            $btnContainer = $html.find(".gw-btn-container");

        wordinput.answer($guess);
        playbutton($btnContainer, $container);

        $container.empty().append($html);
        roundoff();

    };

});
