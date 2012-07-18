"use strict";

define(["jquery"], function ($) {

    var url = "../_data/getscore.txt";

    return function (userid, callback) {

        $.ajax({
            url: url,
            data: userid,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var score;
                for (var i = 0, lens = data.length; i < lens; i++) {
                    score = data[i];
                    if (score.userid === userid) {
                        callback(score);
                    }
                }
            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
