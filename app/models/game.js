import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('number'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  match: DS.belongsTo('match')
});
