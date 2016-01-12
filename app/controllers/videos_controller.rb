class VideosController < ApplicationController
  before_action :add_embed_media_to_video, only: [:create, :update]
  def create
    @video = Video.create(video_params)
    @post = current_user.posts.create(post_params.deep_merge({mediable: @video}))
    redirect_to root_path
  end


  private
    def add_embed_media_to_video
      yt_video = Yt::Video.new url: params[:video][:media]
      params[:video][:media] = yt_video.embed_html
    end

    def video_params
      params.require(:video).permit(:media)
    end

    def post_params
      params.require(:post).permit(:title, :category_id)
    end    
end
