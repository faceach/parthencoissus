"use strict";

define(["jquery", "widget/playbutton/playbutton", "text!./template.html"],
function ($, playbutton, template) {

    gwRouter.route("init", "init", function () {
        console.log("#init");
    });

    var $container = $("#gw-main");

    return function () {
        var $html = $(template);
        playbutton($html);
        $container.html($html);
    };

});
