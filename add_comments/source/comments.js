// Shorthand for document ready
$(function(){
    
  $("body").append('<form id="new_comment" hidden="true">'
      + '<textarea id="new_comment_text"></textarea>'
      + '<input type="text" id="authorName" placeholder="Your Name"></input>'
      + '<input type="submit" value="Create Comment"></input>'
      + '</form>');
    

  $("#new_comment_button").click(function(){
      $("#new_comment_button").hide();
      $("#new_comment").show();
  });
    
  $("#new_comment").submit(function(event){
      event.preventDefault();
      var commentText = $("#new_comment_text").val();
      var authorName = $("#authorName").val();
      
      if(commentText != ""){
            $('<li>' + 
             commentText +
             '<span class="author">' +
             authorName +
             '</span>' +
             '</li>').appendTo("#comment_list");
            $("#new_comment_text").val("");
            $("#authorName").val("");
            $("new_comment").hide();
            $("new_comment_button").show();
      }
      else{
        alert("Missing Comment")   
      }
  });
  
});