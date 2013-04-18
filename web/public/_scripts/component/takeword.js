
define(["jquery", "context", "service/takeword"], function ($, context, takewordService) {
    "use strict";

	return function(callback){
		takewordService(context.get(), callback.success);
	};

});
