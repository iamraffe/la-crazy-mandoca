class AddPostableToPosts < ActiveRecord::Migration
  def change
    add_reference :posts, :postable, polymorphic: true, index: true
  end
end
