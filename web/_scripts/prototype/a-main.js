"use strict";

require.config({
    baseUrl: "../_scripts",
    urlArgs: "version=1.0.0",
    paths: {
        // common
        "preventscrolling": "common/preventscrolling",

        // component
        "takeword": "component/takeword"
    },
    catchError: true,
    waitSeconds: 7,
    locale: "fr-fr"
});

require(["jquery", "preventscrolling", "widget/init/init"], function ($, preventscrolling, init) {
    $(function () {

        var $gwcontainer = $(".gw-container");
        preventscrolling($gwcontainer);

    });
});
