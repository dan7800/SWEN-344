// Shorthand for document ready
$(function(){
  var commentButton = $('#new_comment_button');
  var commentArea = $('#comment_area')

  $(commentButton).click(function(){
  	
  	// HTML form -- seriously, this is awful. Normally, I'd put it in the HTML, 
  	// hide it by default and show it when it's needed.
  	var form = '<form id="new_comment"><textarea id="comment"></textarea><input type="text" id="authorName" aria-label="Your name"></input><input type="submit" id="submit_new_comment"></input></form>';

  	// Hide the new comment button
  	$(this).hide();

  	// Create the form.
  	$(form).appendTo(commentArea);
  	
  	$('#submit_new_comment').click(function(e){
  		// Prevent submission of the form to the server.
  		e.preventDefault();

  		// Get the values in the form. Could do this just based on the form, but IDs are speedy.
		var comment = $('#comment').val();
		var author = $('#authorName').val();

		if (comment.trim()){
			var authorHtml = '';

			if (author.trim()){
				// If we have an author, populate the authorHtml variable.
				authorHtml = '<span class="author">' + author.trim() + '</span>';
			}

			// If comment is not empty or whitespace, we can post it.
			$('<li>' + comment + authorHtml + '</li>').appendTo('#comment_list')
		}

		// Remove the form from the page.
		$('#new_comment').remove();

		// And show the new comment button again.
		$(commentButton).show();
  	});

  });
});