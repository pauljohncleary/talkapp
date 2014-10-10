Accounts.ui.config({
    requestPermissions: {
        facebook: ['email', 'user_friends']
    }
});

window.fbAsyncInit = function() {
  FB.init({
    appId      : '316985495140116',
    status     : true,
    xfbml      : false,
    version    : 'v2.1'
  });
};
