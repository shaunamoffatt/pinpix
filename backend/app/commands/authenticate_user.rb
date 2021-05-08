# https://www.pluralsight.com/guides/token-based-authentication-with-ruby-on-rails-5-api
class AuthenticateUser
  prepend SimpleCommand
  attr_accessor :email, :password
  #this is where parameters are taken when the command is called
  def initialize(email, password)
    @email = email
    @password = password
  end

  #this is where the result gets returned
  def call
    JsonWebToken.encode({ user_id: user.id }) if user
  end

  private

  def user
    user = User.where(email: email).first

    return user if user && user.authenticate(password)
    errors.add :user_authentication, "Invalid email and password"
    nil
  end
end
