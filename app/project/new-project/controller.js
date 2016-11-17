import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        const project = this.store.createRecord('project', { name, goal, description });

        project.save()
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
