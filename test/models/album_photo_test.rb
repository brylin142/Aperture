# == Schema Information
#
# Table name: album_photos
#
#  id         :bigint(8)        not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class AlbumPhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
