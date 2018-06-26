Rails.application.routes.draw do
  devise_for :users

  root 'home#index'

  # この辺よくわかってない
  resources :conversations, only: [:create] do
    member do
      post :close
    end
    resources :messages, only: [:create]
  end
end
