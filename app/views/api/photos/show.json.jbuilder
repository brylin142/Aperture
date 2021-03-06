# json.partial! "api/photos/show", photo: @photo

json.photo do
  json.extract! @photo, :id, :title, :description, :user_id, :img_url
end

json.user do
  json.partial! "api/users/user", user: @photo.user
  json.extract! @photo.user, :first_name
end

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :photo_id, :user_id, :user
    end
  end
end

json.tags do
  @photo.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :label, :photo_id
    end
  end
end
