"use strict";

define(["jquery", "doT", "gethint", "compareword", "jquery.textchange", "widget/word/word", "text!./template.html", "roundoff"],
function ($, doT, gethint, compareword, textchange, Word, template, roundoff) {

    var $template = $(template),
		word,
		wordExp,
		warningCssClass = "warning";

    function keySupport($inputs) {
        $inputs.bind("textchange", function (e) {
            var $this = $(this);
            if ($this.val()) {
                $this
					.removeClass(warningCssClass)
					.next()
					.focus();
            }
        });
    };
    function validInputs($letters) {
        var patt = new RegExp("^[A-Za-z]+$"),
			result = true;
        $letters.each(function (i, e) {
            var letter = e.value;
            if (!patt.test(letter)) {
                $(e).addClass(warningCssClass);
                result = false;
            }
        });
        return result;
    };
    function getInputs($letters) {
        var inputWord = "";
        $letters.each(function (i, e) {
            var letter = e.value;
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
            var tempGuess = $template.find(".gw-tmp-guess").html(),
				doTemp = doT.template(tempGuess),
				$html = $(doTemp(wordExp)),
				$inputs = $html.find("input.gw-input-letter-valid");
            this.$letters = $html.find("input.gw-input-letter");
            this.$explist = $html.find("ul");

            keySupport($inputs);
            $container.empty().append($html);
        },
        "hint": function () {
            var hintIndex = gethint(word),
                $letters = this.$letters,
                index;
            for (var i = 0, lens = hintIndex; i < lens; i++) {
                index = hintIndex[i];
                $letters[index].value = word[index];
            }
        },
        "help": function (content) {
            var $explist = this.$explist;

            var tempExpitem = $template.find(".gw-tmp-expitem").html(),
				doTemp = doT.template(tempExpitem),
				$html = $(doTemp(content));

            this.$explist.append($html);
        },
        "answer": function ($container) {
            var tempAnswer = $template.find(".gw-tmp-answer").html(),
				doTemp = doT.template(tempAnswer),
				$html = $(doTemp(wordExp)),
				$word = $html.find(".gw-word");

            var insWord = new Word;
            insWord.display($word, word, "explanation");

            $container.empty().append($html);
        },
        "compare": function () {
            var guessWord,
				$letters = this.$letters;
            if (validInputs($letters)) {
                guessWord = getInputs($letters);
                if (compareword(guessWord, word)) {
                    return true;
                }
                else {
                    return guessWord;
                }
            }
            return false;
        },
        "getWord": function () {
            return word;
        }
    };
});