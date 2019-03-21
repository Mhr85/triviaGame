// GLOBAL VAR
var correctAnswers
var inCorrectAnswers
var unAnswered
var intervalId
var clockRunning = false;
var time = 0;
// STARTING DIV
// window.onload = function(){
var divOne = $("<div></div>");
divOne.addClass("container bg-warning container-style");
divOne.attr('id', 'starting-div');
$("#main-container").append(divOne);

var divTwo = $("<div></div>");
divTwo.addClass("container bg-warning container-style");
divTwo.attr('id', 'game-div');
$("#main-container").append(divTwo);
$("#game-div").html("<h1>Trivia Game</h1> <h2>00:00</h2> <p class='q-1'></p> <br> <p class='q-2'></p>");
$("#game-div h2").attr('id', 'display');



var divThree = $("<div></div>");
divThree.addClass("container bg-warning container-style");
divThree.attr('id', 'result-div');
$("#main-container").append(divThree);
$("#result-div").html("<h1>Trivia Game</h1>");

var startButton = $("<button></button>");
startButton.text("Start");
startButton.addClass("btn btn-dark btn-block p-4");
$("#starting-div").html("<h1>Trivia Game</h1>");
$("#starting-div").append(startButton);
$(".btn").on("click", startTimer);
// $("#starting-div").hide();
// startTimer();
// };


// function startTheGame(){
  function startTimer(){
    if(!clockRunning){
      intervalId = setInterval(countTime, 1000);
      clockRunning = true;
    }
  }

  function countTime(){
    time++;
    var newTime = timeConverter(time);
    // $("#starting-div h1").text(newTime);
    // $("#game-div").text("<h1>Trivia Game</h1>");
    $("#display").text(newTime);
  }

  function timeConverter(t){
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes === 0){
      minutes = "00";
    }
    else if(minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
// }

var triviaQuestions = {
  questionOne: "You should eat fruits and vegetables because",
  optionsOne: [
    "They contain fiber, which helps keep your digestive system healthy",
    "They give you energy",
    "They contain vitamins and minerals that help you stay healthy",
    "All of the above",
  ],
  correctAnswer: "All of the above",

  questionTwo: "More than 250 different kinds of fruit and vegetables are grown in California. However, a few fruits and vegetables require a more tropical environment to grow. Which fruit is not grown very often in California?",
  optionsTwo: [
    "banana",
    "plum",
    "grape",
    "strawberry",
  ],

}

$(".q-1").append(triviaQuestions.questionOne);
for(var i = 0; i < triviaQuestions.optionsOne.length; i++){
  $('<input type="radio" name="radioButton" class="radio-1"/>').appendTo("#game-div");
  $("input:radio").text(triviaQuestions.optionsOne[0]);
}


$(".q-2").append(triviaQuestions.questionTwo);
for(var i = 0; i < triviaQuestions.optionsTwo.length; i++){
  $('<input type="radio" name="radioButton" class="radio-1"/>').appendTo("#game-div");
  $("input:radio").text(triviaQuestions.optionsOne[0]);
}
