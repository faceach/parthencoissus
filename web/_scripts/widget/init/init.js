"use strict";

define(["jquery", "takeword"], function ($, takeword) {

    var $main = $("#gw-main"),
        $btnTakeword = $main.find(".gw-btn-takeword");

    $btnTakeword.click(function () {

        takeword({ "success": function (data) { console.log(data.word) } });

    });

});
