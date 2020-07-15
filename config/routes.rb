Rails.application.routes.draw do
  #ルートパスへのアクセスがあったら、messages_controllerのindexアクションが呼び出される
  root "messages#index"
end
