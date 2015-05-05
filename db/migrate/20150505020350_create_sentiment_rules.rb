class CreateSentimentRules < ActiveRecord::Migration
  def change
    create_table :sentiment_rules do |t|
      t.string :rails
      t.string :s

      t.timestamps null: false
    end
  end
end
