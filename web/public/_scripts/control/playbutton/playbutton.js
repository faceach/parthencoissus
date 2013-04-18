define(["jquery", "text!./control/playbutton/template.html", "roundoff"],
function ($, template, roundoff) {
    "use strict";

    return function ($btnContainer, $container) {

        var $btn = $(template);
        $btn.click(function (e) {
            e.preventDefault();
            require(["widget/takeword/takeword"], function (takeword) {
                takeword.load($container);
            });
        });
        $btnContainer.empty().append($btn);
        roundoff();

    };

});
