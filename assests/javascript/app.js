var questions = [{
    question: "which pokemon is in the Pokedex as #1?",
    answer: ["Bulbasaur", "Mew", "Arceus", "Rhyhorn"],
    correct: "Bulbasaur"
},
{
    question: "What Pokeball allows you to guarantee capture of any pokemon?",
    answer: ["Master Ball", "Great Ball", "Heavy Ball", "Premier Ball"],
    correct: "Master Ball"
},
{
    question: "Each game has you choosing one of three starter pokemon. Which one of the following is not a type you can pick?",
    answer: ["Fire", "Water", "Grass", "Wind"],
    correct: "Wind"
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

function wrongGuess() {
    $("wrong-guess").show();
}

function correctGuess() {
    $("correct-guess").show();
}

function showQuestions() {

    showResults();
    // stopTimer();stop timer at results screen
}

//this is the start of the timer that would count and keep track of the time left for each question.
//after its implementation. I would then set this to call each question through a for loop referencing
//the questions object and comparing the value of the correct answer which would trigger correct or wrong
// guess functions. 

// var seconds = 15;
// var startTimer = setInterval(function () {
//     seconds = seconds - 1;
//     $("#count").innerHTML("time left: " + seconds);

//     if (seconds <= 0) {
//         clearInterval(startTimer);
//         wrongCount++;
//     }
// }, 1000);

// start of game on click of h3 tag
$(".start-button").on("click", function () {
    hideTitle();
    hideStuff();
    showQuestions();
    // startTimer();
});