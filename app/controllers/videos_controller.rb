class VideosController < ApplicationController
  before_action :add_embed_media_to_video, only: [:create, :update]
  def create
    @video = Video.new(video_params)
    @video.save
    @video.create_post
    redirect_to root_path
  end


  private
    def add_embed_media_to_video
      yt_video = Yt::Video.new url: params[:video][:media]
      params[:video][:media] = yt_video.embed_html
    end

    def video_params
      params.require(:video).permit(:title, :media)
    end
end
