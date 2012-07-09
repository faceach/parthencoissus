"use strict";

define(["jquery", "widget/takeword/takeword", "bullistword", "doT", "text!./template.html", "msghandler", "roundoff"],
function ($, takeword, bullistword, doT, template, MsgHandler, roundoff) {

    gwRouter.route("waiting", "waiting", function () {
        console.log("#waiting");
    });

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
    function handleHelp(msg) {
        console.log("Help");
        require(["widget/rescue/rescue"], function (rescue) {
            rescue();
        });
    };
    function handleGiveup(msg) {
        console.log("Give up");
        require(["widget/givenup/givenup"], function (givenup) {
            givenup();
        });
    };
    function handleExit(msg) {
        console.log("Exited");
        require(["widget/exited/exited"], function (exited) {
            exited();
        });
    };
    function handleMsg() {
        msgHandler.listen("success", handleSuccess);
        msgHandler.listen("fail", handleFail);
        msgHandler.listen("help", handleHelp);
        msgHandler.listen("giveup", handleGiveup);
        msgHandler.listen("exit", handleExit);
    };

    return function () {
        location.hash = "waiting";

        var doTemp = doT.template(template),
			$html = $(doTemp(takeword.getPartner())),
			$study = $html.find(".gw-study");

        bullistword($study);

        $container.empty().append($html);

        handleMsg();
        roundoff();

    };

});
