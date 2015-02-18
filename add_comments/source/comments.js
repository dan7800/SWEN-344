// Shorthand for document ready
$(function(){
    $("<form id='new_comment'>"
        + "<textarea id='commentText'></textarea>"
        + "<input id='authorName'></input>"
        + "<input id='submitComment' type='submit' value='Create Comment'></input>"
        + "</form>").appendTo( document.body );
        $("#new_comment").hide();

    $("#new_comment_button").click(function() {
        $("#new_comment_button").hide();
        $("#new_comment").show();
    });

    $("#submitComment").click(function() {
        // Don't want to really submit
        event.preventDefault();

        var authorName = $("#authorName").val();
        var commentText = $("#commentText").val();

        if (!commentText || commentText.length === 0) {
            alert("No Comment Provided");
            return;
        }

        $("<li>" + commentText
            + "<span class='author'>" + authorName + "</span>"
            + "</li>").appendTo("#comment_list");

        $("#new_comment").hide();
        $("#new_comment_button").show();
        $("#authorName").val("");
        $("#commentText").val("");
    });
});

