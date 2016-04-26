class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    @posts = Post.where(:category_id => @category.id).order(created_at: 'DESC')
    @top_posts = Post.all.order('cached_votes_score DESC').limit(16)
  end
end
