class HomeController < ApplicationController
  def index
    # @posts = Post.order("created_at DESC")
    @posts = Post.paginate(page: params[:page], per_page: 5).order('created_at DESC')
    respond_to do |format|
      format.html
      # format.json render: 'index'
      format.js
    end
  end

  def profile
  end
end
