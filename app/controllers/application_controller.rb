class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  # CSRF対策
  protect_from_forgery with: :exception
end
