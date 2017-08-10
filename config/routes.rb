Rails.application.routes.draw do
  root 'lifts#index', as: 'home'
  resources :lifts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
