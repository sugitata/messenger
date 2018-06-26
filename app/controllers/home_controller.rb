class HomeController < ApplicationController
  def index
    pp "======================================"
    pp current_user
    pp "======================================"
    session[:conversations] ||= []

    # @users = User.all.where.not(id: current_user)
    @users = User.all.where.not(id: current_user)
    # ここどういうconversationの検索の仕方している?
    @conversations = Conversation.includes(:recipient, :messages)
                                 .find(session[:conversations])
  end
end
