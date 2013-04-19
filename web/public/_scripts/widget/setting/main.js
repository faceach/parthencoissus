define(["jquery", "context", "text!./template.html", "roundoff"],
function ($, Context, template, roundoff) {
    "use strict";

    gwRouter.route("setting", "setting", function () {
        console.log("#setting");
    });

    return function ($container) {
        location.hash = "setting";

        var $html = $(template);
        
        $html.on("click", "[data-action='savesettings']", function(e){
            e.preventDefault();
            $html.find('a[data-action="savesettings"]').removeClass("gw-category-active");
            $(this).addClass("gw-category-active");
            var category = $(this).attr("data-category");
            $.extend(Context.get(), {"category": category});
            console.log(Context.get());
            location.hash = "start";
        });

        $container.empty().append($html);
        roundoff();

    };

});
