"use strict";

define(["jquery", "doT", "widget/word/word", "text!./template.html", "msghandler", "roundoff"],
function ($, doT, Word, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
        msgHandler = new MsgHandler,
		word = new Word();

    function studyInit() {
        var $word = $container.find(".gw-word");
        word.display($word);
    };

    function msgHandle() {
        msgHandler.listen("rescue", rescueHelp);
    }

    function rescueHelp(msg) {

        console.log("rescue fire!!!");
        console.log(msg);

    }

    return function ($data) {
        var $html = $(template),
            doTemp = doT.template(template);

        $container.empty().html(doTemp($data));
        studyInit();
        msgHandle();

    };

});
