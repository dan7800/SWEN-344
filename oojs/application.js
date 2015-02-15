var dice_array =[];

function die()
{
  this.value = 0;
}

die.roll = function()
{
  for(var d in dice_array)
  {
    var newValue = Math.floor((Math.random()*6)+1);
    d.value = newValue;
  }
}

die.add = function()
{
  console.log("WAT");
  var aDice = new die();
  dice_array.push(aDice);
  $('.dice').append('<div class="die">' + aDice.value + '</div>');
}


$(document).ready(function() {

var addRollerButton = function (){
  console.log("WAT");
}

  $('#roller button.add').click(die.add);
  $('#roller button.roll').click(die.roll);

  //$('#roller button.roll').on('click', function() {
  //  $('.die').each(function(k, die) {
  //    var value = Math.floor((Math.random()*6)+1);
  //    $(die).text(value);
  //  });
  //});
});
