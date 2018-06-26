class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  # TODO: 意味調べておく
  protect_from_forgery with: :exception
end
