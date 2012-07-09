"use strict";

define(["jquery", "roundoff"],
function ($, roundoff) {

    gwRouter.route("exit", "exit", function () {
        console.log("#exit");
    });

    var $container = $("#gw-main");

    return function () {
        location.hash = "exit";

        $container.empty().html("Exited.");
        roundoff();
    };

});
