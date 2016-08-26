
$(document).ready(function(){
  loadQuestion();
});

var questionsToAsk = new createQuestions(['Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?']);
var ingredients = new createIngredients(['Strong', 'Salty', 'Bitter', 'Sweet', 'Fruity']);
var pantry = new createPantry(['Glug of Rum', 'Slug of Whisky', 'Splash of Gin'], ['Olive on a Stick', 'Salt-Dusted Rim', 'Rasher of Bacon'], ['Shake of Bitters', 'Splash of Tonic', 'Twist of Lemon Peel'], ['Sugar Cube', 'Spoonful of Honey', 'Splash of Cola'], ['Slice of Orange', 'Dash of Cassis', 'Cherry on Top']);

function loadQuestion(){
  $('#questions').text(questionsToAsk.questions[questionCount]);
};

$('.answer').on('click', function(){
  var yesOrNo = $(this).text();
  switch(questionCount){
    case 0:
      userPreferences.strong = yesOrNo;
      questionCount++;
      loadQuestion();
      break;
    case 1:
      userPreferences.salty = yesOrNo;
      questionCount++;
      loadQuestion();
      break;
    case 2:
      userPreferences.bitter = yesOrNo;
      questionCount++;
      loadQuestion();
      break;
    case 3:
      userPreferences.sweet = yesOrNo;
      questionCount++;
      loadQuestion();
      break;
    case 4:
      userPreferences.fruity = yesOrNo;
      questionCount++;
      hideEverything();
      bartender.mixDrink();
      break;
    default:
      console.log('error with switch and counter');
  }
});

function hideEverything(){
  $('#questions').text('');
  $('.buttons').hide();
};

function tellPicky(){
  $('#questions').text("Can't be so picky matey!!!");
};

function displayDrink(Ingredients) {
  var cocktail = randomCocktail();
  $('#questions').text("I made ye a " + ' ' + cocktail);
  $.each(Ingredients, function(index, value){
    $('#questions').append('<br> - ' + value);
  });
};

function randomCocktail(){
  var firstName = ['Salty', 'Purple', 'Pirate', 'Fluffy', 'Prickly', 'Sticky'];
  var secondName = ['Porcupine', 'Sword', 'Fish', 'Ship', 'Sabre', 'Pontoon'];
  var randomNumber = createRandom(firstName);
  var randomNumberTwo = createRandom(secondName);
  var cocktailMade = randomNumber + ' ' + randomNumberTwo;
  return cocktailMade;
}
