class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])
    user = User.where(email: params[:email]).first
    if command.success?
      render json: { auth_token: command.result, user_id: user.id.to_s }
    else
      render json: { error: command.errors.full_messages }, status: :unauthorized
    end
  end
end
