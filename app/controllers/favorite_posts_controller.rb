class FavoritePostsController < ApplicationController
  before_action :set_post

  def create
    respond_to do |format|
      if Favorite.create(favorited: @post, user: current_user)
        # redirect_to @post, notice: 'Post has been favorited'
        @type = 'success', @message = 'Post has been favorited'
        format.js   {}
      else
        # redirect_to @post, alert: 'Something went wrong...*sad panda*'
        @type = 'error', @message = 'Something went wrong...*sad panda*'
        format.js   {}
      end
    end
  end

  def destroy
    respond_to do |format|
      Favorite.where(favorited_id: @post.id, user_id: current_user.id).first.destroy
      @type = 'error', @message = 'Post is no longer in favorites'
      # redirect_to @post, notice: 'Post is no longer in favorites'
      format.js   {}
    end
  end

  private

  def set_post
    @post = Post.friendly.find(params[:post_id] || params[:id])
  end
end
