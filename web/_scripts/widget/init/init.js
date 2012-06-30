"use strict";

define(["jquery", "takeword", "text!./template.tpl"], function ($, takeword, template) {

    var $container = $("#gw-main");
	
	return function(){
		$container.html(template);
		
		var successCallback = function(data){
			console.log(data.word);
		};
		
        var $btnTakeword = $container.find(".gw-btn-takeword");
		$btnTakeword.click(function () {

	        takeword(
				{ "success": successCallback }
				);

	    });
	
	};

});
