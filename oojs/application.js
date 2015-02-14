/********* OO Code *********/
var Die = function() {
  // Create a new die on the page upon construction.
  this.$el = $('<div class="die">0</div>');
};

Die.prototype.roll = function() {
  var value = Math.floor((Math.random()*6)+1);

  this.$el.text(value);
};

function Dice() {};

Dice.dice = [];

Dice.prototype.add = function() {
  var die = new Die();
  Dice.dice.push(die);

  $('.dice').append(die.$el);
};

Dice.prototype.rollAll = function() {
  $(Dice.dice).each(function(k, die) {
    die.roll();
  });
};

/********* Attach functionality to page *********/

$(document).ready(function() {
  var dice = new Dice();
  
  $('#roller button.add').on('click', dice.add);

  $('#roller button.roll').on('click', dice.rollAll);
});
