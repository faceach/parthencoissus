"use strict";

define(["jquery", "context"], function ($, context) {

    var url = "../_data/getscore.txt";

    return function (callback) {

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(data){
				context.set(data)
				callback.success(data);
			},
            error: callback.error
        });

    };

});
