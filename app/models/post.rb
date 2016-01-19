class Post < ActiveRecord::Base
  belongs_to :mediable, :polymorphic => true
  delegate :media, to: :mediable
  extend FriendlyId
  friendly_id :title, use: :slugged
  belongs_to :user
  belongs_to :category
  acts_as_votable
  self.per_page = 2
  # acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :hashtags
end
