$(document).ready(function() {
var diceList = []
function die() {
    this.firstName = 0;
    this.lastName = 0;
	this.roll = function (){
		   this.value = Math.floor((Math.random()*6)+1);
}

};
  $('#roller button.add').on('click', function() {
    console.log("adding a new dice to the array list")
    $('.dice').append('<div class="die">0</div>');
	diceList.push(new die);
  });

  $('#roller button.roll').on('click', function() {
  var count = 0;
    $('.die').each(function(k, die) {
	  diceList[count].roll()
      $(die).text(diceList[count].value);
	  count++;
    });
  });
});
