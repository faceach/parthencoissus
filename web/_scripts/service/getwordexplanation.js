"use strict";

define(["jquery"], function ($) {

    var url = "../_data/word.txt";

    return function (word, context, callback) {

        var level = context.level;

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {

                var levelWords = data[level],
					max = levelWords.length,
                    wordExp;
                for (var i = 0; i < max; i++) {
                    wordExp = levelWords[i];
                    if (wordExp.word === word) {
                        callback(wordExp);
                        console.log("Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);
                    }
                }

            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
