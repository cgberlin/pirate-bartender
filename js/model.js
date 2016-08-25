
var questionCount = 0;


var createQuestions = function(questions) {
  this.questions = questions;
};

var createIngredients = function(ingredients) {
  this.ingredients = ingredients;
}

var createPantry = function(strong, salty, bitter, sweet, fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

var userPreferences = {
  strong : '',
  salty : '',
  bitter : '',
  sweet : '',
  fruity : ''
}
