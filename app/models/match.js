import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  player1: DS.belongsTo('player'),
  player2: DS.belongsTo('player'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  games: DS.hasMany('game')
});
