// TODO: 拡張子をjs.erbにして、conversation_idを取得して、チャネルを分割する
// https://www.thegreatcodeadventure.com/rails-5-action-cable-with-multiple-chatroom-subscriptions/
App.conversation = App.cable.subscriptions.create({ channel: "ConversationChannel", conversation: "" }, {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    var res = data.data
    var conversation = $('.conversation').find("[data-conversation-id='" + res['conversation_id'] + "']");
    var currentUserId = Number($('.header__right__current-user').attr('data-current-user-id'))

    // TODO: Jobで書いたほうがDRYになりそう
    messageClass = currentUserId === res['sender_id'] ? 'message__sent ml-auto' : 'message__received mr-auto'
    conversation.find('.messages-list').find('ul').append(
      '<li>' +
        '<div class="message d-flex">' +
          '<div class="m-2 p-2 rounded ' + messageClass + '">' +
            res['message'] +
          '</div>' +
        '</div>' +
      '<li>'
    );

    $('.messages-list').animate(
      { scrollTop: $('.messages-list')[0].scrollHeight }, 'fast'
    );
  },

  speak: function(message, user_id, conversation_id) {
    return this.perform('speak', { message: message, user_id: user_id, conversation_id, conversation_id });
  }
}, $(document).on('keypress', '[data-behavior~=conversation_speaker]', function(event) {
  if (event.keyCode === 13) {
    var conversationid = $('.message-form__conversationid');
    var userid = $('.message-form__userid');
    var messageForm = $('.message-form__field');
    App.conversation.speak(messageForm.val(), userid.val(), conversationid.val());
    return messageForm.val('');
  }
}));
