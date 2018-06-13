json.album do
  json.extract! @album, :id, :title, :user_id
end

json.photo do
  @album.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :user_id, :img_url
    end
  end
end