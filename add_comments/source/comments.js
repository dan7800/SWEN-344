// Shorthand for document ready
$(function(){
	$("#new_comment_button").on("click", function(event){
	  // Your code goes here
		  $("#enter_comment").show();
		  $("#new_comment_button").hide();
	}); 

	$("#comment_submit").on("click", function(event){
		console.log("submit button clicked");
		event.preventDefault();
		var commentText = $("#comment_text").val();
		console.log("text: " + commentText);
		var commentAuthor = $("#comment_submitter").val();
		console.log("author: " + commentAuthor);
		$( "<li> " + commentText + 
			". <span class=\"author\"> " + commentAuthor + " </span>" + 
		  "</li>" ).appendTo( "#comment_list" );
		  $("#comment_text").val("");
		  $("#comment_author").val("");
		  $("#enter_comment").hide();
		  $("#new_comment_button").show();
		  
	});
});