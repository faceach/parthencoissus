"use strict";

define(["jquery"], function ($) {

    var url = "../_data/word.txt";

    return function (word, context, callback) {

		if(typeof word !== "string"){
			callback = context;
			context = word;
			word = null;
		}

        var level = context.level;

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {

                var levelWords = data[level],
					max = levelWords.length,
                    wordExp;
                var randomNum = parseInt(Math.random() * max);

				if(word){
	                for (var i = 0; i < max; i++) {
	                    wordExp = levelWords[i];
	                    if (wordExp.word === word) {
	                        callback(wordExp);
	                        console.log("Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);
	                    }
	                }
				}
				else{
					var wordExp = levelWords[randomNum];
	                callback(wordExp);
                    console.log("Random - Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);
				}
            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
