"use strict";

var gwcontext = (function () {

    var url = location.href,
        context;

    if (url.indexOf("a.htm") > 0) {
        context = {
            "username": "UserA",
            "userid": "0001"
        };
    }
    else {
        context = {
            "username": "UserB",
            "userid": "0002"
        };
    }

    return context;
})();

define(function () {
    return {
        "set": function (args) {
            $.extend(gwcontext, args);
        },
        "get": function () {
            return gwcontext;
        }
    }
});