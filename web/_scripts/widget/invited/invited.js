"use strict";

define(["jquery", "backbone", "msghandler", "text!./template.html", "roundoff"],
function ($, Backbone, MsgHandler, template, roundoff) {

    gwRouter.route("invited", "invited", function () {
        console.log("#init");
    });

    var $container = $("#gw-main"),
        msgHandler = new MsgHandler;

    function handleInvited() {
        console.log("invited");
        $container.empty().html(template);
    };
    return function () {
        msgHandler.listen("invite", handleInvited);

    };

});
