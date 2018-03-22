import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('date'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  maxGameScore: DS.attr('number'),
  minGamesForWin: DS.attr('number'),
  player1: DS.belongsTo('player'),
  player2: DS.belongsTo('player'),
  games: DS.hasMany('game')
});
