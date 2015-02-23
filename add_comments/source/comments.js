// Shorthand for document ready
$(function(){

  // Inject the "create comment" form, because we can't modify the HTML...
  $(
    '<form id="new_comment">' +
      '<textarea id="new_comment_comment"></textarea>' +
      '<input type="text" id="authorName">' +
      '<input type="submit" value="Create Comment" id="create_comment_button">' +
    '</form>'
  ).appendTo("body");

  // Start by hiding the new injected form.
  $("#new_comment").hide();

  // Add a listener for the "create comment" button.
  $("#create_comment_button").on("click", function(event) {
    event.preventDefault();
    console.log("Creating comment");

    var commentText = $("#new_comment_comment").val();
    var authorName = $("#authorName").val();

    if (commentText == "") {
      alert("Please enter a comment before submitting.");
    } else {
      $(
        '<li>' +
          commentText +
          '<span class="author">' +
            authorName +
          '</span>' +
        '</li>'
      ).appendTo("#comment_list");

      // Hide the form.
      $("#new_comment").hide();
      
      // Clear the form.
      $("#new_comment")[0].reset();

      // Show the "new comment" button.
      $("#new_comment_button").show();
    }
  });
});


$("#new_comment_button").on("click", function() {

  // Hide the "new comment" button.
  $("#new_comment_button").hide();

  // Show the "create comment" form.
  $("#new_comment").show();
});
