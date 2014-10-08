//options comes from facebook, user from us
Accounts.onCreateUser(function(options, user) {
  //user created, check if they already have an invite, if yes, associate that group with them, if not create a new group
  //invites to be implemented, for now we just create a new group for all new users
  var groupId = Groups.insert({
    members: [user._id]
  });

  user.group = groupId;

  if (options.profile) {
    user.profile = options.profile;
  }

  return user;
});
