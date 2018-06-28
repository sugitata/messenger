Rails.application.routes.draw do
  devise_for :users

  root 'home#index'

  resources :conversations, only: [:create] do
    resources :messages, only: [:create]
  end
end
