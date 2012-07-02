"use strict";

define(["jquery", "backbone", "text!./template.html", "roundoff"],
function ($, Backbone, template, roundoff) {

    var $container = $("#gw-main");

    return function () {
        var $html = $(template),
        	$btnNext = $html.find(".gw-btn-next");

        $btnNext.click(function (e) {
            console.log("xx");
            e.preventDefault();
            //takeword.load();
            //location.hash = this.hash;
        });
        console.log("yy");

        $container.empty().append($html);
        roundoff();

    };

});
