"use strict";

define(["jquery", "backbone", "mustache", "widget/word/word", "text!./template.html", "roundoff"],
function ($, Backbone, mustache, Word, template, roundoff) {

    var $container;

    return function ($el) {
        $container = $el;

        var $html = $(template),
            $main = $html.find(".gw-study-main"),
        	$btnNext = $html.find(".gw-btn-next");

        var word = new Word;

        $btnNext.click(function (e) {
            e.preventDefault();
            word.display($main);
            //location.hash = this.hash;
        });

        word.display($main);
        $container.empty().append($html);

    };

});
