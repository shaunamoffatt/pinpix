Rails.application.routes.draw do
  #mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #resources :session, only: [:create]
  #resources :registrations, only: [:create]
  post 'authenticate', to: 'authentication#authenticate'
  post 'users', to: 'users#create'
  get 'tests', to: 'tests#create'
  post 'getname', to: 'application#get_name'
end
