class ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def new
    @image = Image.new
  end

  def create
    # category = find_category
    # @image = Image.new(image_params)
    # @image.user = current_user
    # @image.category = category
    # @image.save
    # @image.create_post
    # @image.profile = Image.create!
    # byebug
    # @image.save
    @image = Image.create(image_params)
    # @post = Post.create(post_params.deep_merge({mediable: @image}))
    @post = current_user.posts.create(post_params.deep_merge({mediable: @image}))
    redirect_to root_path
  end

  def edit
    @image = Image.find(params[:id])
  end

  def update
    @images = Image.all
    @image = Image.find(params[:id])

    @image.update_attributes(image_params)
  end

  def delete
    @image = Image.find(params[:product_id])
  end

  def destroy
    @images = Image.all
    @image = Image.find(params[:id])
    @image.destroy
  end

  private
    def image_params
      params.require(:image).permit(:media)
    end

    def post_params
      params.require(:post).permit(:title, :category_id)
    end

    # def find_category
    #   Category.find(params[:image][:category])
    # end
end
