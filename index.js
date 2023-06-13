var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("whats' your name?");
console.log("Welcome " + userName);

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
  }
}

console.log("current score:", score);
console.log("-----");

var questionOne = {
  question: "Which movie is related to dreams?",
  answer: "Inception"
}

var questionTwo = {
  question: "Which movie is based on World War?",
  answer: "Dunkirk"
}

var questionThree = {
  question: "On based on which superhero, he has directed 3 movies?",
  answer: "Batman"
}

var questionFour = {
  question: "which is his upcoming movie?",
  answer: "Oppenheimer"

}


var questions = [questionOne, questionTwo, questionThree, questionFour];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! You scored: ", score);

