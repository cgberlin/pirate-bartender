
var questionCount = 0;                                                     //initializes the questionCount to 0

var createQuestions = function(Questions) {                                //constructor function for the question objects
  this.questions = Questions;
};

var createPantry = function(First, Second, Third, Fourth, Fifth) {        //constructor function for the pantry, takes five arguments
  this.first = First,
  this.second = Second,
  this.third = Third,
  this.fourth = Fourth,
  this.fifth = Fifth
};

var userPreferences = {                                                   //empty preferences object to store the users answers
  first : '',
  second : '',
  third : '',
  fourth : '',
  fifth : ''
};

var mixer = {
  mixItem : function() {                                                  //method to create a semi random item based on preferences
    var createdItem = [];                                                 //initializes an empty array to store the items chosen
    var created = '';
    if (userPreferences.first == 'Yes'){                                  //tests each property of the userPreferences object
      created = createRandom(gamePlayed.pantry.first);                    //if they answered yes, it picks a random item  and pushed it to the createdItem array
      createdItem.push(created);
    };
    if (userPreferences.second == 'Yes'){
      created = createRandom(gamePlayed.pantry.second);
      createdItem.push(created);
    };
    if (userPreferences.third == 'Yes'){
      created = createRandom(gamePlayed.pantry.third);
      createdItem.push(created);
    };
    if (userPreferences.fourth == 'Yes'){
      created = createRandom(gamePlayed.pantry.fourth);
      createdItem.push(created);
    };
    if (userPreferences.fifth == 'Yes'){
      created = createRandom(gamePlayed.pantry.fifth);
      createdItem.push(created);
    };
    if (createdItem.length == 0){                                          //tests to make sure the user didnt answer all no
      tellPicky();                                                         //if they did, calls the tellPicky function
    }
    else {                                                                 //displays the created item
      displayItem(createdItem);
    };
  },
};

function createRandom(TheArray){                                           //will create a random number that will be equal or less than the length of the array passed as argument
  var randomMade = TheArray[Math.floor(Math.random() * TheArray.length)];
  return randomMade;
};
