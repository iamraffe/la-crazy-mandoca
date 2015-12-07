class Post < ActiveRecord::Base
  belongs_to :postable, :polymorphic => true
  # attr_accessible :postable_type
  delegate :media, to: :postable
end
