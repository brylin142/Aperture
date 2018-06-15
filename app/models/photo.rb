# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  img_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :user_id, :img_url, presence: true

  belongs_to :user
  has_many :comments
  has_many :tags
  
  has_many :album_photos,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :AlbumPhoto

  has_many :albums, through: :album_photos, source: :album
end
