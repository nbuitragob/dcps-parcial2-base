import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deletePost(post) {
              var deleteConfirmation = confirm('Are you sure you want to delete this post?');
              if(deleteConfirmation) {
                    post.destroyRecord();
              }
        }
  }
});
