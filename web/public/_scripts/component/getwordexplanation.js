define(["jquery", "context", "service/getwordexplanation"], function ($, context, getwordexplanationService) {
    "use strict";

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
        if (typeof word !== "string") {
            callback = word;
            word = null;
            getwordexplanationService(context.get(), callback.success);
        }
        else {
            getwordexplanationService(word, context.get(), callback.success);
        }
    };

});
