var diceRoller = function() 
{
	this.getDice = function() 
	{
		return $('.dice');
	}
	
	this.getDies = function () 
	{
		return $('.die');
	}
	
	this.onRoll = function(event) 
	{
		event.data.getDies().each(function(k, die)
		{
			var dieValue = Math.floor((Math.random()*6)+1);
			$(die).text(dieValue);
		});
	}
	
	this.addDice = function(event) 
	{
		console.log("WAT")
		event.data.getDice().append('<div class="die">0</div>');
	}
}

$(document).ready(function() 
{
	var roller = new diceRoller();
	$('#roller button.add').on('click', null, roller, roller.addDice);
	$('#roller button.roll').on('click', null, roller, roller.onRoll);
});