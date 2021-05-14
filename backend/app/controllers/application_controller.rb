require "json_web_token"

class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  def authenticate_request
    auth_header_token = request.headers["Authorization"]
    @current_user = AuthorizeApiRequest.new(auth_header_token).call
    render json: { error: "Not Authorized" }, status: 401 unless @current_user
  end

  def get_id
    render json: { name: @current_user.id }, status: 200
  end
end
