class UsersController < ApplicationController
  skip_before_action :authenticate_request

  # POST /register
  # return authenticated token upon signup
  def create
    @user = User.new(user_params)
    @auth_token = AuthenticateUser.new(@user.email, @user.password).call()
    if @user.valid
      logger.info "User Created...."
      render json: { message: "User Created ", auth_token: @auth_token, user_id: @user.id }
    else
      render json: { error: @user.errors.full_messages }, status: :not_acceptable
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  # TODO: remove: just used as test
  def index
    @users = User.all
    render json: @users
  end

  private

  def user_params
    params.permit(:email, :password, :confirm_password)
  end
end
