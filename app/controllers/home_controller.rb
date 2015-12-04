class HomeController < ApplicationController
  def index
    @post = Post.new
  end

  def profile
  end
end
