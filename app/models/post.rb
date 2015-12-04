class Post < ActiveRecord::Base
  has_attached_file :media_url, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :media_url, content_type: /\Aimage\/.*\Z/
end
