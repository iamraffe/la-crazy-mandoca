class PostsController < ApplicationController
  def show
    @top_posts = Post.all.order('cached_votes_score DESC').limit(16)
    @post = Post.friendly.find(params[:id])
    commontator_thread_show(@post)
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
