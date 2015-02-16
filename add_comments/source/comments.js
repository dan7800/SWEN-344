// Shorthand for document ready
$(function(){
// Shorthand for document ready
$(function(){

$("body").append("<form id='new_comment'>"
+ "<textarea id='commentText'></textarea>"
+ "<input id='authorName'></input>"
+ "<input id='submitComment' type='submit' value='Create Comment'></input>"
+ "</form>");
var form = $("#new_comment");
form.hide();


$( "#new_comment_button" ).click(function() {
//show the form and hide the button
var button = $( "#new_comment_button");
form.show();
button.hide();
});

$("#submitComment").click(function() {
//now check user input if none do nothing
event.preventDefault();
var author = $("#authorName").val();
if (!author){author = "";}
var inputComment = $("#commentText").val();
if (inputComment || inputComment.length > 0) {
$("#comment_list").append("<li>" + inputComment + "<span class='author'>" + author + "</span>"
+ "</li>");
$("#new_comment").hide();
$("#new_comment_button").show();
//empty used values
$("#authorName").val("");
$("#commentText").val("");
}//if
});

});
});