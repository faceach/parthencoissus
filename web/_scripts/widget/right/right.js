"use strict";

define(["jquery", "doT", "widget/word/word", "widget/playbutton/playbutton", "text!./template.html", "msghandler", "roundoff"],
function ($, doT, Word, playbutton, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
		msgHandler = new MsgHandler,
		word = new Word(),
        msg;

    function init() {
        var $expMain = $container.find("#gw-explanation-main"),
            $btnContainer = $container.find(".gw-btn-container");

        word.display($expMain, msg.content.word);
        playbutton($btnContainer);

    }

    return function ($data) {

        var $html = $(template),
			doTemp = doT.template(template);

        $container.empty().html(doTemp($data));
        msg = $data;
        init();

    };

});
