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

class User < ApplicationRecord
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  before_validation :ensure_session_token

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, :email, :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :photos
  has_many :comments
  has_many :albums

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
