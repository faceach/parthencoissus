"use strict";

define(["jquery", "context", "msghandler", "matchpartner"],
function ($, Context, MsgHandler, matchpartner) {

    return function ($guess, $answer) {
        if ($guess === $answer) {
            return true;
        } else {
            return false;
        }
    };

});