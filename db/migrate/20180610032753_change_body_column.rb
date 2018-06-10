class ChangeBodyColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :comments, :body, :text
  end
end
