json.album do
  json.extract! @album, :id, :title, :user_id, :album_photos
end

json.photos do
  @album.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :user_id, :img_url
    end
  end
end

json.album_photos do
  @album.album_photos.each do |album_photo|
    json.set! album_photo.id do
      json.extract! album_photo, :id, :photo_id, :album_id
    end
  end
end