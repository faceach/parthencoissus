"use strict";

define(["jquery", "doT", "gethint", "compareword", "jquery.textchange", "widget/word/word", "text!./template.html", "roundoff"],
function ($, doT, gethint, compareword, textchange, Word, template, roundoff) {

    var $template = $(template),
        word,
        wordExp,
        warningCssClass = "warning",
        patten = new RegExp("^[A-Za-z]+$"); // test letters

    /* TODO: Cursor position
    function getPos(el) {
    var slct = document.selection;
    var rng = slct.createRange();
    el.select();
    rng.setEndPoint("StartToStart", slct.createRange());
    var psn = rng.text.length;
    rng.collapse(false);
    rng.select();
    return psn;
    };
    function setFocus(e) {
    var el = e.srcElement;
    var txt = el.createTextRange();
    txt.moveStart('character', el.value.length);
    txt.collapse(true);
    txt.select();
    };
    */

    function keySupport($inputs) {
        var lens = $inputs.length;
        $inputs
        .bind("textchange", function (e) {
            var $this = $(this),
                input = this.value;
            if (patten.test(input) && $this.index() < lens - 1) {
                $this
                .removeClass(warningCssClass)
                .next()
                .focus();
            }
            else if (patten.test(input) && $this.index() >= lens - 1) {
                $this
                .removeClass(warningCssClass);
            }
        })
        .focus(function (e) {
            //setFocus(e);
        })
        .keydown(function (e) {
            var $this = $(this),
                cursorPos = 0; //getPos(this);
            // Event handle
            if (!e) {
                e = window.event;
            };
            switch (e.keyCode) {
                case 8: //Backspace
                    if ($this.index() > 0) {
                        /*
                        if (cursorPos > 0) {
                        $this.val("").prev().focus();
                        }
                        else {
                        $this.prev().val("").focus();
                        }
                        */
                        $this.val("").prev().focus();
                    }
                    break;
                case 37: //Left
                    if ($this.index() > 0) {
                        /*
                        if (cursorPos <= 0) {
                        $this.prev().focus();
                        }
                        */
                        $this.prev().focus();
                    }
                    break;
                case 39: //Right
                    if ($this.index() < lens - 1) {
                        /*
                        if (cursorPos > 0) {
                        $this.next().focus();
                        }
                        */
                        $this.next().focus();
                    }
                    break;
                case 13: // Enter
                default:
                    return;
                    break;
            }
        });
    };
    function validInputs($letters) {
        var result = true;
        $letters.each(function (i, e) {
            var letter = e.value;
            if (!patten.test(letter)) {
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
            this.$inputs = $inputs;
            this.$letters = $html.find("input.gw-input-letter");
            this.$explist = $html.find("ul");

            keySupport($inputs);
            $container.empty().append($html);
        },
        "hint": function () {
            var hintIndex = gethint(word),
                index;
            for (var i = 0, lens = hintIndex.length; i < lens; i++) {
                index = hintIndex[i];
                this.$letters[index].value = word[index];
            }
        },
        "help": function (content) {
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
            var guessWord;
            if (validInputs(this.$inputs)) {
                guessWord = getInputs(this.$letters);
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