define(["jquery", "context", "text!./template.html", "roundoff"],
function ($, Context, template, roundoff) {
    "use strict";

    // gwRouter.route("setting", "setting", function () {
    //     console.log("#setting");
    // });

    return function ($container, status) {
        // location.hash = "setting";

        var $html = $(template);
        
        $html.on("click", "[data-action='savesettings']", function(e){
            e.preventDefault();
            var category = $(this).attr("data-category");
            $.extend(Context.get(), {"category": category});
            console.log(Context.get());
           $container.hide("fast");

        });

        $container.empty().append($html);
        if(status == "show"){
            $container.show("fast");    
        }else{
            $container.hide("fast");
        }
        
        roundoff();

    };

});
