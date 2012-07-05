"use strict";

define(["jquery", "widget/takeword/takeword", "widget/bullistword/bullistword","doT", "text!./template.html", "msghandler", "roundoff"],
function ($,takeword, bullistword,doT, template, MsgHandler, roundoff) {

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
        require(["widget/givenup/givenup"], function (givenup) {
            givenup();
        });
    };
    function handleExit(msg) {
        console.log("Exit");
        require(["widget/exit/exit"], function (exit) {
            exit();
        });
    };
    function handleMsg() {
        msgHandler.listen("success", handleSuccess);
        msgHandler.listen("fail", handleFail);
        msgHandler.listen("giveup", handleGiveup);
        msgHandler.listen("exit", handleExit);
    };

    return function () {
        var doTemp = doT.template(template),
			$html = $(doTemp({"partnerName": takeword.getPartner()})),
			$study = $html.find(".gw-study");

        bullistword($study);

        $container.empty().append($html);

        handleMsg();
        roundoff();

    };

});
