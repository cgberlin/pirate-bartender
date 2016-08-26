
var questionCount = 0;

var createQuestions = function(Questions) {
  this.questions = Questions;
};

var createIngredients = function(Ingredients) {
  this.ingredients = Ingredients;
};

var createPantry = function(Strong, Salty, Bitter, Sweet, Fruity) {
  this.strong = Strong,
  this.salty = Salty,
  this.bitter = Bitter,
  this.sweet = Sweet,
  this.fruity = Fruity
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

function createRandom(TheArray){
  var randomMade = TheArray[Math.floor(Math.random() * TheArray.length)];
  return randomMade;
};
