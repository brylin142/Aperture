json.extract! photo, :id, :title, :description, :user_id, :img_url

json.user do
  json.partial! "api/users/user", user: photo.user
  json.extract! photo.user, :first_name
end


# json.photo do
#   json.extract! photo, :id, :title, :description, :user_id, :img_url
# end
# json.user do
#   json.partial! "api/users/user", user: photo.user
#   json.extract! photo.user, :first_name
# end
# json.comments do
#   photo.comments.each do |comment|
#     json.extract! comment, :id, :body, :photo_id, :user_id
#   end
# end
