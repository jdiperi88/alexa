// "use strict";

// var Alexa = require("alexa-sdk");

// var flashcardsDictionary = [
// 	{
// 		question: "How do you find the length of a string?",
// 		rubyAnswer: "length",
// 		pythonAnswer: "len",
// 		javascriptAnswer: "length"
// 	},
// 	{
// 		question: "How do you print to the console or terminal?",
// 		rubyAnswer: "puts",
// 		pythonAnswer: "print",
// 		javascriptAnswer: "console.log"
// 	},
// 	{
// 		question: "Are the boolean terms true and false capitalized or lowercase?",
// 		rubyAnswer: "lowercase",
// 		pythonAnswer: "capitalized",
// 		javascriptAnswer: "lowercase"
// 	}
// ];

// var DECK_LENGTH = flashcardsDictionary.length;

// var handlers = {
// 	// Open Codecademy Flashcards
// 	LaunchRequest: function() {
// 		this.attributes["language"] = "";
// 		this.attributes["numberCorrect"] = 0;
// 		this.attributes["currentFlashcardIndex"] = 0;
// 		this.response
// 			.listen(
// 				"Welcome to Flashcards. In this session, do you want to test" +
// 					" your knowledge in Ruby, Python, or Javascript?"
// 			)
// 			.speak("Which language would you like to practice?");
// 		this.emit(":responseReady");
// 	},

// 	SetMyLanguageIntent: function() {
// 		this.attributes[
// 			"language"
// 		] = this.event.request.intent.slots.languages.value;

// 		if (this.attributes["language"] === "JavaScript") {
// 			this.attributes["language"] = "javascript";
// 		}

// 		var language = this.attributes["language"];
// 		console.log(language);
// 		console.log(this.event.request);
// 		this.response
// 			.speak(
// 				"Okay, I will ask you some questions about " +
// 					language +
// 					". Here is your first question. " +
// 					AskQuestion(this.attributes)
// 			)
// 			.listen(AskQuestion(this.attributes));

// 		this.emit(":responseReady");
// 	},

// 	// User gives an answer
// 	AnswerIntent: function() {
// 		var userAnswer = this.event.request.intent.slots.answer.value;
// 		var language = this.attributes["language"];
// 		var languageAnswer = language + "Answer";
// 		var currentFlashcardIndex = this.attributes["currentFlashcardIndex"];
// 		var correctAnswer =
// 			flashcardsDictionary[currentFlashcardIndex][languageAnswer];

// 		if (userAnswer === correctAnswer) {
// 			this.attributes["numberCorrect"]++;
// 			var numberCorrect = this.attributes["numberCorrect"];
// 			this.attributes["currentFlashcardIndex"]++;
// 			this.response
// 				.speak(
// 					"Nice job! The correct answer is " +
// 						correctAnswer +
// 						". You " +
// 						"have gotten " +
// 						numberCorrect +
// 						" out of " +
// 						DECK_LENGTH +
// 						" " +
// 						language +
// 						" questions correct. Here is your next question. " +
// 						AskQuestion(this.attributes)
// 				)
// 				.listen(AskQuestion(this.attributes));
// 		} else {
// 			var numberCorrect = this.attributes["numberCorrect"];
// 			this.attributes["currentFlashcardIndex"]++;
// 			this.response
// 				.speak(
// 					"Sorry, the correct answer is " +
// 						correctAnswer +
// 						". You " +
// 						"have gotten " +
// 						numberCorrect +
// 						" out of " +
// 						DECK_LENGTH +
// 						" " +
// 						language +
// 						" questions correct. Here is your next question. " +
// 						AskQuestion(this.attributes)
// 				)
// 				.listen(AskQuestion(this.attributes));
// 		}

// 		this.emit(":responseReady");
// 	},

// 	// Stop
// 	"AMAZON.StopIntent": function() {
// 		this.response.speak("Ok, let's play again soon.");
// 		this.emit(":responseReady");
// 	},

// 	// Cancel
// 	"AMAZON.CancelIntent": function() {
// 		this.response.speak("Ok, let's play again soon.");
// 		this.emit(":responseReady");
// 	}
// };

// // Test my {language} knowledge
// var AskQuestion = function(attributes) {
// 	var language = attributes["language"];
// 	var currentFlashcardIndex = attributes["currentFlashcardIndex"];

// 	if (currentFlashcardIndex >= flashcardsDictionary.length) {
// 		return "No questions remaining";
// 	} else {
// 		var currentQuestion = flashcardsDictionary[currentFlashcardIndex].question;
// 		return "In " + language + ", " + currentQuestion;
// 	}
// };

// exports.handler = function(event, context, callback) {
// 	var alexa = Alexa.handler(event, context, callback);
// 	alexa.registerHandlers(handlers);
// 	alexa.execute();
// };

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
