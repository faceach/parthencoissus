"use strict";

define(["jquery", "backbone", "text!./template.html", "roundoff"],
function ($, Backbone, template, roundoff) {

    var $container;

    return function ($el) {
        $container = $el;
        var $html = $(template),
        	$btnNext = $html.find(".gw-btn-next");



        getwordexplanation()
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
