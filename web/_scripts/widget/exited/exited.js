"use strict";

define(["jquery", "widget/takeword/takeword", "doT", "text!./template.html", "roundoff"],
function ($, takeword, doT, template, roundoff) {

    var $container = $("#gw-main");

    return function (mistakeWord) {
        var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$newGame = $html.find(".gw-newgame");

        takeword.load($newGame);
        $container.empty().append($html);

        roundoff();

    };

});
