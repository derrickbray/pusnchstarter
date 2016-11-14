import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return [
      {
        name: 'Fancy Iced Coffee',
        descripton: 'Isaac needs one of these.',
        goal: 1000000,
        earned: 20000,
      },
      {
        name: 'Cat Sticker Book',
        descripton: 'Because why not',
        goal: 5000,
        earned:100000,
      },
      {
        name: 'Robot Trashcans',
        descripton: 'This changes everything',
        goal: 10000,
        earned:250000,
      },
      {
        name: 'Potato Salad',
        descripton: 'Why',
        goal: 5000,
        earned:100000,
      },
    ];
  }
});
