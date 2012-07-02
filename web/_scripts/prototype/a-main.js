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
		"context": "component/context",
		"roundoff": "component/roundoff",
        "takeword": "component/takeword",
		"getscore": "component/getscore",
		"updatescore": "component/updatescore",
		"msghandler": "component/msghandler",
		"matchpartner": "component/matchpartner"
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "modernizr", "widget/score/score", "widget/init/init", "roundoff"], function ($, modernizr, score, init, roundoff) {
    $(function () {

		score.get();
		init();
        roundoff();

    });
});
