class ConversationChannel < ApplicationCable::Channel
  def subscribed
    stream_from "conversation_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    @conversation =
      Conversation.includes(:recipient).find(data['conversation_id'])
    @message = @conversation.messages.create(user_id: data['user_id'], body: data['message'])
    data['sender_id'] = @message.user.id

    # TODO: Jobに移動
    ActionCable.server.broadcast 'conversation_channel', data: data
  end
end
