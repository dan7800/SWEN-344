var dice = [];
var dieNumber = 0;

$(document).ready(function() {
  var diceSet = new Dice();

  $('#roller button.add').on('click', function() {
    diceSet.add();
  });

  $('#roller button.roll').on('click', function() {
    diceSet.rollAll();
  });
});


// Dice group object
var Dice = function() {
  this.dice = []
};

Dice.prototype.add = function() {
  this.dice.push(new Die());
};

Dice.prototype.rollAll = function() {
  var index;
  for (index = 0; index < this.dice.length; ++index) {
    this.dice[index].roll();
  }
};

// Die object
var Die = function() {
  this.value = 0;
  this.id = "die_" + dieNumber.toString();
  dieNumber++;
  $('.dice').append('<div class="die" id="' + this.id + '">' + this.value + '</div>');
};

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
  document.getElementById(this.id).innerText = this.value.toString();
};
