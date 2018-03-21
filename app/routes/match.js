import Ember from 'ember';

let matches = [
  {
    name: 'First',
    startDate: new Date(2018, 03, 18),
    scoreP1: null,
    scoreP2: null
  },
  {
    name: 'Second',
    startDate: new Date(2018, 03, 20),
    scoreP1: null,
    scoreP2: null
  },
];

export default Ember.Route.extend({
  model() {
    return matches[0];
  }
});
