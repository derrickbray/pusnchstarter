import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        fetch(`${config.apiUrl}/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, goal, description }),
        }).then((r) => r.json())
          .then(() => {
            alert('you did it');

            this.transitionToRoute('project.index');
          });
      } else {
        alert('fill it in');
      }
    },
  },
});
