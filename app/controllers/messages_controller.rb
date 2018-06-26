class MessagesController < ApplicationController
  def create
    @conversation =
      Conversation.includes(:recipient).find(params[:conversation_id])
    pp @conversation
    @message = @conversation.messages.create(message_params)
    pp @message
    # create.jsでjson返します
    respond_to do |format|
      format.js
    end
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :body)
  end
end
