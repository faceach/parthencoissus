"use strict";

define(["jquery"], function ($) {

    var url = "../_data/word.txt";

    return function (context, callback) {

        var level = context.level,
			score = context.score;

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {

                var levelWords = data[level],
					max = levelWords.length;
                var randomNum = parseInt(Math.random() * max);
                var wordExp = levelWords[randomNum],
					word = { "word": wordExp.word };
                console.log("Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);
                callback(word);

            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
