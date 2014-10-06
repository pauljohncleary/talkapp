Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');
Router.onBeforeAction(function() {
  if(!Meteor.userId()) {
    Router.go('/sign-up');
  } else {
    this.next();
  }
});

Router.map(function() {
  this.route('posts', {path: '/'});
});
