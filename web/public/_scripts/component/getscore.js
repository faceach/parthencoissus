define(["jquery", "service/getscore"], function ($, getscoreService) {
    "use strict";

    return function (userid, callback) {
        getscoreService(userid, callback.success);
    };

});
