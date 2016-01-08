class CategoriesController < ApplicationController
  def show
    @category = Category.friendly.find(params[:id])
    @posts = Image.where(category_id: @category.id) || Video.where(category_id: @category.id)
  end
end
