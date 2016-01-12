class VideosController < ApplicationController
  before_action :add_embed_media_to_video, only: [:create, :update]
  def create
    # category = find_category
    # @video = Video.new(video_params)
    # @video.user = current_user
    # @video.category = category
    # @video.save
    # @video.create_post
    # redirect_to root_path
    @video = Video.create(video_params)
    # @post = Post.create(post_params.deep_merge({mediable: @image}))
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

    # def find_category
    #   Category.find(params[:video][:category])
    # end
end
