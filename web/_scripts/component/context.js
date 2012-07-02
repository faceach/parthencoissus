"use strict";

var gwcontext = {
	"username": "UserA",
	"userid": "0001"
};

define(function(){
	return {
		"set": function(args){
			$.extend(gwcontext, args);
		},
		"get": function(){
			return gwcontext;
		}
	}
});