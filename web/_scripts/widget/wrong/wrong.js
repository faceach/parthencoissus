"use strict";

define(["jquery", "doT", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "msghandler", "roundoff"],
function ($, doT, Word, playbutton, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
        msgHandler = new MsgHandler,
		word = new Word(),
        msg;

    function init() {
        var $word = $container.find(".gw-word"),
			$mistakeword = $container.find(".gw-mistakeword"),
            $btnContainer = $container.find(".gw-btn-container");

        word.display($mistakeword, msg.content.word, true);
        word.display($word, msg.origin.word);
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
