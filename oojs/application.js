$(document).ready(function() {

  var dice = function(){

    var self = this;

    self.add_dice = function(){
      console.log("WAT")
      $('.dice').append('<div class="die">0</div>');
    }


    self.roll_dice = function(){
      $('.die').each(self.die)
    }

    self.die = function(k, die){
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    }

  }

  var die = new dice()

  $('#roller button.add').on('click', die.add_dice);

  $('#roller button.roll').on('click', die.roll_dice);

});
