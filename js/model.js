
var questionCount = 0;


var createQuestions = function(questions) {
  this.questions = questions;
};

var createIngredients = function(ingredients) {
  this.ingredients = ingredients;
};

var createPantry = function(strong, salty, bitter, sweet, fruity) {
  this.strong = strong,
  this.salty = salty,
  this.bitter = bitter,
  this.sweet = sweet,
  this.fruity = fruity
};

var userPreferences = {
  strong : '',
  salty : '',
  bitter : '',
  sweet : '',
  fruity : ''
};

var bartender = {
  mixDrink : function() {
    var createdDrink = [];
    var created = '';
    if (userPreferences.strong == 'Yes'){
      created = createRandom(pantry.strong);
      createdDrink.push(created);
    };
    if (userPreferences.salty == 'Yes'){
      created = createRandom(pantry.salty);
      createdDrink.push(created);
    };
    if (userPreferences.bitter == 'Yes'){
      created = createRandom(pantry.bitter);
      createdDrink.push(created);
    };
    if (userPreferences.sweet == 'Yes'){
      created = createRandom(pantry.sweet);
      createdDrink.push(created);
    };
    if (userPreferences.fruity == 'Yes'){
      created = createRandom(pantry.fruity);
      createdDrink.push(created);
    };
    if (createdDrink.length == 0){
      tellPicky();
    }
    console.log(createdDrink);
    displayDrink(createdDrink);
  },
};

function createRandom(array){
  var randomMade = array[Math.floor(Math.random() * array.length)];
  return randomMade;
};
