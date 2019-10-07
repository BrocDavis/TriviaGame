var questions = [{
    question: "which pokemon is in the Pokedex as #1?",
    answer: ["Bulbasaur", "Mew", "Arceus", "Rhyhorn"],
    correct: "Bulbasaur",
},
{
    question: "What Pokeball allows you to guarantee capture of any pokemon?",
    answer: ["Master Ball", "Great Ball", "Heavy Ball", "Premier Ball"],
    correct: "Master Ball",
},
{
    question: "Each game has you choosing one of three starter pokemon. Which one of the following is not a type you can pick?",
    answer: ["Fire", "Water", "Grass", "Wind"],
    correct: "Wind",
}];

var correctCount = 0;
var wrongCount = 0;
var gameEnd = false;

hideStuff();

function hideTitle() {
    $(".title").hide();//hide title
}
function hideStuff() {
    $("input").hide();//hides radio buttons
    $(".question").hide();//hides the question
    $(".results").hide();//hides results
    $(".wrong-guess").hide();//hides wrong guess
    $(".correct-guess").hide();//hides correct guess
}

function showQuestion(index) {
    $("input").show();
    $(".question").show();
    $(".answer1").text(questions[index].question)
}

function showResults() {
    $(".results").show();
    $(".correct-count").text("Correct answers: " + correctCount);
    $(".wrong-count").text("Wrong answers: " + wrongCount);
}

function wrongGuess(){
    $("wrong-guess").show();
}

function correctGuess(){
    $("correct-guess").show();
}

function showQuestions() {

    showResults();
    stopTimer();//stop timer at results screen
}

var startTimer = setInterval(function(){
 var seconds = seconds - 1;
 $("#count").innerhtml("time left: " + seconds);

 if (seconds <= 0){
     wrongGuess();
     wrongCount++;
 }
},1000);

function setTimer(){
    
}

function stopTimer(){
    clearInterval(startTimer);
}


// start of game on click of h3 tag
$(".start-button").on("click", function () {
    hideTitle();
    hideStuff();
    showQuestions();
    startTimer();
});