Spaceinitiative::Application.routes.draw do
  root 'pages#home'

  namespace :api do
    namespace :tumblr do
      resources :posts, :comments
    end

    resources :members, :events, :projects, only: [:index, :show]
  end

  get '/home', to: 'pages#home'
  get '/about', to: 'pages#about'
  get '/discuss', to: 'pages#discuss'
  get '/projects', to: 'pages#projects'
  get '/join', to: 'pages#join'
  get '/contact', to: 'pages#contact'
  get '/about_site', to: 'pages#about_site'

  resources :members, :events, :projects, only: [:index, :show]
end
