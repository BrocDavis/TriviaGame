var questions = ["which pokemon is in the Pokedex as #1?", "What Pokeball allows you to guarantee capture or any pokemon?"];
var correctAnswer = ["Bulbasaur", "Master Ball"];
var wrongAnswer = ["wrong"];
var correctCount = 0;
var wrongCount = 0;
var gameEnd = false;

showStuff();
// setTimeout(hideStuff, 500);
hideTitle();

function hideTitle(){
$(".title").hide();//hide title
}
function hideStuff() {
    $("input").hide();//hides radio buttons
    $(".question").hide();//hides the question
}

function showQuestion() {
    $("input").show();
    $(".question").show();
}
function showQuestions(){
    for (var i = 0; i < questions.length; i++) {
        if(gameEnd != false){
            setTimeout()
        }
        else {
            $(".correct-count").append(correctCount);
            $(".wrong-count").append(wrongCount);
        }
    }
}

function questionTimer() {
    showQuestions();
}

