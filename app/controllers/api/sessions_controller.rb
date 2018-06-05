class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      p "I'm logged in"
      render :show
    else
      render json: ["Invalid credentials"], status: 422
      render :show
    end
  end

  def destroy
    @user = current_user
    if @user
      p "logging out"
      logout
      render json: {}
    else
      render json: ["No user logged in"], status: 404
    end
  end
end
