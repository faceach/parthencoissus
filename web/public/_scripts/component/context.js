define(function () {
	"use strict";

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