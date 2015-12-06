class AddAttachmentMediaToImages < ActiveRecord::Migration
  def self.up
    change_table :images do |t|
      t.attachment :media
    end
  end

  def self.down
    remove_attachment :images, :media
  end
end
