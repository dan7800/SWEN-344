$(document).ready(function() {
  var diceGroup = new DiceGroup();
  $('#roller button.add').on('click', function() {
    diceGroup.add();
  });

  $('#roller button.roll').on('click', function() {
    diceGroup.rollAll();
  });
});

function DiceGroup(){
    this.diceGroup = [];
    
    this.add = function(){
        var dice = new Dice(this.diceGroup.length);
        this.diceGroup.push(dice);
        dice.addToHtml();
    };
    
    this.rollAll = function(){
        for(var i=0; i<this.diceGroup.length; i++){
            this.diceGroup[i].roll();
        }
    };
};

function Dice(id){
    this.value = 0
    this.id = id;
    this.addToHtml = function(){
        $('.dice').append('<div class="die" id="dice_'+ this.id +'">' + this.value +'</div>');
    };
    
    this.roll = function() {
        this.value = Math.floor((Math.random()*6)+1);
        $("#dice_"+this.id).text(this.value);
    };
};