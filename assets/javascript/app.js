
var questions = [{
    "question": "What is the largest non-continental island in the world?",
    "option1": "Greenland",
    "option2": "New Guinea",
    "option3": "Borneo",
    "option4": "Madagascar",
    "answer": "1",
  },
  {
    "question": "What is the name of the capital of Turkey?",
    "option1": "Indonesia",
    "option2": "Malaysia",
    "option3": "Singapore",
    "option4": "Thailand",
    "answer": "2",
  },
  {
    "question": "Which of these is NOT an island that is part of the Philippines?",
    "option1": "Mindanao",
    "option2": "Luzon",
    "option3": "Java",
    "option4": "Palawan",
    "answer": "3",
  },
  {
    "question": "What event led to Liechenstein adding a crown to its flag?",
    "option1": "Coronation of Prince Johann I Joseph in 1805",
    "option2": "Charles VI&#039;s decree in 1719",
    "option3": "Signing of the 1862 Constitution of Liechtenstein",
    "option4": "The 1936 Olympics",
    "answer": "4",
  }
];

var currentQuestion = 0;
var correctAnswers = 0;
var inCorrectAnswers = 0;
var unAnswered = 0;
var totalQuestions = questions.length;
var intervalId;
var clockRunning = false;
var time = 0;
var input = ["1", "2", "3", "4"];
var value = ["1", "2", "3", "4"];
var label = ["1", "2", "3", "4"];
var spanId = ["opt1", "opt2", "opt3", "opt4"];

// STARTING DIV
$("<div>").addClass("container bg-warning container-style").attr('id', 'starting-div').html("<h1>Trivia Game</h1>").appendTo("#main-container");
$("<button>").text("Start").addClass("start_btn btn btn-dark btn-block p-4").appendTo("#starting-div");

$("<div>").addClass("container bg-warning container-style").attr('id', 'game-div').css('display', 'none').appendTo("#main-container");
$("#game-div").html("<h1>Trivia Game</h1> <h2>00:00</h2>");
$("#game-div h2").attr('id', 'display');
$("<div>").addClass("question").attr('id', 'question').appendTo("#game-div");

$.each(input, function(i, int){
var inputFor = $("<input type='radio' name='option'>").addClass("btn").val(value[i]);
$("<label>").addClass("option btn btn-dark p-2 m-2").html(inputFor).attr('id', spanId[i]).appendTo("#game-div");
});

$("<div>").addClass("container bg-warning container-style result").attr('id', 'result-div').css('display', 'none').appendTo("#main-container");

$(document).ready(function(){
  // $('.start_ btn').on('click', function(){}); p-2
  $('#main-container').on("click",".start_btn", function(){
    $("#starting-div").css('display', 'none');
    $("#game-div").css('display', '');
    var currentQuestion = loadQuestion(0);
  });

  function loadQuestion (questionIndex){
    startTimer();
    var q = questions[questionIndex];
    $('#main-container').find('.question').text((questionIndex + 1) + ". " + q.question);
    $("#opt1").append(q.option1);
    $("#opt2").append(q.option2);
    $("#opt3").append(q.option3);
    $("#opt4").append(q.option4);
  };

  $("input[type='radio']").on("click", function loadNextQuestion(){
      var radioValue = $("input[name='option']:checked").val();

    if(questions[currentQuestion].answer == radioValue){
      correctAnswers += 1;
      //alert("Correct Answers: " + correctAnswers);
    } else {
      inCorrectAnswers += 1;
      //alert("Incorrect Answers: " + inCorrectAnswers);
    }

    currentQuestion++;
    if(currentQuestion == totalQuestions){
      $("#game-div").css('display', 'none');
      $("#result-div").css('display', '');
      $("#result-div").append("Correct Answers: " + correctAnswers + " ");
      $("#result-div").append("Incorrect Answers: " + inCorrectAnswers);
      return;
    }
    loadQuestion(currentQuestion);
  });



  function startTimer(){
    if(!clockRunning){
      intervalId = setInterval(countTime, 1000);
      clockRunning = true;
    }
    function reset(){
      time = 0;
    }
  function countTime(){
      time++;
      var newTime = timeConverter(time);
      $("#display").text(newTime);
       if (time === 05){
          reset();
        }

    }
    function stop (){
      clearInterval(intervalId);
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
  }

});
