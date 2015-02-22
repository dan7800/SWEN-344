$(document).ready(function() {
	
  $('#roller button.add').on('click', function() {
  addDie();
  });

  $('#roller button.roll').on('click', function() {
   rollDice();
});

function addDie() {
	$('.dice').append('<div class="die">0</div>');
}

function rollDice() {
	$('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
}

});
