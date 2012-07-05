"use strict";

define(["jquery", "text!./template.html", "roundoff"],
function ($, template, roundoff) {

    var $container = $("#gw-main");

    return function ($el) {

        $el;
        var $btn = $(template);
        $btn.click(function (e) {
            e.preventDefault();
            require(["widget/takeword/takeword"], function (takeword) {
                takeword.load($container);
            });
            location.hash = this.hash;
        });
        $el.empty().append($btn);
        roundoff();

    };

});
