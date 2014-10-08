Template.groupChat.helpers({
  members: function () {
    return Groups.findOne().members;
  }
});
