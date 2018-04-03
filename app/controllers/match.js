import Ember from 'ember';
import ratingElo from '../utils/rating-elo';

export default Ember.Controller.extend({
  init(...args) {
    this._super(args);
    this.set('players', this.get('store').peekAll('player'));
  },
  actions: {
    addOneGame() {
      // рассчитаем изменение рейтинга
      let [r1, r2] = [this.model.get('player1.rating'), this.model.get('player2.rating')];
      const lastGame = this.model.get('games.lastObject');
      let scoreElo = 0;

      if (lastGame === undefined || lastGame.get('scoreP1') === undefined || lastGame.get('scoreP2') === undefined) {
        return false;
      }
      if (lastGame.scoreP1 > lastGame.scoreP2) {
        scoreElo = 1;
      } else if (lastGame.scoreP1 < lastGame.scoreP2) {
        scoreElo = -1;
      }
      [r1, r2] = ratingElo(r1, r2, scoreElo);

      this.model.set('player1.rating', r1);
      this.model.set('player2.rating', r2);
      // добавим новую игру
      const g = this.get('store').createRecord('game', {
        order: this.model.get('games.length') + 1
      });

      this.model.get('games').pushObject(g);

      return false;
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
