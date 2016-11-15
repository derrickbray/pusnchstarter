
import { percent } from 'punchstarter/helpers/percent';
import { module, test } from 'qunit';

module('Unit | Helper | percent');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(percent([5, 100]), 5);
  assert.equal(percent([4, 10]), 40);
  assert.equal(percent([2, 5]), 40);

  // It still works for strings
  assert.equal(percent(['2', 5]), 40);
});
