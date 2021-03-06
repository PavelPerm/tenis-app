import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  order: validator('number', { integer: true, allowString: true }),
  scoreP1: validator('number', {
    integer: true,
    allowString: true,
    gte: 0,
    lte: Ember.computed.readOnly('model.match.maxGameScore')
  }),
  scoreP2: validator('number', {
    integer: true,
    allowString: true,
    gte: 0,
    lte: Ember.computed.readOnly('model.match.maxGameScore')
  }),
  match: validator('belongs-to')
});


export default DS.Model.extend(Validations, {
  order: DS.attr('number'),
  scoreP1: DS.attr('number'),
  scoreP2: DS.attr('number'),
  match: DS.belongsTo('match')
});
