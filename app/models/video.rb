class Video < ActiveRecord::Base
  has_one :post, :as => :mediable
  belongs_to :user
  before_save :handle_youtube
  validates :url, presence: true
  
  private
    def handle_youtube
      yt_video = Yt::Video.new url: self.url
      self.media = yt_video.embed_html
      # byebug
      self.youtube_id = yt_video.id
    end
end
