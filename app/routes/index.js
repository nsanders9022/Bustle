import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll("story");
  },
  actions: {
    showNav: function() {
      Ember.$(".nav-bar").animate({"left":"0px"}, 0);
      Ember.$(".nav-bar").toggle().animate({"left":"7%"}, "slow");
    }
  }
});
