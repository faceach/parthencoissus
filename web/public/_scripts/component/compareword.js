"use strict";

define(function () {

	return function (guess, answer) {
		if (guess.toLowerCase() === answer.toLowerCase()) {
			return true;
		}
		else {
			return false;
		}
	};

});