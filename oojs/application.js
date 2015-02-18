function die(){}

die.roll = function(){
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
  });
}

die.add = function(){
  var new_die = new die();
  $('.dice').append('<div class="die">0</div>');
}

$(document).ready(function() {

  $('#roller button.add').on('click', die.add);

  $('#roller button.roll').on('click', die.roll);
});