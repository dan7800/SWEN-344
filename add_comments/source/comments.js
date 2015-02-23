// Shorthand for document ready
$(function(){
  $("#new_comment_button").click(function()
  {
	$("#new_comment_button").hide();
	$('<form></form>',{"id":"new_comment"}).appendTo("body");
	$('<input></input>',{type:"textarea",id:"posttext"}).appendTo("#new_comment");
	$('<input></input>',{type:"text",id:"authorname"}).appendTo("#new_comment");
	$('<button></button>', 
	{id : "post", type : "submit", text:"Post", click:function()
		{
			event.preventDefault();
			$('<li>' + $("#posttext").val() + '<span class="author">' + $("#authorname").val() + '</span></li>').appendTo("#comment_list");
			$("#new_comment_button").show();
			$("#new_comment").remove();
		}
	}).appendTo("#new_comment");
  });
});