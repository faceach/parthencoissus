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

    $(function () {

        $("#applist").find("a").click(function (e) {
            var $this = $(this),
            $target = $(this.hash);
            $target.empty();
            if ($this.attr("running")) {
                $this.attr("running", false);
            }
            else {
                $.ajax({
                    url: "/",
                    dataType: 'html',
                    success: function (data) {
                        $target.html(data);
                        $this.attr("running", true);
                    },
                    error: function () {
                        console.log("error");
                    }
                });
            }
            e.preventDefault();
        });

    });

});

