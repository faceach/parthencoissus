define(["jquery", "context", "score", "widget/start/start", "widget/invited/invited","widget/setting/main", "doT", "text!./template.html", "roundoff"],
function ($, Context, score, start, invited, setting, doT, template, roundoff) {
    "use strict";

    return function ($container) {


        var doTemp = doT.template(template),
			$html = $(doTemp(Context.get())),
            $progress = $html.find(".gw-progress"),
            $main = $html.find(".gw-main");

        score.get($progress);
        start($main);
        invited.init($main);

        $html.on("click", "[data-action='showsetting']", function(e){
            e.preventDefault();
            setting($main);
        });

        $container.html($html);

        roundoff();

    };

});
