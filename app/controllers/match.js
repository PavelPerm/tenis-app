import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
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
