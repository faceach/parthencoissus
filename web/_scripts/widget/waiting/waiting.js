"use strict";

define(["jquery", "widget/study/study", "text!./template.html", "msghandler", "roundoff"],
function ($, study, template,MsgHandler, roundoff) {

    var $container = $("#gw-main"),
		msgHandler = new MsgHandler;

    function handleSuccess(msg) {
        console.log("success");
    };
    function handleGiveup(msg) {
        console.log("Give up");
    };
    function handleExit(msg) {
        console.log("Exit");
    };
    function handleFail(msg) {
        console.log("Fail");
    };
    function handleMsg() {
        msgHandler.listen("success", handleSuccess);
        msgHandler.listen("giveup", handleGiveup);
        msgHandler.listen("exit", handleExit);
        msgHandler.listen("fail", handleFail);
    };

    return function () {
        var $html = $(template),
            $study = $html.find(".gw-study");

        study($study);

        $container.empty().append($html);

		handleMsg();
        roundoff();

    };

});
