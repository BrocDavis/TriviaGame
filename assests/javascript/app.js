var questions = ["which pokemon is in the Pokedex as #1?", "What Pokeball allows you to guarantee capture or any pokemon?"];
var questionAnswer = ["Bulbasaur","Master Ball"];
var correctCount = 0;
var wrongCount = 0;




hideStuff();

console.log(questions[0]);


function hideStuff(){
    $("input").hide();
    $(".question").hide();
}

function showStuff(){
    $("input").show();
    $(".question").show();
}
