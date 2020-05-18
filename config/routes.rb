Rails.application.routes.draw do
  get 'room/index'
  resources :questions
  resources :themes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
