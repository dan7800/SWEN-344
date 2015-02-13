// Shorthand for document ready
$(function(){
	$('#new_comment_button').click(function() {
		$("#new_comment").show();
		$('#new_comment_button').hide();
	});
	$('#new_comment').submit(function() {
		event.preventDefault();
		$("#new_comment").hide();
		$('#new_comment_button').show();
		
		var text = $('textarea').val();
		var author = '<span class="author">' + $("#authorName").val() + '</span>';
		
		$("#comment_list").append(
			$('<li>').append(
				text +  author
			 ) );
			 
		$('textarea').val('');
		$('#authorName').val('');
	});
});