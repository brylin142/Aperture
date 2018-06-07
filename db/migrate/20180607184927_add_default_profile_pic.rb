class AddDefaultProfilePic < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :img_url, :string, :default => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  end
end
