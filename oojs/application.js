$(document).ready(function() {

  // one dice
  var OneDice = function() {
	//A unique DOM element for the dice
    this._view = $('<div class="die">0</div>');
  };
  OneDice.prototype = {
    getView: function() {
      return this._view;
    },
    roll: function() {
      var value = Math.floor((Math.random()*6)+1);
      this._view.text(value);
    }
  };

  // the dice rendered on the page
  var hand = {
    _dice: [],
    // DOM element holding the dice
    _view: $('.dice'),
    // Add the dice to the list and add its DOM element to the DOM.
    add: function(newDice) {
      this._dice.push(newDice);
      this._view.append(newDice.getView());
    },
    // Roll all of the dice in the hand.
    roll: function() {
      this._dice.forEach(function(dice) {
        dice.roll();
      });
    }
  };

  // The "Roll dice!" button
  var rollButton = function() {
    hand.roll();
  };
  $('#roller button.roll').on('click', rollButton);

  // "Add dice!" button
  var addButton = function() {
    var newDice = new OneDice();
    hand.add(newDice);
  };
  $('#roller button.add').on('click', addButton);

});
