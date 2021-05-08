CarrierWave.configure do |config|
  config.storage = :aws
  config.aws_bucket = ENV["S3_BUCKET"]
  config.aws_acl = "public-read"
  config.aws_authenticated_url_expiration = 60 * 60 * 24 * 7
  config.aws_credentials = {
    access_key_id: ENV["AWS_ACCESS_KEY_ID"],
    secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
    region: ENV["AWS_REGION"], # Required
  # session_token: ENV["AWS_SESSION_TOKEN"], # as using aws educate the acces key and secret access key are only temperarory
  }

  config.fog_credentials = {
    provider: "AWS",
    aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],
    aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
    region: ENV["AWS_REGION"],
    use_iam_profile: true,                         # optional, defaults to false
    endpoint: "https://pinpix.s3.amazonaws.com/", # optional, defaults to nil
  }
  config.fog_directory = ENV["S3_BUCKET"]
  #config.fog_public = false # optional, defaults to true
  config.fog_attributes = { "Cache-Control" => "max-age=315576000" }  # optional, defaults to {}
end
