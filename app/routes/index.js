import Ember from 'ember';

export default Ember.Route.extend({
  counterCheck: false,
  model() {
    return this.store.findAll("story");
  },
  actions: {
    counter(params) {
      console.log(params);
      if(true === true) {
        this.set('counterCheck', true);
      } else {
        this.set('counterCheck', true);
      }
    }
  }
});
