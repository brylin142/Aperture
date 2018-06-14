json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :user_id
    end
  end
end

json.photos do
  @albums.each do |album|
    album.photos.each do |photo|
      json.set! photo.id do
        json.extract! photo, :id, :title, :description, :user_id, :img_url
      end
    end
  end
end

json.album_photos do
  @albums.each do |album|
    album.album_photos.each do |album_photo|
      json.set! album_photo.id do
        json.extract! album_photo, :id, :photo_id, :album_id
      end
    end
  end
end