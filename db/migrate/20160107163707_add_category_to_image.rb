class AddCategoryToImage < ActiveRecord::Migration
  def change
    add_reference :images, :category, index: true, foreign_key: true
  end
end
