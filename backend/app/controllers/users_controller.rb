class UsersController < ApplicationController
  skip_before_action :authenticate_request

  def create
    user = User.create(user_params)
    if user.valid?
      render json: { message: "user " + user.email + " created" }
    else
      render json: { errors: user.errors.full_messages }, status: :not_acceptable
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
