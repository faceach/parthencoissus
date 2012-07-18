"use strict";

define(["jquery"], function ($) {

    var url = "../_data/matchpartner.txt";

    return function (userid, callback) {

        $.ajax({
            url: url,
            data: userid,
            dataType: 'json',
            cache: false,
            success: function (data) {
                var score,
                    max = data.length,
                    randomNum;

                do {
                    randomNum = parseInt(Math.random() * max);
                }
                while (data[randomNum].userid === userid)
                console.log("partner:");
                console.log(data[randomNum]);
                callback(data[randomNum]);
            },
            error: function (e) {
                console.log(e);
            }
        });

    };

});
