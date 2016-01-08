class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    # @posts = Image.where(category_id: @category.id).order(created_at: :desc) || Video.where(category_id: @category.id).order(created_at: :desc)
    @posts = Post.joins("INNER JOIN images ON images.id = posts.postable_id").where(:images => {category_id: @category.id})
    byebug
  end
end
