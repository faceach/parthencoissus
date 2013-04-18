define(["jquery.mousewheel"], function () {
	"use strict";

	return function ($els) {

		if ($els.length <= 0) {
			return;
		}

		$els.each(function (i, el) {

			var $el = $(el),
				height = el.clientHeight,
				scrollHeight = el.scrollHeight;

			$el.unbind("mousewheel").bind("mousewheel", function (event, delta) {
				if ((this.scrollTop === (scrollHeight - height) && delta < 0) || (this.scrollTop === 0 && delta > 0)) {
					event.preventDefault();
				}
			});

		});

	};

});
