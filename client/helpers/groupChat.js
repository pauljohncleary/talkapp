Template.groupChat.helpers({
  members: function () {
    return Groups.findOne().members;
  },
  messages: function() {
    return Groups.findOne().messages;
  }
});
