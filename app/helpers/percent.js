import Ember from 'ember';

export function percent(params/*, hash*/) {

  return Math.round(params[0] / params[1] * 100);
}

export default Ember.Helper.helper(percent);
