"use strict";

define(["jquery", "roundoff"],
function ($, roundoff) {

    var $container = $("#gw-main");

    return function () {
        $container.empty().html("Exited.");
        roundoff();
    };

});
