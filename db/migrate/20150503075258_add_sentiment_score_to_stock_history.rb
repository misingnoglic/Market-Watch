class AddSentimentScoreToStockHistory < ActiveRecord::Migration
  def change
  	add_column :stock_histories, :sentiment_score, :float, default: 0 
  end
end
