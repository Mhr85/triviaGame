 # triviaGame

html
create container-fluid in body
give it a class of = "bg-dark"
create a inner container (which will hold the entire game)
give it a class of = "bg-warning"

create global vars
var correctAnswer
var inCorrectAnswer
var unAnswered

start button to start the game
create a div in jQuery
append a button to that div
give that button an id of btn
create an on click event for the start button to run the startGame button


<!-- QUESTIONS FOR TA -->
<!-- 1. What code do I put inside the document.ready function -->


create one object with Q1. with question = ["question?"], answer = ["0", "1", "2", "3"], result = [first array is an correct answer], call the object and save the correct answer in a var temp

use javascript array shuffle random for the answers


create div for each questions
add h3 for each questions
label for radio buttons
append radio buttons to that div



var triviaQuestions = {
  var questions = [
    "Agent 007, featured in many movies dating back to 1962, is known as _______ Bond?",
    "What plant is traditionally the primary ingredient in wine?",
],



    option:  [
      "John",
      "Benedict",
      "James",
      "Elizier",
    ],
    Answer: "James",



    options: [
      "Agave",
      "Grape",
      "Peach",
      "Plum",
    ],
    Answer: "Grape",

}


// var divOne = $("<div></div>");
// divOne.addClass("container bg-warning container-style");
// divOne.attr('id', 'starting-div');
// $("#main-container").append(divOne);
// var startButton = $("<button></button>");
// startButton.text("Start");
// startButton.addClass("btn btn-dark btn-block p-4");
// $("#starting-div").append(startButton);


// var divTwo = $("<div></div>");
// divTwo.addClass("container bg-warning container-style");
// divTwo.attr('id', 'game-div');
// $("#main-container").append(divTwo);


// var divThree = $("<div></div>");
// divThree.addClass("container bg-warning container-style");
// divThree.attr('id', 'result-div');
// $("#main-container").append(divThree);
// $("#result-div").html("<h1>Trivia Game</h1>");



// $.each(questions, function(i, qtn){
//   $("<h3></h3>").text(questions1).appendTo("#game-div");
//   var createForm = $("<form class='trivia-form'></form>").appendTo("#game-div");
//   // createForm.attr('id', 'trivia-game');
//   $("<label></label>").text(options[i]).appendTo(".trivia-form");
//   // $("<input type='radio'>").text(options[i]).appendTo(".trivia-form");
// });



// $(".q-1").append(triviaQuestions.questionOne);
//   for(var i = 0; i < triviaQuestions.optionsOne.length; i++){
//     $('<input type="radio" name="radioButton" class="radio-1">').appendTo(".frm");
//     $("<label></label>").text(triviaQuestions.optionsOne[i]).appendTo(".frm");
//   }
