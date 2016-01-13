class PostsController < ApplicationController
  def show
    @post = Post.friendly.find(params[:id])
  end

  def create
    byebug
  end

  #upvote_from
  def upvote
    @post = Post.friendly.find(params[:id])
    @post.upvote_from current_user
    respond_to do |format|
      format.js 
    end
  end

  #downvote_from
  def downvote
    @post = Post.friendly.find(params[:id])
    @post.downvote_from current_user
    respond_to do |format|
      format.js 
    end
  end
end
