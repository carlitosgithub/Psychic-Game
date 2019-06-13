
//place holders
var letters = ["a", "b", "c"];

// var definition
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

//Functions
var updateGuessesLeft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
   letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase letters
  var letter = event.key.toLowerCase();

   guessedLetters.push(letter);
 
  updateGuessesLeft();
  updateGuessesSoFar();

    if (letter === letterToGuess) {
     
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    
     reset();
     }
     
    if (guessesLeft === 0) {

      losses++;
      document.querySelector("#losses").innerHTML = losses;
      reset();
    }
};