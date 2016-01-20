class HashtagsController < ApplicationController
  def show
    @posts = Post.tagged_with(params[:id])
    @top_5 = Post.all.order('cached_votes_score DESC').limit(5)
  end
end
