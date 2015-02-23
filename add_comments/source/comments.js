// Shorthand for document ready
$(function(){
  //Add the comment adding form to the HTML
  $(
    '<form id="new_comment"><textarea id="new_comment_content"></textarea><input type="text" id="author"><input type="submit" value="Create Comment" id="create_comment_button"></form>'
  ).appendTo("body");
  $("#new_comment").hide()
  
  $( "#new_comment_button" ).click(function(event) {
	//Hide the new_comment button.
	$("#new_comment_button").hide();

	//Show the new_comment form.
	$("#new_comment").show();
  });
  $("#create_comment_button").on("click", function(event) {
	//Prevent page refresh
    event.preventDefault();

    var commentText = $("#new_comment_content").val();
    var author = $("#author").val();

    if (commentText == "") {
      alert("Please write a comment, then submit.");
    } else {
      $(
        '<li>' + commentText + '<span class="author">' +
            authorName + '</span>' + '</li>'
      ).appendTo("#comment_list");

      //Empty the form.
      $("#new_comment")[0].reset();
      //Hide the form again.
      $("#new_comment").hide();
      

      //Show the new_comment button.
      $("#new_comment_button").show();
    }
  });
});  
});