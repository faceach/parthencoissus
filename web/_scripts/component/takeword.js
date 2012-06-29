"use strict";

define(["jquery"], function ($) {

    var url = "../_data/takeword.txt";

    return function (callback) {
        /*$.getJSON(url, function (data) {
        console.log("takeword:" + data);
        callback.call(this, data);
        });*/

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: callback.success,
            error: callback.error
        });
    };

});
