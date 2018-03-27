import ratingElo from 'tenis-app/utils/rating-elo';
import { module, test } from 'qunit';

module('Unit | Utility | rating elo');

// Replace this with your real tests.
test('utility ratingElo works', function(assert) {
  console.log('utility ratingElo');
  let result = ratingElo(2000, 1400, 1);
  console.log(result);
  assert.ok(Array.isArray(result));
});
