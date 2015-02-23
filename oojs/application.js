

$(document).ready(function() {

  addDice = function() {
  $('.dice').append('<div class="die">0</div>');
  };

  rollDice = function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  };
  
  $('#roller button.add').click(addDice);
  $('#roller button.roll').click(rollDice);
});
