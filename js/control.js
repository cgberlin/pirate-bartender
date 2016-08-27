var gamePlayed = {};     //creates an empty object to be used to represent which game is chosen
var questionsToAskDrink = new createQuestions(['Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?']); //questions for bartender
var questionsToAskBurger = new createQuestions(['Do ye like meat?', 'Do ye like it with cheese?', 'Would ye like condiments?', 'Are ye a lubber who likes toppings?', 'Are ye one for something strange?']);  //questions for burger chef
var pantryDrink = new createPantry(['Glug of Rum', 'Slug of Whisky', 'Splash of Gin'],
                                    ['Olive on a Stick', 'Salt-Dusted Rim', 'Rasher of Bacon'],
                                    ['Shake of Bitters', 'Splash of Tonic', 'Twist of Lemon Peel'],                 //creates a new pantry with the ingredients for the bartender
                                    ['Sugar Cube', 'Spoonful of Honey', 'Splash of Cola'],
                                    ['Slice of Orange', 'Dash of Cassis', 'Cherry on Top']);
var pantryBurger = new createPantry(['Turkey Patty', 'Beef Patty', 'Chicken Breast'],
                                    ['Slice of Swiss', 'Block of Cheddar', 'Hunk of Pepperjack'],
                                    ['Glob of Mayo', 'Squirt of Mustard', 'Dollop of Ketchup'],                     //creates a new pantry with the ingredients for the burger chef
                                    ['Head of Lettuce', 'Spoonful of Relish', 'Half an Onion'],
                                    ['Fried Plantains', 'Hunk of Monkey Brains', 'Whole Turtle Egg']);
function loadQuestion(Question){                                                                                   //takes one argument to figure out which questions to load, then displays the next one in order
  $('#questions').text(Question.questions[questionCount]);
};

$('.buttons').on('click', '#bartender-game', function(){                                                           //listener for bartender button
  $('.which-game').hide();                                                                                         //hides the game buttons since game is already decided
  loadQuestion(questionsToAskDrink);                                                                               //loads the first question, and passes the drink game as argument
  $('.answer').show();                                                                                             //shows the yes and no answer buttons
  gamePlayed = {                                                                                                   //fills the gamePlayed object with the questions and pantry to load
    questions : questionsToAskDrink,
    pantry : pantryDrink
  };
});

$('.buttons').on('click', '#burger-game', function(){
  $('.which-game').hide();
  loadQuestion(questionsToAskBurger);
  $('.answer').show();
  gamePlayed = {
    questions : questionsToAskBurger,
    pantry : pantryBurger
  };
});


$('.buttons').on('click', '.answer', function(){                                                                    //listener for the yes and no answer buttons
  var yesOrNo = $(this).text();                                                                                     //gets the value of button pressed
  switch(questionCount){                                                                                            //checks to see how many questions have been answered, increments the counter each time, and loads the next question
    case 0:
      userPreferences.first = yesOrNo;
      questionCount++;
      loadQuestion(gamePlayed.questions);
      break;
    case 1:
      userPreferences.second = yesOrNo;
      questionCount++;
      loadQuestion(gamePlayed.questions);
      break;
    case 2:
      userPreferences.third = yesOrNo;
      questionCount++;
      loadQuestion(gamePlayed.questions);
      break;
    case 3:
      userPreferences.fourth = yesOrNo;
      questionCount++;
      loadQuestion(gamePlayed.questions);
      break;
    case 4:
      userPreferences.fifth = yesOrNo;
      questionCount++;
      hideEverything();                                                                                             //once all five are answered it hides everything, passes to the mixItem method
      mixer.mixItem();
      break;
    default:
      console.log('error with switch and counter');
  }
});

$('.main-container').on('click', '#reset-button', function(){                                                       //listener for the reset button
  resetGame();
});;

function hideEverything(){                                                                                          //hides everything
  $('#questions').text('');
  $('.buttons').hide();
};

function tellPicky(){                                                                                               //will display a message telling the user that they are too picky
  $('#questions').text("Can't be so picky matey!!!");
};

function displayItem(Ingredients) {
  var name = randomName();                                                                                          //calls the randomName function
  $('#questions').text("I made ye a " + ' ' + name);                                                                //displays the name of the item created with the randomName function
  $.each(Ingredients, function(index, value){                                                                       //appends all of the ingredients
    $('#questions').append('<br> - ' + value);
  });
  $('#reset-button').show();                                                                                        //displays the reset button
};

function randomName(){                                                                                              //will create a random name made up of an adjective and a noun
  var firstName = ['Salty', 'Purple', 'Pirate', 'Fluffy', 'Prickly', 'Sticky'];
  var secondName = ['Porcupine', 'Sword', 'Fish', 'Ship', 'Sabre', 'Pontoon'];
  var randomNumber = createRandom(firstName);
  var randomNumberTwo = createRandom(secondName);
  var nameMade = randomNumber + ' ' + randomNumberTwo;
  return nameMade;
};

function resetGame(){                                                                                               //function to reset the game
  questionCount = 0;
  $('.buttons').show();
  $('#questions').text('');
  $('.answer').hide();
  $('#reset-button').hide();
  $('.which-game').show();
};
