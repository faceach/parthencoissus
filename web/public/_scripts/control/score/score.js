"use strict";

define(["jquery", "context", "doT", "getscore", "text!./control/score/template.html"],
function ($, context, doT, getscore, template) {
	var $container = $("#gw-progress");
	function getProgressCssClass(level) {
		var cssClass = "";
		switch (level) {
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
		"get": function () {

			function successCallback(data) {
				var progressCssClass = getProgressCssClass(data.level),
					doTemp = doT.template(template),
					html = doTemp({ "level": progressCssClass, "score": data.score });
				console.log("Level: " + data.level + "; Score: " + data.score);
				$container.html(html);
				context.set(data);
			};

			getscore(context.get().userid,
				{ "success": successCallback }
				);

		}
	};

});
