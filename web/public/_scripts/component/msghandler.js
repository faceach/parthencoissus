"use strict";

define(["msglistener", "underscore", "context"], function (msglistener, underscore, context) {

	var key = "guessword",
		regListener = [];

	var MsgHandler = function (args) {
	};

	MsgHandler.prototype = {
		"send": function (msg, callback) {

			localStorage.setItem(key, JSON.stringify(msg));

			console.log("msg[" + msg.type + "]:");
			console.log(msg);

			if(callback){
				callback();
			}
		},
		"listen": function (type, callback) {
			function handler() {
				var msg = JSON.parse(localStorage.getItem(key));
				if (msg && msg.type === type && msg.to.userid === context.get().userid) {
					console.log("listen", msg);
					callback(msg);
				}
			};
			if(underscore.intersection(regListener, [type]).length === 0){
				regListener.push(type);
				msglistener(handler);
			}
			
			return this;
		}
	};

	return MsgHandler;

});
