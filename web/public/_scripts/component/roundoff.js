"use strict";

define(["jquery", "preventscrolling"], function ($, preventscrolling) {

	var $gwcontainer = $(".gw-container");
	return function(){
		preventscrolling($gwcontainer);
	};
	
});