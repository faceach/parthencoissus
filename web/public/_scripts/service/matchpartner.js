define(["jquery"], function ($) {
    "use strict";

    var url = "../_data/matchpartner.txt";

    return function (username, callback) {

        function matchPartner(data) {
            var score,
            max = data.length,
            randomNum;
            if (max > 1) {
                do {
                    randomNum = parseInt(Math.random() * max);
                }
                while (data[randomNum].username === username)
                console.log("partner:");
                console.log(data[randomNum]);
                callback(data[randomNum]);
            }
            else {
                alert("No partner now!");
            }
        };

        matchPartner(onlineUsers);

    };

});
