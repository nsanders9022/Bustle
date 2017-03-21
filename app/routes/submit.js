import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo("index");
    },
    showNav: function() {
      Ember.$(".nav-bar").animate({"left":"0px"}, 0);
      Ember.$(".nav-bar").toggle().animate({"left":"7%"}, "slow");
    }
  }
});
