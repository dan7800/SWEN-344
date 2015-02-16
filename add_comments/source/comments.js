$(function(){

  //Create Form
  $("<form id='new_comment'></form>").appendTo(document.body);
  $("<textarea id='comment'></textarea><br\>").appendTo("#new_comment");
  $("<input id='name' placeholder='Your Name'></input><br\>").appendTo("#new_comment");
  $("<input id='create_comment_button' value='Create Comment' type='submit'></input><br\>").appendTo("#new_comment");
  $("#new_comment").hide();
  
  //New Button Click
  $("#new_comment_button").click(function(){
    console.log("You Clicked the button.");
	$("#new_comment_button").hide();
	$("#new_comment").show();
  });
  
  //Create Button Click
  $("#create_comment_button").click(function(){
	event.preventDefault();
	var name = $("#name").val();
    var comment = $("#comment").val();

	//If text in comment
    if (!comment == "") {
	  //Add text to comment list
	  $("<li>" + comment
	  + "<span class='author'>" + name + "</span>"
	  + "</li>").appendTo("#comment_list");

	  $("#new_comment").hide();
      $("#new_comment_button").show();
	  $("#name").val("");
	  $("#comment").val("");
	}
  });
});