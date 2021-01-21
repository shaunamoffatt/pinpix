require_relative 'boot'

# Add this require instead of "rails/all":
require "rails"
require File.expand_path('../boot', __FILE__)  
require  "action_controller/railtie" 
require "action_mailer/railtie" 
require "sprockets/railtie"
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
      config.mongoid.logger = Logger.new(STDERR, :warn)
      config.paths.add File.join('app', 'api'), glob: File.join('**', '*.rb')
      config.autoload_paths += Dir[Rails.root.join('app', 'api', '*')]
  #autoloads lib folder during production
  config.eager_load_paths << Rails.root.join('lib')

  #autoloads lib folder during development
  config.autoload_paths << Rails.root.join('lib')
    # Sessions and Cookies Middleware
    #config.middleware.use ActionDispatch::Cookies
    #config.middleware.use ActionDispatch::Session::CookieStore

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
  end
end
