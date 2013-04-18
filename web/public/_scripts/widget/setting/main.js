define(["jquery", "text!./template.html", "roundoff"],
function ($, template, roundoff) {
    "use strict";

    gwRouter.route("setting", "setting", function () {
        console.log("#setting");
    });

    return function ($container) {
        location.hash = "setting";

        var $html = $(template);

        $container.empty().append($html);
        roundoff();

    };

});
