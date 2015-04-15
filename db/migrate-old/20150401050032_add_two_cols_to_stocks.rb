class AddTwoColsToStocks < ActiveRecord::Migration
  def change
  	add_column :stocks, :last_trade_price, :float, default: 0 
  	add_column :stocks, :percent_change, :float, default: 0 
  end
end
