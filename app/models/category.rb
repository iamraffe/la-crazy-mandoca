class Category < ActiveRecord::Base
  has_many :videos
  has_many :images
end
