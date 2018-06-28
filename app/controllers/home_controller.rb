class HomeController < ApplicationController
  def index
    session[:conversation] = []

    @users = User.all.where.not(id: current_user)
  end
end
