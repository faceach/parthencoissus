"use strict";

define(["jquery", "context", "mustache", "takeword", "matchpartner", "msghandler", "text!./template.tpl", "roundoff"], 
function ($, context, mustache, takeword, matchpartner, msghandler, template, roundoff) {

	var $container = $("#gw-main");
	var word = "";
	
	var refreshWord = function($el){
		takeword(
			{
				"success": function(data){
					word = data.word;
					$el.text(word);
				}
			}
		);
	};
	
	var sendExplanation = function(msg){
		
		matchpartner(
			{
				"success": function(data){
					$.extend(msg, {"to": data.userid});
					msghandler.send(msg);
				}
			}
		);
		
	};
	
	return {
		load: function(){

			var $html = $(template),		
				$btnTakeword = $html.find(".gw-btn-takeword"),
				$btnSend = $html.find(".gw-btn-send"),
				$word = $html.find("h1"),
				$input = $html.find("textarea");
			
			refreshWord($word);
			
			$btnTakeword.click(function () {
			    refreshWord($word);
			
				return false;
			});
			
			$btnSend.click(function(){
				var input = $input.val();

				var msg = { 
				    "from": context.get().userid,
				    "type": "invite",
				    "content": {
				        "word": word,
				        "explanation": input
				    }
				}

				sendExplanation(msg);
				
				return false;
			});

			$container.empty().append($html);
			roundoff();
			
		}
	}

});


