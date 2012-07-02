"use strict";

define(["jquery", "context"], function ($, context) {

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

});
