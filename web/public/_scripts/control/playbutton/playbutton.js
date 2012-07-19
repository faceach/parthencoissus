"use strict";

define(["jquery", "text!./control/playbutton/template.html", "roundoff"],
function ($, template, roundoff) {

    return function ($el, $container) {

        $el;
        var $btn = $(template);
        $btn.click(function (e) {
            e.preventDefault();
            require(["widget/takeword/takeword"], function (takeword) {
                takeword.load($container);
            });
        });
        $el.empty().append($btn);
        roundoff();

    };

});
