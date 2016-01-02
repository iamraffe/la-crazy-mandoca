class PostsController < ApplicationController
  def show
    klass = Object.const_get params[:type].classify
    @post = klass.find(params[:id])
  end

  def create
    byebug
  end
end
