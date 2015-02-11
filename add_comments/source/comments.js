// Shorthand for document ready
$(function(){
  // Your code goes here
});

$("#new_comment_button").click(function() {
    console.log( "You clicked the button!" );
    $("#new_comment_button").hide();

    $("<form id='new_comment'>"
    + "<textarea></textarea>"
    + "<input id='authorName'></input>"
    + "<input type='submit' value='Create Comment'></input>"
    + "</form>").appendTo( document.body );
});
