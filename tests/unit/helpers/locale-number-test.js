
import { localeNumber } from 'punchstarter/helpers/locale-number';
import { module, test } from 'qunit';

module('Unit | Helper | locale number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.strictEqual(localeNumber([42]), '42');
  assert.strictEqual(localeNumber([2000]), '2,000');
  assert.strictEqual(localeNumber([153892378498734]), '153,892,378,498,734');

  assert.strictEqual(localeNumber([{}]), '0');
});
