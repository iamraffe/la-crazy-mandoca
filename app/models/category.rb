class Category < ActiveRecord::Base
  validates :name, uniqueness: true
  extend FriendlyId
  friendly_id :name, use: :slugged
end
