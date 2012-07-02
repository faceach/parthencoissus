"use strict";

define(["jquery", "context", "service/getwordexplanation"], function ($, context, getwordexplanationService) {

    /*
    var url = "service/getexplanation";

    return function (word, callback) {

    $.ajax({
    url: url,
    data: word
    dataType: 'json',
    cache: false,
    success: callback.success,
    error: callback.error
    });

    };
    */

    return function (word, callback) {
        getwordexplanationService(word, context.get(), callback.success);
    };

});
