class CreateStockHistories < ActiveRecord::Migration
  def change
    create_table :stock_histories do |t|
      t.string :stock_symbol
      t.float :last_trade_price

      t.timestamps null: false
    end
  end
end
