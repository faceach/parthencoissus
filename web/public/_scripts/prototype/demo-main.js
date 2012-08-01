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

    $("#btn-startdemo").click(function (e) {
        var target = this.hash;
        $.ajax({
            url: "/",
            dataType: 'html',
            success: function (data) {
                $(target).show().addClass("visible").html(data);
            },
            error: function () {
                console.log("error");
            }
        });
    });

});

