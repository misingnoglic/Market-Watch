class CreateFeedEntries < ActiveRecord::Migration
  def change
    create_table :feed_entries do |t|
      t.text :title
      t.text :description
      t.string :link
      t.datetime :published_at
      t.string :guid
      t.integer :stock_id

      t.timestamps null: false
    end
  end
end
