"use strict";

define(["jquery", "mustache", "getscore", "updatescore", "text!./template.tpl"], function ($, mustache, getscore, updatescore, template) {

    var $container = $("#gw-progress");
	var getProgressCssClass = function(level){
		var cssClass = "";
		switch(level){
			case "A":
			default: cssClass = "info";
				break;
			case "B": cssClass = "success";
				break;
			case "C": cssClass = "warning";
				break;
			case "D": cssClass = "danger";
				break;
		}
		return cssClass;
	};
	
	return {
		"get": function(){
		
			var successCallback = function(data){
				var progressCssClass = getProgressCssClass(data.level),
					html = mustache.render(template, $.extend(data, {"level": progressCssClass}));
				$container.html(html);
			};
		
			getscore(
				{"success": successCallback}
				);
	
		}
	};

});
