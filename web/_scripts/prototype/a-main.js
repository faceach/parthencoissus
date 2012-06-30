"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
		// lib
		"text": "_lib/require/text",
		"modernizr": "_lib/require/adapter/modernizr",
		"mustache": "_lib/require/adapter/mustache",		
		
        // common
        "preventscrolling": "common/preventscrolling",

        // component
		"roundoff": "component/roundoff",
        "takeword": "component/takeword",
		"getscore": "component/getscore",
		"updatescore": "component/updatescore"
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "modernizr", "roundoff", "widget/score/score", "widget/init/init"], function ($, modernizr, roundoff, score, init) {
    $(function () {

		score();
		init();
        roundoff();

    });
});
