"use strict";

define(["jquery", "doT", "getwordexplanation", "text!./template.html", "roundoff"],
function ($, doT, getwordexplanation, template, roundoff) {

    var Word = function () { };

    var $html = $(template),
        tempWord = $html.find(".gw-tmp-word").html(),
        tempMistakeword = $html.find(".gw-tmp-mistakeword").html();

    Word.prototype = {
        "display": function ($el, word, isMistake) {

            var temp = isMistake && word ? tempMistakeword : tempWord;
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
