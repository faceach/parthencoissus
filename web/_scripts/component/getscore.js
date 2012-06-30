"use strict";

define(["jquery"], function ($) {

    var url = "../_data/getscore.txt";

    return function (callback) {

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: callback.success,
            error: callback.error
        });

    };

});
