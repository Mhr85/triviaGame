// GLOBAL VAR
var correctAnswers
var inCorrectAnswers
var unAnswered
var intervalId
var clockRunning = false;
var time = 0;
// STARTING DIV
window.onload = function(){
var startButton = $("<button></button>");
startButton.text("Start");
startButton.addClass("btn btn-dark btn-block p-4");
$("#starting-div").html("<h1>Trivia Game</h1>")
$("#starting-div").append(startButton);
$(".btn").on("click", startTimer);

};

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
