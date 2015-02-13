// Shorthand for document ready
$(function(){
  // Your code goes here

  $('#new_comment_button').click(function(){
  	$('#new_comment').css('display' , 'block')
  })

  $('#new_comment').submit(function(e){
    e.preventDefault();
    
    var author = $('#new_comment :input[name=author]')
  	var comment = $('#new_comment :input[name=comment]')

  	console.log(author)
  	console.log(comment)

    var new_comment = '<li>' + comment.val() + '<span class="author">' + author.val() +'</span></li>'
    $('#comment_list').append(new_comment)

    comment.val(' ')
    author.val(' ')
  })


});