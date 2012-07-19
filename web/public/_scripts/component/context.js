"use strict";

define(function () {

    var gwcontext = {};

    return {
        "set": function (args) {
            $.extend(gwcontext, args);
        },
        "get": function () {
            return gwcontext;
        }
    }
});