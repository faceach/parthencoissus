require(["jquery"], function($) {
    $(function() {

        $(".simulation").bind("scroll", function(e){

			e.preventDefault();
			return false;
		});
    });
});
