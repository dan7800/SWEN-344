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
function Dice() {
  this.dice = []

  this.add = function() {
    this.dice.push(new Die());
  };

  this.rollAll = function() {
    var index;
    for (index = 0; index < this.dice.length; ++index) {
      this.dice[index].roll();
    }
  };
};

// Die object
function Die() {
  this.value = 0;
  this.id = "die_" + dieNumber.toString();
  dieNumber++;
  $('.dice').append('<div class="die" id="' + this.id + '">' + this.value + '</div>');

  this.roll = function() {
    this.value = Math.floor((Math.random()*6)+1);
    document.getElementById(this.id).innerText = this.value.toString();
  };
};
