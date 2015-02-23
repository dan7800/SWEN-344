
// Shorthand for document ready
$(function() {

  /**
   * Shows the comment submission form.
   * @param {event} event - The event which this callback is associated with.
   */
  var showCommentSubmissionForm = function( event ) {
    if(!doesCommentSubmissionFormExist()) {
      // Get the div that we want to insert the comment form into.
      var insertPoint = $("#comment_area").parent();

      // Create and insert the comment form.
      var commentForm = 
            "<form id=\"new_comment\">"
          + "<textarea id=\"name-contents\"></textarea>"
          + "<input id=\"authorName\" type=\"text\" name=\"username\" placeholder=\"Your name\" />"
          + "<input type=\"submit\" value=\"Submit\" />"
          + "</form>";
      insertPoint.append($(commentForm));

      // Hook up the form submission handler.
      $("#new_comment").on('submit', submitCommentSubmissionForm);
    }
    else {
      $("#new_comment").show();
    }
  }

  /**
   * Hides the comment submission form.
   * @param {event} event - The event which this callback is associated with.
   */
  var hideCommentSubmissionForm = function( event ) {
    $("#new_comment").hide();
  }

  /**
   * Check to see if the comment submission form is present on the page.
   */
  var doesCommentSubmissionFormExist = function() {
    return $("#new_comment").length > 0;
  }

  /**
   * Check to see if the comment submission form has content in its textarea.
   */
  var doesCommentSubmissionFormHaveContent = function() {
    return $("textarea").val() !== "";
  }

  /**
   * Check to see if the comment submission form has an author name in its input.
   */
  var doesCommentSubmissionFormHaveAuthor = function() {
    return $("#authorName").val() !== "";
  }

  /**
   * Retrieve the comment body from the comment submission form.
   */
  var getCommentBodyFromForm = function() {
    return $("textarea").val();
  }

  /**
   * Retrieve the comment author from the comment submission form.
   */
  var getCommentAuthorFromForm = function() {
    return $("#authorName").val()
  }

  /**
   * Inserts a comment into the DOM.
   */
  var insertPostIntoDom = function( authorName, commentBody ) {
    var commentBodyListTag = "<li>" + commentBody + "</li>";

    // If an author was specified, tack on the author name.
    if( authorName !== "" ) {
      var authorTag = "<span class=\"author\">" + authorName + "</span>";
      var commentBodyListTag = $(commentBodyListTag).append(authorTag);
    }

    // Insert the completed tag.
    $("#comment_list").append(commentBodyListTag);
  }

  /**
   * Submits the comment submission form.
   * @param {event} event - The event which this callback is associated with.
   */
  var submitCommentSubmissionForm = function( event ) {
    // Prevent the default form submission logic in the browser from running.
    event.preventDefault();

    // If the comment submission form has no body content, we shouldn't
    // submit it.
    if( !doesCommentSubmissionFormHaveContent() ) {
      return;
    }

    // Otherwise, we can extract the comment contents out and add the comment
    // to the DOM.
    var authorName = doesCommentSubmissionFormHaveAuthor()
      ? getCommentAuthorFromForm()
      : "";
    var commentBody = getCommentBodyFromForm();
    insertPostIntoDom(authorName, commentBody);
  }

  // Show the "Add Comment" form when the "New Comment" button is clicked.
  $("#new_comment_button").on('click', showCommentSubmissionForm);

  // Initially, the comment submission form should be hidden.
  hideCommentSubmissionForm()
});
