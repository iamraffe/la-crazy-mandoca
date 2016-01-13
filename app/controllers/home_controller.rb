class HomeController < ApplicationController
  def index
    # @posts = Post.order("created_at DESC")
    @posts = Post.paginate(page: params[:page], per_page: 2).order('created_at DESC')
    respond_to do |format|
      format.html 
      format.js
    end
  end

  def profile
  end
end
