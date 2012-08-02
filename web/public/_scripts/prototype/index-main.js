"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        // lib
        "text": "_lib/requirejs/text",
        "modernizr": "_lib/requirejs/adapter/modernizr",
        "mustache": "_lib/requirejs/adapter/mustache",

        "underscore": "_lib/requirejs/adapter/underscore",
        "backbone": "_lib/requirejs/adapter/backbone",
        "backbone-localstorage": "_lib/requirejs/adapter/backbone-localstorage",

        "doT": "_lib/doT/doT",

        "jquery.mousewheel": "_lib/jquery/jquery.mousewheel",
        "jquery.textchange": "_lib/jquery/jquery.textchange",

        // common
        "msglistener": "common/msglistener",
        "preventscrolling": "common/preventscrolling",

        // component
        "context": "component/context",
        "roundoff": "component/roundoff",
        "takeword": "component/takeword",
        "getscore": "component/getscore",
        "updatescore": "component/updatescore",
        "msghandler": "component/msghandler",
        "matchpartner": "component/matchpartner",
        "getwordexplanation": "component/getwordexplanation",
        "gradehandler": "component/gradehandler"
    },
    shim: {
        'jquery.mousewheel': ['jquery'],
        'jquery.textchange': ['jquery'],
        'backbone': ['underscore', 'jquery']
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
