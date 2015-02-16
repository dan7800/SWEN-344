$(function(){
  $('#new_comment_button').click( function() {
    $('#new_comment_button').hide();
    $('#new_comment').show();
  });
  
  $('#new_comment').submit( function( event ) {
    event.preventDefault();
    $('#new_comment').hide();
    $('#new_comment_button').show();
    var comment = $('#new_comment textarea');
    var author = $('#new_comment #authorName');
    add_comment( comment.val(), author.val() );
    comment.val('');
    author.val('');
  });
  
  function add_comment( body, author ) {
    $('#comment_list').append(
      $('<li/>').html( body ).append(
        $('<span/>', {class:'author'}).html( author ) ) );
  };
});