Rails.application.routes.draw do
  devise_for :users
  #ルートパスへのアクセスがあったら、messages_controllerのindexアクションが呼び出される
  root "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update]
end
