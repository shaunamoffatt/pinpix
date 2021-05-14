# https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-two
# Wraps JWT to provide token encoding and decoding methods
require "jwt"

class JsonWebToken
  ALGORITHM = "HS256"
  #token = JWT.encode payload, HMAC_SECRET, ALGORITHM
  # Stored in the .env

  def self.encode(payload)
    id = payload[:user_id].to_s
    p = { user_id: id }
    # sign token with application secret
    JWT.encode p, ENV["API_SECRET_KEY"]
  end

  def self.decode(token)
    puts "HERE IS THE DECODE: "
    puts token
    # get payload; first index in decoded Array
    body = JWT.decode token, ENV["API_SECRET_KEY"]
    HashWithIndifferentAccess.new body
    puts body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    raise ExceptionHandler::InvalidToken, e.message
  end
end
