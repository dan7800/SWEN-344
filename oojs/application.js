
// Die object: represents a singular die with a value
var Die = function() {}
// Changes the text inside a die to the randomized value
Die.roll = function(die) {
  var newValue = Math.floor((Math.random()*6)+1);
  $(die).text(newValue);
}

// Dice object: represents a list of dice
var Dice = function() {
  // Initializing the list of dice
  Dice.diceList = [];

};

// Add function: adds a new Die to the die list
Dice.prototype.add = function() {
  // Create a new die
  var newDie  = new Die();
  // Add it to the list
  Dice.diceList.push(newDie);
  // Add it to the HTML
  $('.dice').append('<div class="die">0</div>');
}
// RollDice function: Rolls all dice in the list
Dice.prototype.rollDice = function() {
  $('.die').each(function(k, die) {
    Die.roll(die);
  });
}

// Functions called when the document is loaded
$(document).ready(function() {
  // Create a new list of dice
  var dice = new Dice()
  // When the add button is clicked, call the add function
  $('#roller button.add').on('click', dice.add);
  // When the roll button is clicked, call the roll function
  $('#roller button.roll').on('click', dice.rollDice);
});
