// Shorthand for document ready
$(function(){
  $("#new_comment_button").click(function(){
	  $("#new_comment").toggle();
  });
  $("#new_comment").submit(function(event) {
	 event.preventDefault();
	var new_task = $( "input[name='authorName']" ).eq(0).val();
	$("#comment_list").append('<li>'+new_task+'</li>');
  });
});