class Api::AlbumsController < ApplicationController
  def create
  end

  def destroy
  end

  private

  def album_params
    params.require(:album).permit(:title, :user_id)
  end
end
