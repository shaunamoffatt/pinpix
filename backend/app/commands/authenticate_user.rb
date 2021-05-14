# https://www.pluralsight.com/guides/token-based-authentication-with-ruby-on-rails-5-api
class AuthenticateUser
  prepend SimpleCommand

  #this is where parameters are taken when the command is called
  def initialize(email, password)
    @email = email
    @password = password
  end

  #this is where the result gets returned
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  def user
    user = User.where(email: email).first
    puts "HERE IS THE USER"
    puts email
    return user if user && user.authenticate(password)
    # Add error depending on if email exists in db or not
    if email == ""
      errors.add :Error, ": Please enter an email"
    elsif User.where(email: email).first && password == ""
      errors.add :Error, ": Please enter a password"
    elsif User.where(email: email).first
      errors.add :Error, ": Incorrect password"
    else
      errors.add :Error, ": Email not registered."
    end
    nil
  end
end
