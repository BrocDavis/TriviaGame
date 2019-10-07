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
    correct: "Electric",
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
    $(".results").hide();
}

function showQuestion() {
    $("input").show();
    $(".question").show();
}

function showResults(){
    $(".results").show();
    $(".correct-count").append(correctCount);
    $(".wrong-count").append(wrongCount);
}

function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
        if (gameEnd != false) {
            setTimeout()
        }
        else {

        }
    }
}

function questionTimer() {
    showQuestions();
}
// start of game on click of h3 tag
$("#start-button").on("click", function () {
    hideTitle();
    showQuestions();
});