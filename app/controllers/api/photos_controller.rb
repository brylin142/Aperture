class Api::PhotosController < ApplicationController
  before_action :require_login
  
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.all
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def photo_params
    params.require(:photos).permit(:title, :description, :user_id, :img_url)
  end
end
