"use strict";

define(["jquery", "context", "service/takeword"], function ($, context, takewordService) {

	/*
    var url = "service/takeword";

    return function (callback) {

        $.ajax({
            url: url,
			data: context
            dataType: 'json',
            cache: false,
            success: callback.success,
            error: callback.error
        });

    };
	*/
	
	return function(callback){
		takewordService(context, callback.success);
	};

});
