// Shorthand for document ready
$(function(){
	$("#new_comment_button").click(function(){
    	$("#new_comment").show();
    	$("#new_comment_button").hide();

  	});

  	$("#post_comment").click(function(event){
  		event.preventDefault();
  		postText = $("#myTextarea").val();
  		if(postText != "")
  		{
  			theAuthor = $("#authorName").val();
  			$("#comment_list").append("<li>" + postText + "<span class='author'>" + theAuthor + "</span>" + "</li>");			
  		}
  		$("#myTextarea").val('');
  		$("#authorName").val('');
  		$("#new_comment").hide();
  		$("#new_comment_button").show();
  	});
});