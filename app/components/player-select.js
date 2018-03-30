import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSelectPlayer() {

      const id = this.get('id');
      const selectedEl = this.$(`#${id}`)[0];
      const playerId = selectedEl.value;
      const selectedPlayer = this.players.find(i => { return i.id === playerId; });

      this.set('value', selectedPlayer);
    }
  }
});
