class HomeController < ApplicationController
  def index
    @posts = Post.order("created_at DESC")
    # @video = Yt::Video.new id:  'BPNYv0vd78A'
  end

  def profile
  end
end
