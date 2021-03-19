class AuthorizeApiRequest
  prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_reader :headers

  # if the User.find() returns an empty set or decoded_auth_token returns false,
  # @user will be nil.
  # return the user or throw an error
  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.add(:token, "Invalid token") && nil
  end

  # decodes the token received from http_auth_headerand retrieves the user's ID
  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  # extracts the token from the authorization header
  def http_auth_header
    if headers["Authorization"].present?
      return headers["Authorization"].split(" ").last
    else
      errors.add(:token, "Missing token")
    end
    nil
  end
end
