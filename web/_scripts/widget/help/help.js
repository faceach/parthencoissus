"use strict";

define(["jquery", "doT", "context", "widget/invited/invited", "widget/wordinput/wordinput", "widget/word/word", "text!./template.html", "msghandler", "roundoff"],
function ($, doT, Context, invited, wordinput, Word, template, MsgHandler, roundoff) {

    var $container = $("#gw-main"),
        msgHandler = new MsgHandler,
		word = new Word(),
        context = Context.get(),
        wrongword;

    function eventHandle($html) {
        var $btnSure = $html.find(".gw-btn-sure"),
            $btnGiveup = $html.find(".gw-btn-giveup"),
            $btnNext = $html.find(".gw-btn-nextword"),
            msg = {
                "from": {
                    "username": context.username,
                    "userid": context.userid
                },
                "to": invited.getPartner()
            };
        $btnSure.click(function (e) {
            e.preventDefault();
            var compareResult = wordinput.compare();
            if (typeof compareResult === "boolean") {
                if (compareResult) {
                    $.extend(msg, { "type": "success" });
                    msgHandler.send(msg, handleRight);
                }
                // Valid failed
                console.log("Valid failed!");
            }
            else {
                $.extend(msg, {
                    "type": "fail",
                    "content": {
                        "word": compareResult
                    }
                });
                wrongWord = compareResult;
                msgHandler.send(msg, handleWrong);
            }
        });
        $btnGiveup.click(function (e) {
            e.preventDefault();
            $.extend(msg, { "type": "giveup" });
            msgHandler.send(msg, handleGiveup);
        });
        $btnNext.click(function (e) {
            e.preventDefault();
            word.display($word);
        });
    };
    function handleRight() {
        require(["widget/right/right"], function (right) {
            right();
        });
    };
    function handleWrong() {
        require(["widget/wrong/wrong"], function (wrong) {
            wrong(wrongWord);
        });
    };
    function handleGiveup() {
        require(["widget/giveup/giveup"], function (giveup) {
            giveup();
        });
    };
    function rescueHandle(data) {
        var doTemp = doT.template(template),
            $html = $(doTemp(data)),
            $guess = $html.find(".gw-guess"),
            $word = $html.find(".gw-word");

        eventHandle($html);
        wordinput.answer($guess);
        word.display($word);
        //wordinput.help(data.content.word);
        
        $container.empty().html($html);
        
    };

    return function () {
        msgHandler.listen("rescue", rescueHandle);
    };

});
