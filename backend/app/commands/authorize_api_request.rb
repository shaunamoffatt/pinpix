class AuthorizeApiRequest
  prepend SimpleCommand

  # Authorization header token is passed in
  def initialize(header_token)
    @header_token = header_token
  end

  # The Service object entry point to return user
  def call
    user
  end

  private

  attr_reader :header_token
  # if the User.find() returns an empty set or decoded_auth_token returns false,
  # @user will be nil.
  # return the user or throw an error
  def user
    puts @header
    puts "ABOVE IS THE HEADER"
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.add(:token, "Invalid token") && nil
  end

  # decodes the token received from http_auth_headerand retrieves the user's ID
  def decoded_auth_token
    JsonWebToken.decode(@header_token)
  end
end
