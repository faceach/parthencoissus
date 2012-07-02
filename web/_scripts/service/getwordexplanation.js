"use strict";

define(["jquery"], function ($) {

    var url = "../_data/word.txt";

    return function (word, callback) {
		
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(data){
			
				console.log(data);
				
				var levelWords = data[level],
					max = levelWords.length;
				var randomNum = parseInt(Math.random() * max);
				var wordExp = levelWords[randomNum],
					word = {"word": wordExp.word};
					
				callback(word);
			
			},
            error: function(e){
				console.log(e);
			}
        });

    };

});
