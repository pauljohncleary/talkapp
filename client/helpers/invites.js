//https://graph.facebook.com/USER_ID/invitable_friends

Template.invite.created = function() {

  Meteor.setTimeout(function() {
    FB.api(
      '/me/taggable_friends',
      function (response) {
        console.log(response);
        if (response && !response.error) {
        }
      }
    );
  }, 1000);

};

function renderMFS() {
   // First get the list of friends for this user with the Graph API
   FB.api('/me/friends', function(response) {
     var container = document.getElementById('mfs');
     var mfsForm = document.createElement('form');
     mfsForm.id = 'mfsForm';

     // Iterate through the array of friends object and create a checkbox for each one.
     for(var i = 0; i < Math.min(response.data.length, 10); i++) {
         var friendItem = document.createElement('div');
         friendItem.id = 'friend_' + response.data[i].id;
         friendItem.innerHTML = '<input type="checkbox" name="friends" value="' + response.data[i].id + '" />' + response.data[i].name;
         mfsForm.appendChild(friendItem);
       }
       container.appendChild(mfsForm);

       // Create a button to send the Request(s)
       var sendButton = document.createElement('input');
       sendButton.type = 'button';
       sendButton.value = 'Send Request';
       sendButton.onclick = sendRequest;
       mfsForm.appendChild(sendButton);
     });
 }
