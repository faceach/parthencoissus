"use strict";

require.config({
        baseUrl: "../_scripts",
        urlArgs: "version=1.0.0",
        paths: {
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "preventscrolling"], function ($, preventscrolling) {
    $(function () {

        var $simulation = $(".simulation");
        preventscrolling($simulation);

    });
});
