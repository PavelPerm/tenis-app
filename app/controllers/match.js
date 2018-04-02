import Ember from 'ember';
import ratingElo from '../utils/rating-elo';

export default Ember.Controller.extend({
  init(...args) {
    this._super(args);
    this.set('players', this.get('store').peekAll('player'));
  },
  actions: {
    addOneGame() {
      const g = this.get('store').createRecord('game', {
        order: this.model.get('games.length') + 1
      });
      let [r1, r2] = [this.model.get('player1.rating'), this.model.get('player2.rating')];

      this.model.get('games').forEach(element=> {
        let scoreElo = 0;

        if (element.scoreP1 > element.scoreP2) {
          scoreElo = 1;
        } else if (element.scoreP1 < element.scoreP2) {
          scoreElo = -1;
        }
        [r1, r2] = ratingElo(r1, r2, scoreElo);
      });
      this.model.set('player1.rating', r1);
      this.model.set('player2.rating', r2);
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
