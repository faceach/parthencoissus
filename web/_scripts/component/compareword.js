"use strict";

define(function () {

    return function (guess, answer) {
        if (guess === answer) {
            return true;
        }
		else {
            return false;
        }
    };

});