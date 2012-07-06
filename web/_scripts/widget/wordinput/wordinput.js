"use strict";

define(["jquery", "doT", "gethint", "compareword", "jquery.textchange", "widget/word/word", "text!./template.html", "roundoff"],
function ($, doT, gethint, compareword, textchange, Word, template, roundoff) {

    var word, wordExp, $letters;

    function keySupport($inputs) {
        $inputs.bind("textchange", function () {
            if ($(this).val()) {
                $(this).next().focus();
            }
        });
    };
    function getInput($letters) {
        var inputWord = "";
        $letters.each(function (i, e) {
            var letter = e.value;
            if (!letter) {
                //TODO: warning this input to user
                //...
                return false;
            }
            inputWord += letter;
        });
        return inputWord;
    };

    return {
        "init": function ($container, originalWord) {
            if (!originalWord) {
                return;
            }
            wordExp = originalWord;
            word = originalWord.word;
            var $html = $(template),
				tempGuess = $html.find(".gw-tmp-guess").html(),
				doTemp = doT.template(tempGuess),
				$html = $(doTemp(wordExp)),
				$inputs = $html.find("input.gw-input-letter-valid");
            $letters = $html.find("input.gw-input-letter");

            keySupport($inputs);
            $container.empty().append($html);
        },
        "hint": function () {
            var hintIndex = gethint(word);
            console.log(hintIndex);
        },
        "help": function () {

        },
        "answer": function () {
            var $html = $(template),
				tempAnswer = $html.find(".gw-tmp-answer").html(),
				doTemp = doT.template(tempAnswer),
				$html = $(doTemp(wordExp)),
				$word = $html.find(".gw-word");

            var insWord = new Word;
            insWord.display($word, word, "explanation");

            $container.empty().append($html);
        },
        "compare": function () {
            var guessWord = getInput($letters);
            if (compareword(guessWord, word)) {
                return true;
            }
            else {
                return guessWord;
            }
        },
        "getWord": function () {
            return word;
        }
    };
});