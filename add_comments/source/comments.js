// Shorthand for document ready
	$(function(){
	$("#new_comment_button").click(function(){
		$("#new_comment").show();
		$("#new_comment_button").hide();
	
	});
	
	$("#submit").click(function(event){
		event.preventDefault();
		if ($("#comment").val() != "") {
		var text = $("#comment").val();
		var auth = $("#author").val();		
		$("#comment_list").append('<li>' + text 
			+ '<span class = "author">' + auth + '</span>' + '</li>');
		$("#new_comment").hide();
		$("#new_comment_button").show();
		$("#comment").val("");
		$("#author").val("");
		}
	
	});
	
	});

	
	
	