import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var m = this.get('store').createRecord('match', {
      maxGameScore: 21,
      minGamesForWin: 6
    });
    var g = this.get('store').createRecord('game', {
      order: 1
    });
    m.get('games').pushObject(g);
    return m;
  }
});
