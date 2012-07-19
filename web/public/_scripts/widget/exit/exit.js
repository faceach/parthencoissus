"use strict";

define(["jquery", "roundoff"],
function ($, roundoff) {

    gwRouter.route("exit", "exit", function () {
        console.log("#exit");
    });

    return function ($container) {
        location.hash = "exit";

        $container.empty().html("Exited.");
        roundoff();
    };

});
