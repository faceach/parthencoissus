define(["jquery"], function ($) {
    "use strict";

    var url = "../_data/word.txt";

    return function (context, callback) {

        var level = context.level,
			score = context.score,
            category = context.category || "fruits";

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var categoryWords = data[category],
					max = categoryWords.length;
                var randomNum = parseInt(Math.random() * max);
                var wordExp = categoryWords[randomNum],
					word = { "word": wordExp.word };
                callback(word);
                console.log("Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);

            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
