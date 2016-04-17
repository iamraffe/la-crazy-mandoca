class VideosController < ApplicationController
  before_action :add_embed_media_to_video, only: [:create, :update]
  def create
    @video = Video.create(video_params)
    @post = current_user.posts.create(post_params.deep_merge({mediable: @video}))
    if @post.errors.nil? && @video.errors.nil?
      redirect_to root_path, format: :html
    else
      render json: {errors: @post.errors, type: @post.mediable_type}, status: :unprocessable_entity
    end
    # redirect_to root_path
  end


  private
    def add_embed_media_to_video
      yt_video = Yt::Video.new url: params[:video][:url]
      params[:video][:media] = yt_video.embed_html
      params[:video][:youtube_id] = yt_video.id
    end

    def video_params
      params.require(:video).permit(:media, :url, :youtube_id)
    end

    def post_params
      params.require(:post).permit(:title, :category_id, :hashtag_list)
    end
end
