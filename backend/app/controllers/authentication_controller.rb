class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])
    user = User.where(email: params[:email]).first
    if command.success? and user
      render json: { auth_token: command.result, id: user.id.to_s }
    else
      #TODO change what is sent back to the client
      render json: { error: command.errors.full_messages }, status: :unauthorized
    end
  end
end
