class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :screen_name
      t.text :content
      t.text :sentiment
      t.float :sentiment_score
      t.integer :stock_id

      t.timestamps null: false
    end
  end
end
