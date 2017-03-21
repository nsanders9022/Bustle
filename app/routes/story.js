import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var modelMaker = this.store.findRecord('story', params.story_id);
    // var newText = grabText.substring(0, 200);
    return {story: modelMaker};
  },
  actions: {
    update(story, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          story.set(key, params[key]);
        }
      });
      story.save();
      this.transitionTo("index");
    },
    deleteStory(story) {
      story.destroyRecord();
      this.transitionTo('index');
    }
  }
});
