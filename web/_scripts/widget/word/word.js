"use strict";

define(["jquery", "backbone", "mustache", "getwordexplanation", "text!./template.html", "roundoff"],
function ($, Backbone, mustache, getwordexplanation, template, roundoff) {

    var $container;

    function successCallback(data) {
        var html = mustache.render(template, data);
        $container.empty().html(html);
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
