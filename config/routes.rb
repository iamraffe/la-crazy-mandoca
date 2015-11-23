Rails.application.routes.draw do
  root 'home#index'

  get 'home/profile'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
end
