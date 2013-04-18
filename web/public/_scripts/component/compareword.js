define(function () {
	"use strict";

	return function (guess, answer) {
		if (guess.toLowerCase() === answer.toLowerCase()) {
			return true;
		}
		else {
			return false;
		}
	};

});