define(["jquery", "service/matchpartner"], function ($, matchpartnerService) {
    "use strict";

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

    return function (username, callback) {
        matchpartnerService(username, callback.success);
    };

});
