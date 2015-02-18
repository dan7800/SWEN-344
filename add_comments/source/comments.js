// Shorthand for document ready
$("#new_comment_button").click(function(){
  // Your code goes here
  $("#new_comment").show();
});

$("#new_comment").submit(function(event){

	$("#comment_area ul").append('<li>'+$("#comVal").val()+'<span class="author">'+$("#authorName").val()+'</span></li>');
	$("#new_comment")[0].reset();
	$("#new_comment").hide();
	return false;
});

