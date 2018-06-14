class ChangeDefaultProfilePic < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :img_url, :string, :default => "http://superawesomevectors.com/wp-content/uploads/2015/10/flat-camera-icon-thumb.jpg"
  end
end
