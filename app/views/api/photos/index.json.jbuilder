@photos.each do |photo|
  json.set! photo.id do
    json.partial! "api/photos/show", photo: photo
  end
end
