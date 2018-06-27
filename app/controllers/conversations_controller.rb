class ConversationsController < ApplicationController
  def create
    @conversation = Conversation.get(current_user.id, params[:user_id])

    add_to_conversation unless conversated?

    respond_to do |format|
      format.js
    end
  end

  private

  def add_to_conversation
    session[:conversation] = []
    session[:conversation] << @conversation.id
  end

  def conversated?
    session[:conversation].include?(@conversation.id)
  end
end
