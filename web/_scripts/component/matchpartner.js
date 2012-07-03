"use strict";

define(["jquery", "service/matchpartner"], function ($, matchpartnerService) {

/*
    var url = "../_data/matchpartner.txt";

    return function (callback) {

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: callback.success,
            error: callback.error
        });

    };
    */

    return function (userid, callback) {
        matchpartnerService(userid, callback.success);
    };

});
