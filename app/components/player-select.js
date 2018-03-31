import Ember from 'ember';

export default Ember.Component.extend({
  value: "",
  players: [],
  actions: {
    onSelectPlayer() {
      //const id = this.get('elementId');
      //const selectedEl = this.$(`#${id} select`)[0];
      //const playerId = selectedEl.value;
      const playerId = this.element.childNodes[0].value;
      const selectedPlayer = this.players.find(i => { return i.id === playerId; });

      this.set('value', selectedPlayer);
    }
  }
});
