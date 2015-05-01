class AddSentimentToStockModel < ActiveRecord::Migration
  def change
  	add_column :stocks, :sentiment, :text
  	add_column :stocks, :sentiment_score, :float
  end
end
