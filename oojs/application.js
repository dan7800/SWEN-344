// Define everything within an anonymous function that is called immediately
// following its definition so that none of the state spills out into
// the global scope. 
(function() {
  /**
   * Constructor function for the Die Controller.
   */
  var DieController = function() {
  }

  /**
   * Method definitions for DieController class.
   */
  DieController.prototype = {
    /**
     * Read only property for retrieving the most basal view DOM element that
     * we care about. This is where we will insert our dice.
     */
    get view() {
      return $('.dice');
    },

    /**
     * Read only property which retrieves die elements from the DOM.
     */
    get dice() {
      return $('.die');
    },

    /**
     * Method which acts as event handler for clicks to the Roll Dice button.
     * @param event {event} - The event which is associated with the button click.
     */
    onRollClicked: function( event ) {
      event.data.controller.dice.each(function(k, die) {
        var value = Math.floor((Math.random()*6)+1);
        $(die).text(value);
      });
    },

    /**
     * Method which acts as event handler for clicks to the Add Dice button.
     * @param event {event} - The event which is associated with the button click.
     */
    onAddDiceClicked: function( event ) {
      console.log("WAT")
      event.data.controller.view.append('<div class="die">0</div>');
    }
  }

  $(document).ready(function() {
    // Create an instance of the controller.
    var controller = new DieController();

    // Wrapper around the controller so we can pass it into the event and
    // interact with it in a clean way.
    var context = {
      controller: controller
    };

    // Set up callbacks for the button presses.
    $('#roller button.add').on('click', null, context, controller.onAddDiceClicked);
    $('#roller button.roll').on('click', null, context, controller.onRollClicked);
  });
})();