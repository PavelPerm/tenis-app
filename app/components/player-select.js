import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSelectPlayer() {
      console.log(this.value);
      const id = this.get('id');
      const selectedEl = this.$(`#${id}`)[0];
      const selectedIndex = selectedEl.selectedIndex;
      const options = this.$(`#${id} option`);
      const selectedValue = options[selectedIndex].value;

      this.set('value', selectedValue);
    }
  }
});
