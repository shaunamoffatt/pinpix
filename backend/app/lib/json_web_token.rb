# https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-two
# Wraps JWT to provide token encoding and decoding methods
require "jwt"

class JsonWebToken
  def self.encode(payload)
    id = payload[:user_id].to_s
    p = { user_id: id }
    # sign token with application secret
    JWT.encode p, ENV["API_SECRET_KEY"], "HS256"
  end

  def self.decode(token)
    puts "HERE IS THE DECODE: "
    puts token
    # get payload; first index in decoded Array
    body = JWT.decode token, ENV["API_SECRET_KEY"], true, { algorithm: "HS256" }
    HashWithIndifferentAccess.new body
    puts body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    puts e.message
  end
end
