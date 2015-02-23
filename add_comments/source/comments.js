// Shorthand for document ready
$(function(){
		// Shows the box for the user to enter a new comment.
		$('#new_comment_button').click(function(event){
			$('#new_comment').show();
			$('#new_comment_button').hide();
		});


		$('#submit_comment').click(function(event){
			event.preventDefault();
			var post = $('#comment').val();
			var author = $('#author').val();

			// Verifies the input of the post
			if(post == '') {
				alert("Please put something in the comment box before submitting");
			} else {
				if (author == "Please enter your name") {
					author = "Anonymous";
				}
				$('#comment_list').append('<li>' + post + '<span class="author">' + 
					author + '</span>' + '</li>');
				
				// Sets the form back to it's original state.
				$('#new_comment')[0].reset();
				$('#new_comment').hide();
				$('#new_comment_button').show();
			}
		});

});