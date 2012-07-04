"use strict";

define(["jquery", "text!./template.html", "roundoff"],
function ($, template, roundoff) {

    var $container;

    return function ($el) {

        $container = $el;
        var $btn = $(template);
        $btn.click(function (e) {
            e.preventDefault();
            require(["widget/takeword/takeword"], function (takeword) {
                takeword.load();
            });
            location.hash = this.hash;
        });
        $container.empty().append($btn);
        roundoff();

    };

});
