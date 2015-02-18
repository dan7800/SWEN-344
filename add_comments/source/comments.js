$(document).ready(function(){

	$("#new_comment").hide();

	$("#new_comment_button").click(function(){
		$("#new_comment").show();
	});

	$("#new_comment").submit(function(event){
		var comment = $('#commentArea').val();
		var author = $('#authorName').val();
		if (author && comment) {
			$('#comment_list').append('<li>' + comment +
				'<span class="author">' + author + '</span>' +
				'</li>');
			event.preventDefault();
		}; 
	});
		
});