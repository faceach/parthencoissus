"use strict";

define(["jquery", "service/getscore"], function ($, getscoreService) {

/*
    var url = "../_data/getscore.txt";

    return function (userid, callback) {

        $.ajax({
            url: url,
            data: userid,
            dataType: 'json',
            cache: false,
            success: function (data) {
                context.set(data)
                callback.success(data);
            },
            error: callback.error
        });

    };
    */

    return function (userid, callback) {
        getscoreService(userid, callback.success);
    };

});
