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

class Tag < ApplicationRecord
  validates :label, :photo_id, presence: true

  belongs_to :photo
end
