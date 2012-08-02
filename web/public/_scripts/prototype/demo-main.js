"use strict";

require.config({
	baseUrl: "../_scripts",
	urlArgs: "version=1.0.0",
	catchError: true,
	waitSeconds: 7,
	locale: "fr-fr"
});

var gwRouter;
require(["jquery"], function ($) {

	$("#applist").find("a").click(function (e) {

		var $this = $(this),
			$target = $(this.hash);
		if ($this.data("running")) {
			$target.html("");
		}
		else {
			$.ajax({
				url: "/",
				dataType: 'html',
				success: function (data) {
					$target.html(data);
				},
				error: function () {
					console.log("error");
				}
			});
		}
	});

});

