"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
	LaunchRequest: function() {
		this.response
			.speak("Hello, what do you think is the world's most popular sport?")
			.listen(
				"I am sorry, I didn't get that. What is your favorite programming language?"
			);
		this.emit(":responseReady");
	},

	LanguageIntent: function() {
		this.response.speak(
			" Hello, what do you think is the world's most popular sport?"
		);
		this.emit(":responseReady");
	},
	// LanguageIntent: function() {
	// 	this.response.speak(
	// 		" Hello, what do you think is the world's most popular sport?"
	// 	);
	// 	this.emit(":responseReady");
	// },
	OrderIntent: function() {
		this.response.speak(`Alrighty, good bye. `);
		this.emit(":responseReady");
	},
	MostPopularSportIntent: function() {
		console.log(this.event.request.intent.slots.sport.value);
		var worldSport = this.event.request.intent.slots.sport.value;
		if (worldSport === "soccer") {
			this.response.speak("Correct! Soccer is the world's most popular sport.");
		} else {
			this.response.speak(
				"You guessed that " +
					worldSport +
					" is the most popular. Actually, soccer is the world's most popular sport"
			);
		}
		this.emit(":responseReady");
	},
	ChildIntent: function() {
		var favoriteChild = this.event.request.intent.slots.child.value;
		if (favoriteChild === "joey") {
			this.response.speak("Correct! Joey is Maura Casey's favorite son");
		} else {
			this.response.speak(
				"You guessed that Maura Casey's favorite son is " +
					favoriteChild +
					". Actually, Joey is the Maura's favorite"
			);
		}
		this.emit(":responseReady");
	}
};

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};
