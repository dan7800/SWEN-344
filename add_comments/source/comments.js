// Shorthand for document ready
$(function(){
  $("#new_comment_button").click(function(){
	  $("#new_comment").toggle();
  });
  $("#new_comment").submit(function(event) {
	 event.preventDefault();
	var author_task = $( "input[name='authorName']" ).eq(0).val();
	var comment_task = $( "textarea[name='comment']" ).eq(0).val();
	$("#comment_list").append('<li>'+comment_task+'<span class="author">'+author_task+'</span></li>');
  });
});