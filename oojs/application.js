	var dice = [];

  dice.add = function() {
	$('.dice').append('<div class="die">0</div>');
  }
  
  dice.roll = function() {
	  $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  }

$(document).ready(function() {  
  $('#roller button.add').on('click', function() {
    dice.add();
  });

  $('#roller button.roll').on('click', function() {
    dice.roll();
  });
});
