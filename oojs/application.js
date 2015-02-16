$(document).ready(function() {

  // a single die
  var Die = function() {
    // Create a unique, jQuery-wrapped DOM element for the die.
    this._view = $('<div class="die">0</div>');
  };
  Die.prototype = {
    getView: function() {
      return this._view;
    },
    roll: function() {
      var value = Math.floor((Math.random()*6)+1);
      this._view.text(value);
    }
  };

  // the set of dice rendered on the page
  var hand = {
    _dice: [],
    // the DOM element holding the rendered set of dice
    _view: $('.dice'),
    // Add the die to the list and add its DOM element to the DOM.
    add: function(newDie) {
      this._dice.push(newDie);
      this._view.append(newDie.getView());
    },
    // Roll all of the dice in the hand.
    roll: function() {
      this._dice.forEach(function(die) {
        die.roll();
      });
    }
  };

  // "Roll dice!" button
  var rollButtonCallback = function() {
    hand.roll();
  };
  $('#roller button.roll').on('click', rollButtonCallback);

  // "Add dice!" button
  var addButtonCallback = function() {
    var newDie = new Die();
    hand.add(newDie);
  };
  $('#roller button.add').on('click', addButtonCallback);

});
