"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
	LaunchRequest: function() {
		this.response
			.speak("What is your favorite progamming language?")
			.listen(
				"I am sorry, I didn't get that. What is your favorite programming language?"
			);
		this.emit(":responseReady");
	},

	LanguageIntent: function() {
		this.response.speak("That is a great language.?");
		this.emit(":responseReady");
	},
	OrderIntent: function() {
		this.response.speak(`Alrighty, good bye. `);
		this.emit(":responseReady");
	}
};

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};
