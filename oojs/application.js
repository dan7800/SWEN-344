$(document).ready(function() {

  var add_dice = function(){
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  }

  var roll_dice = function(){
    $('.die').each(die)
  }

  var die = function(k, die){
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  }


  $('#roller button.add').on('click', add_dice);

  $('#roller button.roll').on('click', roll_dice);
  
});
