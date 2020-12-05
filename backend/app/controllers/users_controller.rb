class UsersController < ApplicationController

  def index
    @user = User.all.entries
    render json: @user
  end

  def show
    @user = User.all.entries
    render json: @user
  end
end