import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  text: DS.attr(),
  featured: DS.attr()
});
