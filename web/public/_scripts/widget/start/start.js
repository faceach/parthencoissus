"use strict";

define(["jquery", "playbutton", "text!./template.html"],
function ($, playbutton, template) {

    return function ($container) {

        // TODO: set route for all steps
        gwRouter.route("start", "start", function () {
            var $html = $(template);
            playbutton($html, $container);
            $container.html($html);
        });

        location.hash = "start";
    };

});
