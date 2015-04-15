class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :stock_name
      t.string :stock_symbol

      t.timestamps null: false
      t.float :last_trade_price, default: 0
      t.float :percent_change, default: 0
    end
  end
end
