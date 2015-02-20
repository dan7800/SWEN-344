// Shorthand for document ready
$(function(){
  // Your code goes here
  $( "#author").hide();
  $( "#body").hide();
  $( "#submit-form").hide();
  $( "#new_comment_button" ).on( "click", function() {
    $( "#new_comment_button").hide();
	$( "#author").show();
    $( "#body").show();
    $( "#submit-form").show();
})
  $( "#submit-form").on( "click", function( event ) {
	  event.preventDefault();
	  
	  $( "#new_comment_button").show();
	  $( "#author").hide();
      $( "#body").hide();
      $( "#submit-form").hide();
	  debugger;
})
});
