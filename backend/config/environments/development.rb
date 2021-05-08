Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join("tmp", "caching-dev.txt").exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}",
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  #config.active_storage.service = :amazon

  # Don't care if the mailer can't send.
  #config.action_mailer.raise_delivery_errors = false

  #config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  #config.active_support.deprecation = :log

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  # config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  # Paperclip (for Amazon)
  # https://github.com/thoughtbot/paperclip/wiki/Paperclip-with-Amazon-S3
  # https://devcenter.heroku.com/articles/paperclip-s3
  config.paperclip_defaults = {
    storage: :s3,
    s3_region: ENV["AWS_REGION"],
    s3_credentials: {
      access_key_id: ENV["AWS_ACCESS_KEY_ID"],
      secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
    },
    s3_protocol: :https,
    s3_host_name: "s3-us-east-1.amazonaws.com",

    #s3_host_alias: ENV["CLOUDFRONT_DOMAIN"].gsub("https://", ""),
    use_accelerate_endpoint: true,
    bucket: ENV["AWS_BUCKET"],

    s3_headers: {
      "Cache-Control" => "max-age=315576000",
    },
  }

  Paperclip::Attachment.default_options[:s3_region] = "us-east-1"
  #Paperclip::Attachment.default_options[:s3_host_name] = "s3.us-east-1.amazonaws.com"
  Paperclip.options[:command_path] = "usr/local/bin"
end
