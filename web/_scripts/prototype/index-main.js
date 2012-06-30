"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        // common
        "preventscrolling": "common/preventscrolling",

        // component
		"roundoff": "component/roundoff",
        "takeword": "component/takeword"
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "roundoff"], function ($, roundoff) {
    $(function () {

        roundoff();

    });
});
