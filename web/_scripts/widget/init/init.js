"use strict";

define(["jquery", "widget/takeword/takeword", "text!./template.tpl", "roundoff"], function ($, takeword, template, roundoff) {

    var $container = $("#gw-main");
	
	return function(){
		var $html = $(template),		
        	$btnTakeword = $html.find(".gw-btn-takeword");
		
		$btnTakeword.click(function () {
	        takeword.load();

			return false;
	    });
		
		$container.empty().append($html);
		roundoff();

	};

});
