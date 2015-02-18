$(function(){

  var Comment = function(content, name) {
    var nameTag = '';
    if (typeof name === 'string' && name.length > 0) {
      nameTag = '<span class="author">' + name + '</span>';
    }
    this._view = $('<li>' + content + nameTag + '</li>');
  };
  Comment.prototype = {
    getView: function() {
      return this._view;
    }
  };

  var thread = {
    _comments: [],
    _view: $('ul#comment_list'),
    add: function(newComment) {
      this._comments.push(newComment);
      this._view.append(newComment.getView());
    }
  };

  var commentEditor = {
    show: function() {
      $('#new_comment_button').hide();
      $('#comment_area').append($('<form id="new_comment"><textarea /><input id="authorName" /><input type="submit" value="Create Comment" /></form>'));
      $('#comment_area').submit(this._submit);
    },
    hide: function() {
      $('#new_comment_button').show();
      $('#new_comment').remove();
    },
    _submit: function(event) {
      event.preventDefault();
      var content = $('#new_comment > textarea').val();
      var name = $('#new_comment > #authorName').val();
      if (typeof content === 'string' && content.length > 0) {
        var newComment = new Comment(content, name);
        thread.add(newComment);
      }
      commentEditor.hide();
    }
  };

  var newCommentButtonCallback = function() {
    commentEditor.show();
  };
  $('#new_comment_button').click(newCommentButtonCallback);
  
});