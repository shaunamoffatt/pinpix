require_relative "boot"

# Add this require instead of "rails/all":
require "rails"
require File.expand_path("../boot", __FILE__)
# A railtie is a class that sits at the core of the Rails framework.
# It's the glue that ties in every component into the Rails core framework. Using railties,
# we can easily add/modify the Rails initialization process and add/extend the Rails framework.
# Rege, Gautam. Ruby and MongoDB Web Development Beginner's Guide, Packt Publishing, Limited, 2012.
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"

#require "active_storage/engine"
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
    config.api_only = true
    config.mongoid.logger = Logger.new(STDERR, :warn)
    config.paths.add File.join("app", "api"), glob: File.join("**", "*.rb")
    config.autoload_paths += Dir[Rails.root.join("app", "api", "*")]
    #autoloads lib folder during production
    config.eager_load_paths << Rails.root.join("lib")

    #autoloads lib folder during development
    config.autoload_paths << Rails.root.join("lib")
    # Sessions and Cookies Middleware

    # This also configures session_options for use below
    config.session_store :cookie_store, key: "_interslice_session"

    # Required for all session management (regardless of session_store)
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use config.session_store, config.session_options

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    #Loading Mongoid Configuration https://docs.mongodb.com/mongoid/current/tutorials/mongoid-configuration/
    config.generators do |g|
      g.orm :mongoid
    end
  end
end

#https://www.pluralsight.com/guides/handling-file-upload-using-ruby-on-rails-5-api
module Fileuploadapp
  class Application < Rails::Application
    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins "*"
        resource "*", :headers => :any, :methods => [:get, :post, :options]
      end
    end
    config.api_only = true
  end
end
