"use strict";

define(["jquery", "widget/takeword/takeword", "text!./template.html", "roundoff"],
function ($, takeword, template, roundoff) {

    gwRouter.route("init", "init", function () {
        console.log("#init");
    });

    var $container = $("#gw-main");

    return function () {
        var $html = $(template),
        	$btnTakeword = $html.find(".gw-btn-takeword");

        $btnTakeword.click(function (e) {
            e.preventDefault();
            takeword.load();
            location.hash = this.hash;
        });

        $container.empty().append($html);
        roundoff();

    };

});
