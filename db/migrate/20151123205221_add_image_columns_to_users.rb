class AddImageColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string, :default => 'http://localhost:3000/assets/avatar01.jpg'
  end
end
