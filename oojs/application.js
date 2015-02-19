$(document).ready(function() {
  $('#roller button.add').on('click', addDice);

  $('#roller button.roll').on('click', rollDice);
});


var applicationStart = function() {
  $('#roller button.add').on('click', addDice);
  $('#roller button.roll').on('click', rollDice);
};

var addDice = function() {
  console.log("WAT")
  $('.dice').append('<div class="die">0</div>');
};

var randomPick = function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
};

var rollDice = function(k, die) {
    $('.die').each(randomPick);
};