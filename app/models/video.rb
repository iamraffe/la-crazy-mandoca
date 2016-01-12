class Video < ActiveRecord::Base
  has_one :post, :as => :mediable
  belongs_to :user
  belongs_to :category
end
