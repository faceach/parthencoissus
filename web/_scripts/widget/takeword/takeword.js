"use strict";

define(["jquery", "mustache", "takeword", "text!./template.tpl", "roundoff"], function ($, mustache, takeword, template, roundoff) {

	var $container = $("#gw-main");
	
	var refreshWord = function($el){
		takeword(
			{
				"success": function(data){
					$el.text(data.word);
				}
			}
		);
	};
	
	return {
		load: function(){

			var $html = $(template),		
				$btnTakeword = $html.find(".gw-btn-takeword"),
				$word = $html.find("h1");
			
			refreshWord($word);
			
			$btnTakeword.click(function () {
			    refreshWord($word);
			
				return false;
			});

			$container.empty().append($html);
			roundoff();
			
		}
	}

});


