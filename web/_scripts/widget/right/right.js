"use strict";

<<<<<<< HEAD
define(["jquery", "doT", "text!./template.html", "msghandler", "roundoff"],
=======
define(["jquery", "doT",  "text!./template.html", "msghandler", "roundoff"],
>>>>>>> 48fc0cbadd78485e688a677b8062f734aeda38c0
function ($, doT, template, MsgHandler, roundoff) {

	var $container = $("#gw-main"),
		msgHandler = new MsgHandler;

	function handleSuccess(data) {
		var $html = $(template),
			doTemp = doT.template(template);

<<<<<<< HEAD
        $container.empty().html(doTemp(data));
        roundoff();
    }
=======
		$container.empty().html(doTemp(data));
		answer = msg.content.word;
		btnClickHandler();
		autoSkip();
		roundoff();
	}
>>>>>>> 48fc0cbadd78485e688a677b8062f734aeda38c0

	return function () {
		msgHandler.listen("success", handleSuccess);
	};

});
