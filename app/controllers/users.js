import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        let url = `https://api.github.com/search/users?q=${param}`

        return Ember.$.getJSON(url).then((data) => {
          return data.items.filter(function(user) {
            let users = user.login.includes(param);
            return users
          });
        })
      } else {
        let url = 'https://api.github.com/users'

        return Ember.$.getJSON(url).then((data) => {
          return data;
        })
      }
    }
  }
});
