class HomeController < ApplicationController
  def index
    # @posts = Post.order("created_at DESC")
    @posts = Post.paginate(page: params[:page], per_page: 5).order('created_at DESC')
    @top_5 = Post.all.order('cached_votes_score DESC').limit(5)
    respond_to do |format|
      format.html
      # format.json render: 'index'
      format.js
    end
  end

  def profile
  end
end
