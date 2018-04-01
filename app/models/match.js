import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  startDate: validator('presence', true),
  maxGameScore: validator('inclusion', { in: [ 11, 21 ] }),
  minGamesForWin: validator('number', { integer: true }),
  scoreP1: validator('number', { integer: true }),
  scoreP2: validator('number', { integer: true })
});

export default DS.Model.extend(Validations, {
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
