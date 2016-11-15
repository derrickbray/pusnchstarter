import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://tiy-tn-class-api-fall-16.herokuapp.com/api/punch/projects')
      .then((r) => r.json());
  },
});
