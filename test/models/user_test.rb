# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  img_url         :string           default("http://superawesomevectors.com/wp-content/uploads/2015/10/flat-camera-icon-thumb.jpg")
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
