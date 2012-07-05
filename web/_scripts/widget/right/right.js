"use strict";

define(["jquery", "doT", "widget/study/study", "text!./template.html", "msghandler", "roundoff"],
function ($, doT, study, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
		msgHandler = new MsgHandler;

    function handleSuccess(data) {
        var $html = $(template),
            doTemp = doT.template(template);

        $container.empty().html(doTemp(data));
        answer = msg.content.word;
        btnClickHandler();
        autoSkip();
        roundoff();
    }

    return function () {
        msgHandler.listen("success", handleSuccess);
    };

});
