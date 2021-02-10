class UsersController < ApplicationController
  skip_before_action :authenticate_request

  # POST /register
  # return authenticated token upon signup
  def create
    user = User.create(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    if user.valid?
      render json: { message: "user created ", auth_token: auth_token }
    else
      render json: { error: user.errors.full_messages }, status: :not_acceptable
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.permit(:email, :password, :confirm_password)
  end
end
