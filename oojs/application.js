$(document).ready(function() {
    
  var table = new Table();

  $('#roller button.add').on('click', function() {
    table.add();
  });

  $('#roller button.roll').on('click', function() {
    table.roll();
  });

});

function Table(){
  this.table = [];

  this.add = function(){
    var dice = new Dice(this.table.length);
    dice.show();
    this.table.push(dice);
  };

  this.roll = function(){
    for(var i=0; i<this.table.length; i++){
      this.table[i].roll();
    }
  };
}

function Dice(id){
  this.id  = id;
  this.value = 0;

  this.show = function(){
     $('.dice').append('<div class="die" id="dice'+ id +'">' + this.value +'</div>');
  }

  this.roll = function(){
    this.value = Math.floor((Math.random()*6)+1);
    $("#dice"+this.id).text(this.value);
  };

}

