import Ember from 'ember';

export default Ember.Component.extend({
  updateStory: false,
  actions: {
    updateStoryFormShow() {
      this.set('updateStory', true)
    },
    update(story){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image'),
        date: this.get('date'),
        text: this.get('article'),
      };
      this.set('updateStory', false);
      this.sendAction('update', story, params);
    }
  }
});
