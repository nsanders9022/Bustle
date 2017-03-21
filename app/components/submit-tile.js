import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image'),
        date: this.get('date'),
        text: this.get('article'),
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
