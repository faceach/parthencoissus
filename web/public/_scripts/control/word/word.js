define(["jquery", "doT", "getwordexplanation", "text!./control/word/template.html", "roundoff"],
function ($, doT, getwordexplanation, template, roundoff) {
    "use strict";

    var Word = function () { };

    var $html = $(template),
        tempWord = $html.find(".gw-tmp-word").html(),
        tempExplanation = $html.find(".gw-tmp-explanation").html(),
        tempMistakeword = $html.find(".gw-tmp-mistakeword").html();

    Word.prototype = {
        "display": function ($el, word, type) {
            var temp;
            switch (type) {
                case "mistake": temp = tempMistakeword;
                    break;
                case "explanation": temp = tempExplanation;
                    break;
                default: temp = tempWord;
                    break;
            }
            function successCallback(data) {
                var doTemp = doT.template(temp);

                if (!data) {
                    data = {
                        "word": word,
                        "explanation": [
                            "We are sorry, this word cannot found in our library! Suggest search on Google."
                        ]
                    };
                }
                $el.empty().html(doTemp(data));
                roundoff();
            };

            if (word) {
                getwordexplanation(word, {
                    "success": successCallback
                });
            }
            else {
                getwordexplanation({
                    "success": successCallback
                });
            }

            return this;
        }
    };

    return Word;

});
