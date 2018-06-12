# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  label      :string           not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
