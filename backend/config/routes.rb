Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #resources :session, only: [:create]
  #resources :registrations, only: [:create]
  post "authenticate", to: "authentication#authenticate"
  post "users", to: "users#create"
  get "users", to: "users#index"
  #POSTS
  post "post", to: "post#create"
  get "post", to: "post#show"

  get "tests", to: "tests#create"
  post "getname", to: "application#get_name"
end
