"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        "preventscrolling": "common/preventscrolling"
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "preventscrolling"], function ($, preventscrolling) {
    $(function () {

        var $gwcontainer = $(".gw-container");
        preventscrolling($gwcontainer);

    });
});
