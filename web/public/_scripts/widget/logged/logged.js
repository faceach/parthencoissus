define(["jquery", "context", "score", "widget/start/start", "widget/invited/invited","widget/setting/main", "doT", "text!./template.html", "roundoff"],
function ($, Context, score, start, invited, setting, doT, template, roundoff) {
    "use strict";

    return function ($container) {


        var doTemp = doT.template(template),
			$html = $(doTemp(Context.get())),
            $progress = $html.find(".gw-progress"),
            $main = $html.find(".gw-main"),
            $settingMain = $html.find(".gw-setting-main");

        score.get($progress);
        start($main);
        invited.init($main);

        $html.on("click", "[data-action='showsetting']", function(e){
            e.preventDefault();
            if($(this).attr("data-checked") == 0){
                $(this).attr("data-checked", 1);
                setting($settingMain, "show");
            }else{
                $(this).attr("data-checked", 0);
                setting($settingMain, "hide");
            }
            
        });

        $container.html($html);

        roundoff();

    };

});
