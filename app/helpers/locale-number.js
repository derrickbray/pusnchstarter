import Ember from 'ember';

export function localeNumber(params/*, hash*/) {
  const num = parseInt(params[0]);

  if (!isNaN(num)) {
    return num.toLocaleString();
  }

  return '0';
}

export default Ember.Helper.helper(localeNumber);
