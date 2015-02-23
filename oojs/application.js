$(document).ready(function() {
  this.AddDie = function(){
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  }

  this.Randomize = function(){
    $('.die').each(this.Randomize(die));
  }
  function Randomize(die){
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  }
  $('#roller button.add').on('click', this.AddDie());

  $('#roller button.roll').on('click', this.RandomizeAll());
});
