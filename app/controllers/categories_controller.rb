class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    @posts = Post.where(:category_id => @category.id).order(created_at: 'DESC')  
    @top_5 = Post.all.order('cached_votes_score DESC').limit(5)
  end
end
