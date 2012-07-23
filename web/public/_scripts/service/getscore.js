"use strict";

define(["jquery"], function ($) {

    var url = "../_data/getscore.txt";

    return function (userid, callback) {

        $.ajax({
            url: url,
            data: userid,
            dataType: 'json',
            cache: false,
            success: function (data) {
                callback(data);
            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
