define(["jquery", "context", "score", "widget/start/start", "widget/invited/invited", "doT", "text!./template.html", "roundoff"],
function ($, Context, score, start, invited, doT, template, roundoff) {
    "use strict";

    return function ($container) {


        var doTemp = doT.template(template),
			$html = $(doTemp(Context.get())),
            $progress = $html.find(".gw-progress"),
            $main = $html.find(".gw-main");

        score.get($progress);
        start($main);
        invited.init($main);

        $container.html($html);

        roundoff();

    };

});
