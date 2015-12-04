class AddAttachmentMediaUrlToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :media_url
    end
  end

  def self.down
    remove_attachment :posts, :media_url
  end
end
