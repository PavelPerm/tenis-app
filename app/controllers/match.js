import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.set('players', this.get('store').peekAll('player'));
  },
  actions: {
    addOneGame() {
      var g = this.get('store').createRecord('game', {
        order: this.get('model.games.length') + 1
      });
      this.model.get('games').pushObject(g);
    },
    toggleSettings() {
      this.toggleProperty('isExpanded');
    },
    set11() {
      this.model.set('maxGameScore', 11);
    },
    set21() {
      this.model.set('maxGameScore', 21);
    }

  }
});
