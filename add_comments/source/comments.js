// Shorthand for document ready
$(function(){
  $('#new_comment').hide());
  $('#new_comment_button').click(function(){
    $('#new_comment').show());
  })
  $('#new_comment').submit(function(event){
    event.preventDefault();
  
    var new_comment = '<li>' + comment.val() + '<span class="author">' + author.val() +'</span></li>'
    $('#comment_list').append(new_comment)
    comment.val("");
    author.val("");
    $('#new_comment').hide());	
  })
});