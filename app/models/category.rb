class Category < ActiveRecord::Base
  has_many :videos
  has_many :images
  validates :name, uniqueness: true
  extend FriendlyId
  friendly_id :name, use: :slugged
end
