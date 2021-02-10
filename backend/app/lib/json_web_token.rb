# https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-two
# Wraps JWT to provide token encoding and decoding methods
require "jwt"

class JsonWebToken
  # secret to encode and decode token
  HMAC_SECRET = Rails.application.secrets.secret_key_base
  ALGORITHM = "HS256"

  def self.encode(payload, exp = 1.years.from_now)
    # set expiry to 1 year from creation time
    payload[:exp] = exp.to_i
    # sign token with application secret
    JWT.encode(payload, HMAC_SECRET, ALGORITHM)
  end

  def self.decode(token)
    # get payload; first index in decoded Array
    body = JWT.decode(token, HMAC_SECRET)[0]
    HashWithIndifferentAccess.new body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    raise ExceptionHandler::InvalidToken, e.message
  end
end
