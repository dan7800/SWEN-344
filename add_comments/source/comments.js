// Shorthand for document ready
$(function(){
  // Your code goes here
  
  
  // The "Roll dice!" button
  
  // "Add dice!" button
  var addComment = function() {
    var newCommentBox = new OneDice();
    hand.add(newDice);
  };
  $('#roller button.add').on('click', addComment);
});