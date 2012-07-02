"use strict";

define(["_lib/jquery/jquery.mousewheel"], function () {

    return function ($els) {

        if ($els.length <= 0) {
            return;
        }

        $els.each(function (i, el) {

            var $el = $(el),
                height = el.clientHeight,
		        scrollHeight = el.scrollHeight;

            $el.bind('mousewheel', function (event, delta) {
                if ((this.scrollTop === (scrollHeight - height) && delta < 0) || (this.scrollTop === 0 && delta > 0)) {
                    event.preventDefault();
                }
            });

        });

    };

});
