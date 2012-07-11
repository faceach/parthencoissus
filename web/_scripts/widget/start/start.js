"use strict";

define(["jquery", "playbutton", "text!./template.html"],
function ($, playbutton, template) {

    // TODO: set route for all steps
    gwRouter.route("start", "start", function () {
        var $html = $(template);

        playbutton($html);

        $container.html($html);
    });

    var $container = $("#gw-main");

    return function () {

        location.hash = "start";

    };

});
