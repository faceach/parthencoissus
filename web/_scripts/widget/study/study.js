"use strict";

define(["jquery", "backbone", "mustache", "getwordexplanation", "text!./template.html", "roundoff"],
function ($, Backbone, mustache, getwordexplanation, template, roundoff) {

    var $container;

    return function ($el) {
        $container = $el;

        var $html = $(template),
			musTmp = $html.find(".gw-study-tmp").html(),
        	$btnNext = $html.find(".gw-btn-next");

        $btnNext.click(function (e) {
            e.preventDefault();
            getwordexplanation(
				{
				    "success": successCallback
				}
			);
            //location.hash = this.hash;
        });

        $container.empty().append($html);

        var $main = $container.find(".gw-study-main");
        var successCallback = function (data) {
            console.log(data);
            var html = mustache.render(musTmp, data);
            $main.empty().html(html);
            roundoff();
        };
        getwordexplanation(
			{
			    "success": successCallback
			}
		);

    };

});
