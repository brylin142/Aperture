class Api::AlbumPhotosController < ApplicationController
  def create
    @album_photo = AlbumPhoto.new(album_photo_params)
    if @album_photo.save
      render :show
    else
      render json: @album-photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @album_photo = Album.find(params[:id])
    if @album_photo.destroy
      render :show
    else
      render json: @album_photo.errors.full_messages, status: 422
    end
  end

  private

  def album_photo_params
    params.require(:album_photo).permit(:album_id, :photo_id)
  end
end
