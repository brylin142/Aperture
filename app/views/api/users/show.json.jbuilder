json.partial! "api/users/user", user: @user
json.photos do
  @user.photos.each do |photo|
    json.extract! photo, :id, :title, :description, :user_id, :img_url
  end
end