define(["jquery"], function ($) {
    "use strict";

    var url = "../_data/word.txt";

    return function (word, context, callback) {

        if (typeof word !== "string") {
            callback = context;
            context = word;
            word = null;
        }

        var level = context.level,
            category = context.category || "fruits";

            console.log("*****");
            console.log(context);
            console.log(category);
            console.log("*****");

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var categoryWords = data[category],
					max = categoryWords.length,
					wordExp;
                var randomNum = parseInt(Math.random() * max);

                if (word) {
                    for (var i = 0; i < max; i++) {
                        wordExp = categoryWords[i];
                        if (wordExp.word === word) {
                            callback(wordExp);
                            console.log("Word: " + wordExp.word + ";\nExplanation: " + wordExp.explanation);
                            return;
                        }
                    }
                    callback();
                    console.log("Word cannot be found in our library!");
                }
                else {
                    var wordExp = categoryWords[randomNum];
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
