var Comment = {
  elements: {
    commentList: document.getElementById('comment_list'),
    commentArea: document.getElementById('comment_area'),
    commentButton: document.getElementById('new_comment_button'),
    commentForm: document.createElement('form'),
    textarea: document.createElement('textarea'),
    authorInput: document.createElement('input'),
    submit: document.createElement('input')
  },

  populateComments: function() {
    var array = JSON.parse(window.localStorage.getItem('comments')) || [];
    var self = this;
    array.forEach(function(comment){
      self.createComment(comment);
    });
  },

  createCommentForm: function() {
    this.elements.commentForm.style.display = 'none';
    this.elements.commentForm.id = 'new_comment'

    this.elements.authorInput.id = 'authorName';
    this.elements.authorInput.required = true;
    this.elements.authorInput.placeholder = 'Your Name';

    this.elements.textarea.required = true;

    this.elements.submit.type='submit';
    this.elements.submit.value = 'Create Comment';

    this.elements.commentForm.appendChild(this.elements.textarea);
    this.elements.commentForm.appendChild(this.elements.authorInput);
    this.elements.commentForm.appendChild(this.elements.submit);

    this.elements.commentArea.appendChild(this.elements.commentForm);

    var self = this;
    this.elements.commentForm.onsubmit = function(event) {
      event.preventDefault();

      if(self.elements.commentForm.checkValidity()) {
        var data = {
          name: self.elements.authorInput.value,
          text: self.elements.textarea.value
        }
        self.storeComment(data);
        self.createComment(data);
        self.elements.commentButton.style.display = 'inline';
        self.elements.commentForm.style.display = 'none';
      }
    }

    this.elements.commentButton.onclick = function(event) {
      self.elements.commentButton.style.display = 'none';
      self.elements.commentForm.style.display = 'block';
    }
  },

  createComment: function(data) {
    var newComment = document.createElement('li');
    newComment.textContent = data.text;
    var author = document.createElement('span');
    author.className = 'author';
    author.textContent = data.name;

    this.elements.authorInput.value = '';
    this.elements.textarea.value = ''
    newComment.appendChild(author);
    this.elements.commentList.appendChild(newComment);
  },

  storeComment: function(data) {
    var array = JSON.parse(window.localStorage.getItem('comments')) || [];
    array.push(data);
    window.localStorage.setItem('comments', JSON.stringify(array));
  }
};

Comment.createCommentForm();
Comment.populateComments();
