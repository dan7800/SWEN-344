var Die = function() {
  var die = $('<div/>',{class:'die'}).text('0');
  $('.dice').append(die);
  this.roll = function() {
    die.text(Math.floor((Math.random()*6)+1));
  };
};

var Dice = function() {
  var dice = [];
  this.add = function() {
    dice.push(new Die());
  }
  this.roll = function() {
    for(var i = 0; i < dice.length; ++i)
      dice[i].roll();
  }
};

$(document).ready(function() {
  var dice = new Dice();
  
  $('#roller button.add').click(function() {
    dice.add();
  });

  $('#roller button.roll').click(function() {
	  dice.roll();
  });
});
