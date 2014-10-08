Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router._filters = {
  isLoggedIn: function(pause) {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.render('loginButtons');
      pause();
    }
  }
};

Router.map(function() {
  this.route('groupChat', { path: '/', waitOn: function() {
    return Meteor.subscribe('groups'); 
  } });
});

Router.onBeforeAction(Router._filters.isLoggedIn);
