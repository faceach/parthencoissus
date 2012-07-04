"use strict";

define(["jquery", "widget/bullistword/bullistword", "text!./template.html", "msghandler", "roundoff"],
function ($, bullistword, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
		msgHandler = new MsgHandler;

    function handleSuccess(msg) {
        console.log("success");
        require(["widget/success/success"], function (success) {
            success();
        });
    };
    function handleFail(msg) {
        var mistakeWord = msg.content.word;
        console.log("Fail: " + mistakeWord);
        require(["widget/fail/fail"], function (fail) {
            fail(mistakeWord);
        });
    };
    function handleGiveup(msg) {
        console.log("Give up");
    };
    function handleExit(msg) {
        console.log("Exit");
    };
    function handleMsg() {
        msgHandler.listen("success", handleSuccess);
        msgHandler.listen("fail", handleFail);
        msgHandler.listen("giveup", handleGiveup);
        msgHandler.listen("exit", handleExit);
    };

    return function () {
        var $html = $(template),
			$study = $html.find(".gw-study");

        bullistword($study);

        $container.empty().append($html);

        handleMsg();
        roundoff();

    };

});
