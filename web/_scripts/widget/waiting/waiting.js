"use strict";

define(["jquery", "backbone", "widget/study/study", "text!./template.html", "roundoff"],
function ($, Backbone, study, template, roundoff) {

    var $container = $("#gw-main");

    return function () {
        var $html = $(template),
            $study = $html.find("gw-study");

        study($study);

        $container.empty().append($html);
        roundoff();

    };

});
