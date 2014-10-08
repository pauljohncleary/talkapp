Template.groupChat.helpers({
  members: function () {
    var group = Groups.findOne();
    Session.set('groupId', group._id);
    return group.members;
  },
  messages: function() {
    return Groups.findOne().messages;
  }
});


Template.groupChat.events({
  'submit form': function(e) {
    e.preventDefault();

    var message = {
      message: $(e.target).find('[name=message]').val()
    };

    Groups.update({ _id : Session.get('groupId') }, { $push: { messages: message} });
  }
});
