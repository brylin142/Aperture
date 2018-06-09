json.extract! photo, :id, :title, :description, :user_id, :img_url
json.user do
  json.partial! "api/users/user", user: photo.user
  json.extract! photo.user, :first_name
end