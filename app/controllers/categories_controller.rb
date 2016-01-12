class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    @posts = Post.where(:category_id => @category.id).order(created_at: 'DESC')   
  end
end
