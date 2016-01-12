class AddMediableToPosts < ActiveRecord::Migration
  def change
    add_reference :posts, :mediable, polymorphic: true, index: true
  end
end
