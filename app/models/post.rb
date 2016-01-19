class Post < ActiveRecord::Base
  belongs_to :mediable, :polymorphic => true
  delegate :media, to: :mediable
  extend FriendlyId
  friendly_id :title, use: :slugged
  belongs_to :user
  belongs_to :category
  acts_as_votable
  self.per_page = 5
  acts_as_taggable_on :hashtags
end
