class Post < ActiveRecord::Base
  belongs_to :postable, :polymorphic => true
  delegate :media, to: :postable
end
# @posts = Post.joins('INNER JOIN "images" ON "images"."id" = "posts"."postable_id"').where(:images => {category_id: 2}).joins('INNER JOIN "videos" ON "videos"."id" = "posts"."postable_id"').where(:videos => {category_id: 2})

# Post.joins('LEFT JOIN "videos" ON "videos"."id" = "posts"."postable_id" AND "postable_type" = "Video"').where(:videos => {category_id: 3}).joins('INNER JOIN "images" ON "images"."id" = "posts"."postable_id" AND "postable_type" = "Image"').where(:images => {category_id: 3})
