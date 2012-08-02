"use strict";

function getScript(src, successCallback) {
    var s = document.createElement("script");
    s.src = src;
    s.type = "text/javascript";
    if (document.all) {
        s.onreadystatechange = function () {
            if (this.readyState == "loaded" || this.readyState == "complete") {
                successCallback();
            }
        }
    }
    else {
        s.onload = function () {
            successCallback();
        }
    }
    document.body.appendChild(s);
};

if (typeof jquery === "undefined" || !jquery) {
    getScript("/_scripts/_lib/jquery/jquery-1.7.2.min.js", function () {
        detectRequire();
    });
}
else {
    detectRequire();
}

function detectRequire() {
    if (typeof require === "undefined" || !require) {
        $.getScript("/_scripts/_lib/requirejs/require-jquery.js", function () {
            main();
        });
    }
    else {
        main();
    }
};

function main() {

    require.config({
        baseUrl: "../_scripts",
        urlArgs: "version=1.0.0",
        paths: {
            // Libs
            "text": "_lib/requirejs/text",
            "modernizr": "_lib/requirejs/adapter/modernizr",
            "doT": "_lib/doT/doT",

            "underscore": "_lib/requirejs/adapter/underscore",
            "backbone": "_lib/requirejs/adapter/backbone",
            "backbone-localstorage": "_lib/requirejs/adapter/backbone-localstorage",

            "jquery.mousewheel": "_lib/jquery/jquery.mousewheel",
            "jquery.textchange": "_lib/jquery/jquery.textchange",

            "socket.io": "/socket.io/socket.io.js",

            // Common
            "msglistener": "common/msglistener",
            "preventscrolling": "common/preventscrolling",

            // Components
            "compareword": "component/compareword",
            "config": "component/config",
            "context": "component/context",
            "gethint": "component/gethint",
            "getscore": "component/getscore",
            "getwordexplanation": "component/getwordexplanation",
            "gradehandler": "component/gradehandler",
            "matchpartner": "component/matchpartner",
            "msghandler": "component/msghandler",
            "roundoff": "component/roundoff",
            "takeword": "component/takeword",
            "updatescore": "component/updatescore",

            // Controls - with template
            "bullistword": "control/bullistword/bullistword",
            "playbutton": "control/playbutton/playbutton",
            "score": "control/score/score",
            "word": "control/word/word",
            "wordinput": "control/wordinput/wordinput"
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

    window.gwRouter = null;

    require(["jquery", "backbone"], function ($, Backbone) {
        gwRouter = new Backbone.Router;

        require(["modernizr", "widget/login/login", "widget/logged/logged"],
		function (modernizr, login, logged) {
		    $(function () {

		        // Route start
		        Backbone.history.start();
		        // Fuction start
		        login(logged);

		    });
		});

    });

};