class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
  end

  def destroy
    @album = Album.find(params[:id])
    if @album.destroy
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :user_id)
  end
end
