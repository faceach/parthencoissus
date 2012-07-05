"use strict";

define(function () {

    return function (word) {
        var lens = word.length;
        if (lens <= 6) {
            randomNum = parseInt(Math.random() * (lens));
            return [randomNum];
        }
        else {
            randomNum = parseInt(Math.random() * (lens - 1)) + 1;
            return [0, randomNum];
        }
    };

});