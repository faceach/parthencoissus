"use strict";

define(["jquery", "doT", "getwordexplanation", "text!./template.html", "roundoff"],
function ($, doT, getwordexplanation, template, roundoff) {

    var $container;

    function successCallback(data) {
        var doTemp = doT.template(template);
        $container.empty().html(doTemp(data));
        roundoff();
    };

    var Word = function (word) {
        this.word = word;
    };

    Word.prototype = {
        "display": function ($el) {
            if (!$container) {
                $container = $el;
            }
            if (this.word) {
                getwordexplanation(this.word, {
                    "success": successCallback
                });
            }
            else {
                getwordexplanation({
                    "success": successCallback
                });
            }
        }
    };

    return Word;

});
