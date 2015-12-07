class Image < ActiveRecord::Base
  has_one :post, :as => :postable


  has_attached_file :media, styles: { large: "628x600^", medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :media, content_type: /\Aimage\/.*\Z/


  # def media_url(style = 'thumb')
  #   self.media.url(style.to_sym)
  # end
end
