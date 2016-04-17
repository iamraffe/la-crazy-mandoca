class AddMediaToVideos < ActiveRecord::Migration
  def change
    add_column :videos, :youtube_id, :string
    add_column :videos, :url, :string
    add_column :videos, :media, :string
  end
end
