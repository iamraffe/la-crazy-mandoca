class VideosController < ApplicationController
  def create
    @post = Post.new(post_params)
    if !@post.valid? 
      render json: {errors: @post.errors, field: "post", type: "Video"}, status: :unprocessable_entity
    else
      @video = Video.new(video_params)
      if @video.valid?
        @video.save
        @post.mediable = @video
        @post.save
        current_user.posts << @post
        render js: {}
      else
        render json: {errors: @video.errors, field: "video", type: "Video"}, status: :unprocessable_entity
      end
    end
  end


  private
    def video_params
      params.require(:video).permit(:url)
    end

    def post_params
      params.require(:post).permit(:title, :category_id, :hashtag_list)
    end
end
