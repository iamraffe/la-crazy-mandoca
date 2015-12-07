class VideosController < ApplicationController

  def create
    @image = Image.new(image_params)
    @image.save
    @image.create_post
    # @image.profile = Image.create!
    # byebug
    # @image.save

    redirect_to root_path
  end


  private
    def image_params
      params.require(:image).permit(:title, :media)
    end
end
