class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    @posts = Post.all.select { |post| post.postable.category_id == @category.id }    
    # byebug
  end
end
