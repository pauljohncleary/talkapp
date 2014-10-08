Meteor.publish('groups', function(groupId){
  return Groups.find({'members': this.userId } );
});
