define(["jquery", "widget/takeword/takeword", "doT", "text!./template.html", "roundoff"],
function ($, takeword, doT, template, roundoff) {
    "use strict";

    gwRouter.route("exited", "exited", function () {
        console.log("#exited");
    });

    return function ($container) {
        location.hash = "exited";

        var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$newGame = $html.find(".gw-newgame");

        takeword.load($newGame);
        $container.empty().append($html);

        roundoff();

    };

});
