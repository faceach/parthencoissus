"use strict";

define(function () {

	return function(input) {
	    input = input.trim();
		var wordNum = input.split(" ").length,
	        commaNum = input.split(",").length,
			logicNum = input.split("or ").length + input.split("and ").length,
	        points;
	    commaNum = (commaNum >= wordNum)&&commaNum!==0 ? wordNum - 1 : commaNum;
	    points = wordNum * 0.04 + commaNum * 0.06+logicNum* 0.04;
	    return points > 1 ? 1 : points;
	};
	
});