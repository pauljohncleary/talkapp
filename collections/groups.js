Groups = new Meteor.Collection('groups');

Groups.allow({ update: isInGroup });

/* TO be implemented
Groups.deny({update: function(userId, post, fieldNames) {
    //may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

*/
