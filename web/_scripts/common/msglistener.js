"use strict";

define(function () {

    return function (msgHandler) {

        if (window.addEventListener) {
            window.addEventListener("storage", msgHandler, false);
        }
        else if (window.attachEvent) {
            window.attachEvent("onstorage", msgHandler);
        }

    };

});
