Groups = new Meteor.Collection('groups');

Groups.allow({ update: isInGroup });
