$(document).ready(function() {
  function die() {
	  this.value = 0;
  };
  var dice_list = [];
  
  $('#roller button.add').on('click', function() {
	var newDie = new die();
    die.addDie(newDie);
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k,d){
      die.roll(d);
    });
  });
  
  die.addDie = function(newDie){
	  dice_list.push(newDie);
	  $('.dice').append('<div class="die">0</div>');
  }
  
  die.roll = function(die){    
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
  }
  
  
  
});
