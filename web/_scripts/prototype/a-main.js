"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        // lib
        "text": "_lib/require/text",
        "modernizr": "_lib/require/adapter/modernizr",
        "mustache": "_lib/require/adapter/mustache",

        "underscore": "_lib/require/adapter/underscore",
        "backbone": "_lib/require/adapter/backbone",
        "backbone-localstorage": "_lib/require/adapter/backbone-localstorage",

        "jquery.mousewheel": "_lib/jquery/jquery.mousewheel",
        "jquery.textchange": "_lib/jquery/jquery.textchange",

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
    shim: {
        'jquery.mousewheel': ['jquery'],
        'jquery.textchange': ['jquery'],
        'backbone': ['underscore', 'jquery']
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

var gwRouter;
require(["jquery", "backbone"], function ($, Backbone) {
        gwRouter = new Backbone.Router;
});

require(["jquery", "modernizr", "widget/score/score", "widget/init/init", "roundoff", "backbone"],
function ($, modernizr, score, init, roundoff, Backbone) {
    $(function () {

        // Route start
        Backbone.history.start();
        location.hash = "init";
        // Fuction start
        score.get();
        roundoff();
        init();

    });
});
