"use strict";

define(function () {
	
	var key = "guessword";
	
	return {
		"send": function(msg){
			
			localStorage.setItem(key, JSON.stringify(msg));
			
			console.log(msg);
			
		},
		"receive": function(){
			
			return JSON.parse(localStorage.getItem(key));
			
		}
	};

});
