import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [{
            id: 1,
            type: 'player',
            attributes: {
              firstName: 'Player1',
              lastName: 'Player One',
              rating: 100
            },
            relationships: {}
          }, {
              id: 2,
              type: 'player',
              attributes: {
                firstName: 'Player2',
                lastName: 'Player Two',
                rating: 200
              },
              relationships: {}
            }]
      });
  }
});
