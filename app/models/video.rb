class Video < ActiveRecord::Base
  has_one :post, :as => :postable
  belongs_to :user
  belongs_to :category
end
