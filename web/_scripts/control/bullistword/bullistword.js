"use strict";

define(["jquery", "word", "text!./control/bullistword/template.html", "roundoff"],
function ($, Word, template, roundoff) {

    var $container;

    return function ($el) {
        $container = $el;

        var $html = $(template),
            $word = $html.find(".gw-word"),
        	$btnNext = $html.find(".gw-btn-next");

        var word = new Word;

        $btnNext.click(function (e) {
            e.preventDefault();
            word.display($word);
            //location.hash = this.hash;
        });

        word.display($word);
        $container.empty().append($html);
        roundoff();
    };

});
