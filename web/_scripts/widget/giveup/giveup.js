"use strict";

define(["jquery", "doT", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "roundoff"],
function ($, doT, Word, playbutton, template, roundoff) {

    var $container = $("#gw-main"),
        word = new Word(),
        msg;

    function init() {
        var $word = $container.find(".gw-word"),
			$btnContainer = $container.find(".gw-btn-container");

        word.display($word, msg.content.word);
        playbutton($btnContainer);
    };

    return function ($data) {
        var $html = $(template),
            doTemp = doT.template(template);

        $container.empty().html(doTemp($data));
        msg = $data;
        init();
    };

});
