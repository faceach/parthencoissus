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
            var category = $html.find('input:radio[name=optionsRadios]:checked').val();
            $.extend(Context.get(), {"category": category});
            console.log(Context.get());
            location.hash = "start";
        });

        $container.empty().append($html);
        roundoff();

    };

});
