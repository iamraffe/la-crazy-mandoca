Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'home#index'

  get 'home/profile'

  resources :posts

  resources :posts do
    member do
      put "like" => "posts#upvote"
      put "dislike" => "posts#downvote"
    end
  end

  resources :images

  resources :videos

  resources :categories

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", :registrations => "registrations" }

  resources :users

  # get '/categories/:name' => 'categories#show', :as => :category_with_name

  # get '/posts/:type/:id/:title' => 'posts#show', :as => :post_with_title


end
