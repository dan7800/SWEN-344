$(function(){
	$("#new_comment_area").hide();
});

$("#new_comment_button").click(function(){
	$("#new_comment_area").show();
});

$("#new_comment").submit(function(event){
	event.preventDefault();

	var comment = $("#new_comment_text").val();
	var author = $("#authorName").val();

	var item = "";

	if(comment != "" && author != ""){
		item += "<li>" 
			 + comment 
			 + "<span class='author'>"
			 + author
			 + "</span></li>";
		alert(item);
		$("#comment_list").append(item);
		
		$("#new_comment_area").hide();
		$("#new_comment_text").val("");
		$("#authorName").val("");

	}else{
		alert("ERROR: Missing either a comment or an author");
	}

});
