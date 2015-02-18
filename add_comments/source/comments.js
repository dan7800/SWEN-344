var commentSubmission = function(event) 
{
	$("#new_comment").show();
}

var insertPost = function(authorName, commentBody) 
{
	this.commentBodyListTag = "<li>" + commentBody + "</li>";

	if( authorName !== "" ) 
	{
	  this.authorTag = "<span class=\"author\">" + authorName + "</span>";
	  this.commentBodyListTag = $(commentBodyListTag).append(authorTag);
	}

	$("#comment_list").append(commentBodyListTag);
}

var submitComment = function(event) 
{
	event.preventDefault();

	if($("textarea").val() === "") 
	{
	  return;
	}

	var content = $("textarea").val();
	var author = "";
	
	if( $("#authorName").val() !== "" ) {
		author = $("#authorName").val()
	}

	insertPost(author, content);
}

$("#new_comment_button").on('click', commentSubmission);

var body = $("body");
var commentBox = 
	"<form id=\"new_comment\">"
  + "<textarea id=\"name-contents\"></textarea>"
  + "<input id=\"authorName\" type=\"text\" name=\"username\" placeholder=\"Your name\" />"
  + "<input type=\"submit\" value=\"Submit\" />"
  + "</form>";
body.append($(commentBox));

$("#new_comment").on('submit', submitComment);
$("#new_comment").hide();